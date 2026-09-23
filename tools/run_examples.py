#!/usr/bin/env python3
"""Run every example, and hold its output to a recorded answer key.

This is the spine of the library. A lesson page never hand-types what a program
prints; it marks the spot and this tool fills it from a real run:

    <!-- output:every_number_is_a_double_js -->
    <!-- /output -->

Inside the markers is generated, outside is yours. There is a second kind,
`source:`, which pastes the program itself, so a page that shows the code cannot
quietly drift from the file CI runs.

Kinds of example, told apart by extension and stem
--------------------------------------------------
    examples/<stem>_js.js       an ES module, run by `node` (package.json says
                                "type": "module", so .js is ESM here; .mjs too)
    examples/<stem>_cjs.cjs     CommonJS, run by `node`
    examples/<stem>_ts.ts       TypeScript: type-checked by `tsc` (all of them
                                in one run, before any example), then run by
                                `node`, which erases the types itself
    examples/<stem>_tserror.ts  TypeScript that must FAIL the type check. It is
                                never run; its answer key is tsc's diagnostics,
                                exactly as a terminal shows them (colours off)
    examples/<stem>_sh.sh       `bash`, for what a program cannot show about
                                itself -- an exit status, an uncaught error, a
                                Node flag, stderr
    examples/<stem>_py.py       `python3 -I`, for a side-by-side with Python

Stems are unique repo-wide *across* extensions, because a Markdown block names a
bare stem with no path and no extension -- hence the language suffix.

Every example runs under one fixed environment -- `LC_ALL=C`, `LANG=C`,
`TZ=UTC`, no `NODE_OPTIONS`, colours off -- from its own folder, with the chosen
Node first on PATH (and as $NODE) and the pinned `tsc` on PATH, so a driver
calls the same toolchain the runner does. Output is captured as bytes and
decoded as UTF-8. Only stdout is recorded; a program that writes to stderr gets
a note, and a program that exits non-zero fails the run -- a lesson about an
uncaught error shows it through a `.sh` driver, which prints the exit status
and the lines of stderr that do not vary.

Toolchain
---------
    Node 24 or later   $NODE, then `node` on PATH, then Homebrew's node, node@24,
                       node@26 -- the first that is 24+. CI runs Node 24 (LTS).
    TypeScript         node_modules/typescript, pinned in package-lock.json:
                       run `npm ci` once after cloning.

Four modes
----------
    python3 tools/run_examples.py             verify + refill the .md blocks
    python3 tools/run_examples.py --update    accept current output as the key
    python3 tools/run_examples.py --check     write nothing; fail on any drift  (CI)
    python3 tools/run_examples.py --only X    touch example X and nothing else

``--only`` narrows both the running and the refilling to the stems you name
(a bare stem, a path to the file, or a lesson folder). A full ``--update``
re-records *every* answer key, which in a checkout open in two sessions means
adopting whatever a colleague's half-finished example happens to print.
"""

from __future__ import annotations

import argparse
import difflib
import functools
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

# extension -> the language name a source fence is labelled with
LANGS = {
    ".js": "javascript",
    ".mjs": "javascript",
    ".cjs": "javascript",
    ".ts": "typescript",
    ".mts": "typescript",
    ".cts": "typescript",
    ".sh": "bash",
    ".py": "python",
}
TS_EXTS = {".ts", ".mts", ".cts"}
MIN_NODE = 24
TSC = REPO / "node_modules" / "typescript" / "bin" / "tsc"

# <!-- output:stem -->  ...generated...  <!-- /output -->
# <!-- source:stem -->  ...generated...  <!-- /source -->
BLOCK = re.compile(
    r"(?P<open><!--\s*(?P<kind>output|source):(?P<stem>[A-Za-z0-9_\-]+)\s*-->)"
    r"(?P<body>.*?)"
    r"(?P<close><!--\s*/(?P=kind)\s*-->)",
    re.DOTALL,
)

SKIP_DIRS = {".git", "site", ".venv", "__pycache__", ".github", "demo", "node_modules", ".claude"}

# A fenced code block, opened or closed. The pages that DOCUMENT this mechanism
# (CONTRIBUTING.md) show the markers inside a fence -- those are documentation,
# not blocks to fill.
FENCE = re.compile(r"^[ \t]*(?P<f>`{3,}|~{3,})", re.MULTILINE)

# tsc --pretty colours its diagnostics; the page shows them as plain text.
ANSI = re.compile(r"\x1b\[[0-9;]*m")


def fenced_spans(text: str) -> list[tuple[int, int]]:
    """Character ranges covered by fenced code blocks."""
    spans: list[tuple[int, int]] = []
    open_at: int | None = None
    open_fence = ""
    for m in FENCE.finditer(text):
        fence = m.group("f")
        if open_at is None:
            open_at, open_fence = m.start(), fence
        elif fence[0] == open_fence[0] and len(fence) >= len(open_fence):
            spans.append((open_at, m.end()))
            open_at = None
    if open_at is not None:
        spans.append((open_at, len(text)))
    return spans


def walk(root: Path):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for name in filenames:
            yield Path(dirpath) / name


def find_examples() -> dict[str, Path]:
    """Map stem -> path for every example under an examples/ folder. Stems are unique."""
    found: dict[str, Path] = {}
    for path in sorted(walk(REPO)):
        if path.suffix not in LANGS or path.parent.name != "examples":
            continue
        if path.stem in found:
            sys.exit(
                f"ERROR: duplicate example stem {path.stem!r}\n"
                f"  {found[path.stem].relative_to(REPO)}\n  {path.relative_to(REPO)}\n"
                "Stems are named bare in Markdown blocks, so they must be unique across "
                "languages too -- end them in _js / _cjs / _ts / _tserror / _sh / _py."
            )
        if path.stem.endswith("_tserror") and path.suffix not in TS_EXTS:
            sys.exit(f"ERROR: {path.relative_to(REPO)}: only a .ts file can be a _tserror example")
        found[path.stem] = path
    return found


def is_tserror(src: Path) -> bool:
    return src.suffix in TS_EXTS and src.stem.endswith("_tserror")


# --- toolchain ---------------------------------------------------------------


def _node_major(node: str) -> int:
    done = subprocess.run([node, "--version"], capture_output=True, text=True)
    m = re.match(r"v(\d+)\.", done.stdout.strip())
    return int(m.group(1)) if done.returncode == 0 and m else 0


@functools.cache
def node_binary() -> str:
    """$NODE, then PATH, then Homebrew's kegs -- the first Node that is 24 or later."""
    candidates = [os.environ.get("NODE", ""), shutil.which("node") or ""]
    for prefix in ("/opt/homebrew/opt", "/usr/local/opt"):
        candidates += [f"{prefix}/{keg}/bin/node" for keg in ("node", "node@24", "node@26")]
    tried: list[str] = []
    for node in filter(None, candidates):
        if node in tried or not Path(node).exists():
            continue
        tried.append(node)
        if _node_major(node) >= MIN_NODE:
            return node
    sys.exit(
        f"ERROR: the examples need Node {MIN_NODE} or later; tried {', '.join(tried) or 'nothing'}\n"
        "  macOS:     brew install node@24   (or set $NODE to a Node 24+ binary)\n"
    )


def tsc_command() -> list[str]:
    if not TSC.exists():
        sys.exit(
            "ERROR: the TypeScript compiler is not installed in this checkout.\n"
            "  Run `npm ci` once in the repo root (it installs the version pinned in\n"
            "  package-lock.json into node_modules/)."
        )
    return [node_binary(), str(TSC)]


def fixed_env() -> dict[str, str]:
    """One environment for every run, so the key is the program's and not the machine's."""
    env = dict(os.environ)
    for k in list(env):
        if k.startswith("LC_") or k in {"LANG", "LANGUAGE", "TZ", "NODE_OPTIONS", "FORCE_COLOR", "NODE_PATH"}:
            del env[k]
    node_dir = str(Path(node_binary()).parent)
    env.update({
        "LC_ALL": "C",
        "LANG": "C",
        "TZ": "UTC",
        "NO_COLOR": "1",
        "NODE_DISABLE_COLORS": "1",
        "NODE": node_binary(),
        "PATH": os.pathsep.join([node_dir, str(REPO / "node_modules" / ".bin"), env.get("PATH", "")]),
        "PYTHONUTF8": "1",
        "PYTHONIOENCODING": "utf-8",
    })
    return env


def _decode(raw: bytes) -> str:
    return raw.decode("utf-8", errors="backslashreplace")


def _one_off_tsconfig(files: list[Path], tmp: Path) -> Path:
    """A tsconfig that checks exactly `files` with the repo's compiler options.

    tsc refuses a file list on the command line while a tsconfig.json sits in
    the working directory (TypeScript 7.0.2: "error TS5112: tsconfig.json is
    present but will not be loaded if files are specified on commandline"),
    and a list that ignored the config would check with other options anyway. So each run gets a small
    config that extends the real one. typeRoots is absolute because @types is
    otherwise looked up beside the config, and this one lives in a temp dir.
    """
    config = {
        "extends": str(REPO / "tsconfig.json"),
        "compilerOptions": {"typeRoots": [str(REPO / "node_modules" / "@types")]},
        "files": [str(f) for f in files],
        "include": [],
    }
    path = tmp / f"tsconfig.{len(list(tmp.glob('tsconfig.*.json')))}.json"
    path.write_text(json.dumps(config, indent=2), encoding="utf-8")
    return path


def typecheck(files: list[Path], tmp: Path) -> str | None:
    """Type-check every TypeScript example in one tsc run. None means clean."""
    if not files:
        return None
    config = _one_off_tsconfig(files, tmp)
    done = subprocess.run(
        [*tsc_command(), "-p", str(config), "--pretty", "false"],
        cwd=REPO, capture_output=True, env=fixed_env(),
    )
    if done.returncode == 0:
        return None
    return _decode(done.stdout + done.stderr).strip()


def tserror_output(src: Path, tmp: Path) -> tuple[str | None, str]:
    """tsc's diagnostics for a _tserror example: (error, output). It must fail."""
    config = _one_off_tsconfig([src], tmp)
    done = subprocess.run(
        [*tsc_command(), "-p", str(config), "--pretty", "true"],
        cwd=src.parent, capture_output=True, env=fixed_env(),
    )
    text = ANSI.sub("", _decode(done.stdout + done.stderr))
    if done.returncode == 0:
        return f"{src.relative_to(REPO)}: is a _tserror example but type-checks cleanly", text
    return None, text


def run_example(src: Path, tmp: Path) -> tuple[str | None, str]:
    """Run one example from its own folder: (error, stdout)."""
    if is_tserror(src):
        return tserror_output(src, tmp)
    env = fixed_env()
    if src.suffix in {".js", ".mjs", ".cjs"}:
        cmd = [node_binary(), src.name]
    elif src.suffix in TS_EXTS:
        # Node 24 before 24.3.0 labelled type stripping experimental on
        # stderr (its docs: the warning went in 24.3.0, the feature was marked
        # stable in 24.12.0). The flag keeps an older 24.x as quiet as CI's.
        cmd = [node_binary(), "--disable-warning=ExperimentalWarning", src.name]
    elif src.suffix == ".py":
        cmd = [sys.executable, "-I", src.name]
    else:
        cmd = ["bash", src.name]
    try:
        proc = subprocess.run(cmd, cwd=src.parent, capture_output=True, env=env, timeout=120)
    except subprocess.TimeoutExpired:
        return f"{src.relative_to(REPO)}: still running after 120 s", ""
    if proc.returncode != 0:
        return f"{src.relative_to(REPO)}: exited {proc.returncode}\n{_decode(proc.stderr)}", _decode(proc.stdout)
    if proc.stderr.strip():
        print(f"  note: {src.relative_to(REPO)} wrote to stderr:\n{_decode(proc.stderr)}")
    return None, _decode(proc.stdout)


def rendered_block(kind: str, src: Path, output: str, page: Path) -> str:
    """The generated body that goes between the markers on `page`."""
    href = os.path.relpath(src, page.parent)
    if kind == "source":
        body = src.read_text(encoding="utf-8").strip("\n")
        return (
            f"\n*[`{src.name}`]({href}) in full — pasted here by "
            f"`tools/run_examples.py` from the file CI runs.*\n\n"
            f"```{LANGS[src.suffix]}\n{body}\n```\n"
        )
    what = "What `tsc` says about" if is_tserror(src) else "Verified output of"
    return (
        f"\n*{what} [`{src.name}`]({href}) — regenerated by "
        f"`tools/run_examples.py`, never hand-typed.*\n\n"
        f"```text\n{output.strip(chr(10))}\n```\n"
    )


def fill_pages(
    outputs: dict[str, str],
    sources: dict[str, Path],
    write: bool,
    problems: list[str],
    only: set[str] | None = None,
) -> list[str]:
    """Refill every generated block on every Markdown page. Returns drift.

    A block naming a stem that no longer exists is recorded in `problems` and left
    untouched. With `only` set, a block naming any other stem is left as it is.
    """
    drift: list[str] = []
    for page in sorted(walk(REPO)):
        if page.suffix != ".md":
            continue
        text = page.read_text(encoding="utf-8")
        if "<!-- output:" not in text and "<!-- source:" not in text:
            continue
        skip = fenced_spans(text)

        def replace(m: re.Match) -> str:
            if any(lo <= m.start() < hi for lo, hi in skip):
                return m.group(0)
            # A marker quoted in inline code (`<!-- output:x -->`) is prose about
            # the mechanism, not a block to fill.
            if m.start() and text[m.start() - 1] == "`":
                return m.group(0)
            stem, kind = m.group("stem"), m.group("kind")
            if only is not None and stem not in only:
                return m.group(0)
            if stem not in sources:
                problems.append(
                    f"{page.relative_to(REPO)}: asks for {kind} block {stem!r}, "
                    "but no examples/ file has that stem"
                )
                return m.group(0)
            if kind == "output" and stem not in outputs:
                return m.group(0)  # the example failed; its failure is already reported
            return (
                m.group("open")
                + rendered_block(kind, sources[stem], outputs.get(stem, ""), page)
                + m.group("close")
            )

        new = BLOCK.sub(replace, text)
        if new != text:
            drift.append(str(page.relative_to(REPO)))
            if write:
                page.write_text(new, encoding="utf-8")
    return drift


def examples_under(token: Path, examples: dict[str, Path]) -> set[str]:
    """Every example stem inside `token`, if `token` names a directory."""
    for base in (token, REPO / token):
        try:
            if not base.is_dir():
                continue
            resolved = base.resolve()
        except OSError:
            continue
        held = {s for s, p in examples.items() if resolved in p.parents}
        if held:
            return held
    return set()


def resolve_selection(raw: list[str], examples: dict[str, Path]) -> set[str]:
    """Turn `--only` values into stems. A token that names nothing is an error."""
    wanted: set[str] = set()
    unknown: list[str] = []
    for token in (t.strip() for value in raw for t in value.split(",")):
        if not token:
            continue
        as_path = Path(token)
        held = examples_under(as_path, examples)
        if held:
            wanted |= held
            continue
        for candidate in (token, as_path.stem, as_path.name):
            if candidate in examples:
                wanted.add(candidate)
                break
        else:
            unknown.append(token)
    if unknown:
        sys.exit(
            f"ERROR: --only names no such example: {', '.join(unknown)}\n"
            f"Known stems: {', '.join(sorted(examples))}"
        )
    return wanted


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--update", action="store_true", help="record current output as the answer key")
    ap.add_argument("--check", action="store_true", help="write nothing; fail on drift (CI)")
    ap.add_argument(
        "--only",
        action="append",
        metavar="STEM[,STEM…]",
        help="restrict to these example stems (a path or a folder works too); "
        "repeat the flag or comma-separate. Not for CI.",
    )
    args = ap.parse_args()

    examples = find_examples()
    if not examples:
        print("No examples found under any examples/ folder.")
        return 0

    selected = resolve_selection(args.only, examples) if args.only else None
    chosen = {s: p for s, p in sorted(examples.items()) if selected is None or s in selected}

    outputs: dict[str, str] = {}
    failures: list[str] = []

    with tempfile.TemporaryDirectory(prefix="jsts-examples-") as tmp_name:
        tmp = Path(tmp_name)
        print(f"node {subprocess.run([node_binary(), '--version'], capture_output=True, text=True).stdout.strip()}"
              f" ({node_binary()})")

        ts_files = [p for p in chosen.values() if p.suffix in TS_EXTS and not is_tserror(p)]
        if ts_files or any(is_tserror(p) for p in chosen.values()):
            version = subprocess.run([*tsc_command(), "--version"], capture_output=True, text=True)
            print(f"tsc  {version.stdout.strip()}")
        problem = typecheck(ts_files, tmp)
        if problem:
            failures.append(f"tsc found type errors in {len(ts_files)} TypeScript example(s):\n{problem}")
            print(f"  FAIL      tsc over {len(ts_files)} TypeScript example(s)")
        elif ts_files:
            print(f"  ok        tsc over {len(ts_files)} TypeScript example(s)")

        for stem, src in chosen.items():
            key = src.with_suffix(".out")
            error, actual = run_example(src, tmp)
            if error:
                failures.append(error)
                print(f"  FAIL      {src.relative_to(REPO)}")
                continue
            outputs[stem] = actual

            if args.update:
                key.write_text(actual, encoding="utf-8")
                print(f"  recorded  {key.relative_to(REPO)}")
                continue
            if not key.exists():
                failures.append(f"{src.relative_to(REPO)}: no answer key — run with --update --only {stem}")
                continue
            recorded = key.read_text(encoding="utf-8")
            if recorded != actual:
                failures.append(f"{src.relative_to(REPO)}: output differs from {key.name}")
                # The diff goes in the log: on a CI runner it is the only place
                # anyone can see which line moved.
                print(f"  DIFF      {src.relative_to(REPO)} (recorded -> actual)")
                for line in difflib.unified_diff(
                    recorded.splitlines(), actual.splitlines(),
                    fromfile=key.name, tofile="actual", lineterm="", n=1,
                ):
                    print("    " + line)
            else:
                print(f"  ok        {src.relative_to(REPO)}")

    drift = fill_pages(outputs, examples, write=not args.check, problems=failures, only=selected)

    if args.check and drift:
        failures.append(
            "Markdown output blocks are stale: " + ", ".join(drift)
            + " — run tools/run_examples.py"
        )
    elif drift:
        for page in drift:
            print(f"  filled    {page}")

    if failures:
        print("\nFAILED:")
        for f in failures:
            print(f"  - {f}")
        return 1

    if selected is not None:
        print(
            f"\n{len(selected)} of {len(examples)} example(s) verified. --only was in "
            f"effect: the other {len(examples) - len(selected)} were left untouched. "
            "Do a full run before committing."
        )
        return 0

    print(f"\n{len(examples)} example(s) verified against their recorded output.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
