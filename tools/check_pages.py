#!/usr/bin/env python3
"""Every page has the shape the library promises, and every index agrees with the pages.

This library was built stubs first: a page per topic with its claim and the
questions the finished page must answer, graduating one by one into a checked
lesson. That makes three things easy to get wrong, and this gate checks them.

1. **The shape of a page.** Every lesson folder's README.md has an `# H1`, a
   `**Level:**` line and a `**One line:**` claim. A stub carries the stub
   notice and no `<!-- output: -->` block (there is no answer key to fill it
   from); a checked lesson carries no notice and at least one output block,
   because that block is what makes it checked. Pages in 00_Start_Here and in
   a *_Resources chapter are reference pages and need no program.

2. **The sidebar.** Every chapter is listed in `NAV_ORDER[""]` and every lesson
   folder in its chapter's `NAV_ORDER` row. An unlisted folder does not break
   the build -- it silently sorts to the bottom of the chapter.

3. **The generated indexes.** Four places repeat what the pages say, and are
   generated from them so they cannot drift:

   - each chapter README's table of its pages, between `<!-- lessons -->` and
     `<!-- /lessons -->`: title, level, one line, and whether it is a stub;
   - the root README's chapter tables, between `<!-- chapters -->` and
     `<!-- /chapters -->`, with each chapter's one line and page counts;
   - the root README's progress line, between `<!-- progress -->` and
     `<!-- /progress -->`;
   - KEYWORDS.md, the keyword index, built from every page's `**Keywords:**`
     line.

    python3 tools/check_pages.py          # report problems and stale indexes, exit 1 if any
    python3 tools/check_pages.py --fix    # rewrite the generated blocks, then report what is left
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO))
import mkdocs_hooks  # noqa: E402

CHAPTER = re.compile(r"^\d\d_[A-Za-z0-9_]+$")
STUB_NOTICE = "> **Stub — an outline, not a lesson.**"
KEYWORD = re.compile(r"`([^`]+)`")

# The root README groups the chapters into parts. A chapter missing from every
# part is reported, so a new chapter cannot fall out of the front page.
PARTS: list[tuple[str, str, range]] = [
    ("JavaScript, the language", "Values, equality, scope, functions, objects, collections, text, numbers, control flow, errors, async, modules, regular expressions, dates, metaprogramming and memory.", range(1, 19)),
    ("Where JavaScript runs", "Node's own APIs, threads and processes, and the browser.", range(19, 22)),
    ("TypeScript", "The type system that is checked by `tsc` and erased before Node runs the code.", range(22, 31)),
    ("Around both", "The tools every project meets, and where to read further.", range(31, 33)),
]


@dataclass
class Page:
    folder: Path
    h1: str = ""
    level: str = ""
    one_line: str = ""
    keywords: list[str] = field(default_factory=list)
    stub: bool = False
    outputs: int = 0

    @property
    def rel(self) -> str:
        return self.folder.relative_to(REPO).as_posix()

    @property
    def subject(self) -> str:
        return self.h1.split(" — ", 1)[0].strip()


def read_page(folder: Path) -> Page:
    page = Page(folder)
    text = (folder / "README.md").read_text(encoding="utf-8")
    for line in text.splitlines():
        if line.startswith("# ") and not page.h1:
            page.h1 = line[2:].strip()
        elif line.startswith("**Level:**") and not page.level:
            page.level = line[len("**Level:**"):].strip().split(" ", 1)[0]
        elif line.startswith("**One line:**") and not page.one_line:
            page.one_line = line[len("**One line:**"):].strip()
        elif line.startswith("**Keywords:**") and not page.keywords:
            page.keywords = KEYWORD.findall(line)
        elif line.startswith(STUB_NOTICE):
            page.stub = True
    page.outputs = text.count("<!-- output:")
    return page


def chapters() -> list[Path]:
    return sorted(p for p in REPO.iterdir() if p.is_dir() and CHAPTER.match(p.name))


def lessons(chapter: Path) -> list[Path]:
    """Lesson folders of `chapter`, in NAV_ORDER order, unlisted ones last."""
    found = [p for p in chapter.iterdir() if p.is_dir() and (p / "README.md").exists()]
    order = mkdocs_hooks.NAV_ORDER.get(chapter.name, [])
    return sorted(found, key=lambda p: (order.index(p.name) if p.name in order else len(order), p.name))


CODE_SPAN = re.compile(r"`([^`]+)`")


def cell(text: str) -> str:
    """Make text safe inside a Markdown table cell.

    A bare `|` splits the cell, so it is escaped as `\\|`. Inside backticks
    that escape does not work: Python-Markdown keeps the backslash, and a
    reader sees `A \\| B` (the Regex library shipped that on thirteen pages
    before commit 649c674 found it). So a code span holding a pipe becomes raw
    <code>...&#124;...</code>, which the table splitter never sees and which
    renders as the pipe.
    """
    out = []
    # split() with one group alternates: text, code, text, code, ..., text.
    for i, part in enumerate(CODE_SPAN.split(text)):
        if i % 2 == 0:
            out.append(part.replace("|", "\\|"))
        elif "|" in part:
            body = part.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            out.append("<code>" + body.replace("|", "&#124;") + "</code>")
        else:
            out.append(f"`{part}`")
    return "".join(out)


def replace_block(text: str, name: str, body: str) -> tuple[str, bool]:
    """Replace what sits between <!-- name --> and <!-- /name -->. (text, found)."""
    pattern = re.compile(rf"(<!-- {name} -->\n)(.*?)(<!-- /{name} -->)", re.DOTALL)
    if not pattern.search(text):
        return text, False
    return pattern.sub(lambda m: m.group(1) + body + m.group(3), text, count=1), True


def lessons_table(chapter: Path, pages: list[Page]) -> str:
    rows = ["| Page | Level | In one line | Status |", "|---|---|---|---|"]
    for p in pages:
        status = "stub" if p.stub else "checked"
        rows.append(
            f"| [{cell(p.subject)}]({p.folder.name}/README.md) | {p.level} | {cell(p.one_line)} | {status} |"
        )
    return "\n".join(rows) + "\n"


def chapter_one_line(chapter: Path) -> str:
    for line in (chapter / "README.md").read_text(encoding="utf-8").splitlines():
        if line.startswith("**One line:**"):
            return line[len("**One line:**"):].strip()
    return ""


def chapter_title(chapter: Path) -> str:
    for line in (chapter / "README.md").read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return mkdocs_hooks.CHAPTER_H1.sub("", line[2:].strip())
    return chapter.name


def chapters_block(all_pages: dict[Path, list[Page]], problems: list[str]) -> str:
    out: list[str] = []
    placed: set[str] = set()
    for title, blurb, numbers in PARTS:
        members = [c for c in all_pages if int(c.name[:2]) in numbers]
        if not members:
            continue
        out.append(f"### {title}\n\n{blurb}\n\n| | Chapter | What it covers | Pages |\n|---|---|---|---|")
        for c in members:
            placed.add(c.name)
            pages = all_pages[c]
            stubs = sum(p.stub for p in pages)
            count = f"{len(pages)}" + (f" ({stubs} stubs)" if stubs == len(pages) else f" ({len(pages) - stubs} checked)")
            out.append(f"| {c.name[:2]} | [{cell(chapter_title(c))}]({c.name}/README.md) | {cell(chapter_one_line(c))} | {count} |")
        out.append("")
    for c in all_pages:
        if c.name not in placed and c.name != "00_Start_Here":
            problems.append(f"{c.name}: in no part of PARTS in tools/check_pages.py, so the front page omits it")
    return "\n".join(out)


def progress_block(all_pages: dict[Path, list[Page]]) -> str:
    pages = [p for ps in all_pages.values() for p in ps]
    stubs = sum(p.stub for p in pages)
    def n(count: int, word: str) -> str:
        return f"{count} {word}" + ("" if count == 1 else "s")

    return (
        f"**{n(len(pages), 'page')} in {n(len(all_pages), 'chapter')}: {len(pages) - stubs} checked, "
        f"{n(stubs, 'stub')}.** "
        "A stub is an outline — the claim, the questions the finished page will answer and the "
        "examples it will need — and says so at the top. It becomes a lesson when its first "
        "example runs in CI.\n"
    )


def keywords_page(all_pages: dict[Path, list[Page]]) -> str:
    index: dict[str, list[Page]] = {}
    for pages in all_pages.values():
        for p in pages:
            for k in p.keywords:
                index.setdefault(k, []).append(p)

    def key(term: str) -> tuple[int, str]:
        stripped = term.lstrip("#@.?!=<>+-*/&|~^%[{(\"'")
        return (0 if stripped[:1].isalpha() else 1, (stripped or term).lower())

    rows = ["| Keyword or API | Where it is explained |", "|---|---|"]
    for term in sorted(index, key=key):
        links = ", ".join(f"[{cell(p.subject)}]({p.rel}/README.md)" for p in index[term])
        rows.append(f"| {cell(f'`{term}`')} | {links} |")
    return (
        "# Keyword index\n\n"
        "**One line:** Every keyword, operator and API a page here is the home of, and that page; "
        "each page names its terms on its `**Keywords:**` line, and this index is generated from "
        "those lines by `tools/check_pages.py --fix`.\n\n"
        f"{len(index)} terms. Terms that start with punctuation (`?.`, `??`, `#private`) sort "
        "after the words.\n\n" + "\n".join(rows) + "\n"
    )


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--fix", action="store_true", help="rewrite the generated blocks in place")
    args = ap.parse_args()

    problems: list[str] = []
    stale: list[str] = []
    all_pages: dict[Path, list[Page]] = {}
    root_order = mkdocs_hooks.NAV_ORDER.get("", [])

    for chapter in chapters():
        if not (chapter / "README.md").exists():
            problems.append(f"{chapter.name}: no README.md")
            continue
        if chapter.name not in root_order:
            problems.append(f"{chapter.name}: not listed in NAV_ORDER[''] in mkdocs_hooks.py")
        order = mkdocs_hooks.NAV_ORDER.get(chapter.name, [])
        reference = chapter.name == "00_Start_Here" or chapter.name.endswith("_Resources")
        pages = [read_page(f) for f in lessons(chapter)]
        all_pages[chapter] = pages
        for p in pages:
            if p.folder.name not in order:
                problems.append(f"{p.rel}: not listed in NAV_ORDER[{chapter.name!r}]")
            for what, value in (("# H1", p.h1), ("**Level:**", p.level), ("**One line:**", p.one_line)):
                if not value:
                    problems.append(f"{p.rel}: no {what} line")
            if p.level and p.level not in {"101", "201", "301"}:
                problems.append(f"{p.rel}: level {p.level!r} is not 101, 201 or 301")
            if p.stub and p.outputs:
                problems.append(f"{p.rel}: a stub with an output block -- a stub has no answer key to fill it from")
            if not p.stub and not p.outputs and not reference:
                problems.append(f"{p.rel}: neither a stub nor a checked lesson -- add the stub notice or an output block")

        readme = chapter / "README.md"
        text = readme.read_text(encoding="utf-8")
        new, found = replace_block(text, "lessons", lessons_table(chapter, pages))
        if not found and pages:
            problems.append(f"{readme.relative_to(REPO)}: no <!-- lessons --> block for the page table")
        if new != text:
            stale.append(str(readme.relative_to(REPO)))
            if args.fix:
                readme.write_text(new, encoding="utf-8")

    readme = REPO / "README.md"
    text = readme.read_text(encoding="utf-8")
    new = text
    for name, body in (("chapters", chapters_block(all_pages, problems)), ("progress", progress_block(all_pages))):
        new, found = replace_block(new, name, body)
        if not found:
            problems.append(f"README.md: no <!-- {name} --> block")
    if new != text:
        stale.append("README.md")
        if args.fix:
            readme.write_text(new, encoding="utf-8")

    kw = REPO / "KEYWORDS.md"
    want = keywords_page(all_pages)
    if not kw.exists() or kw.read_text(encoding="utf-8") != want:
        stale.append("KEYWORDS.md")
        if args.fix:
            kw.write_text(want, encoding="utf-8")

    total = sum(len(p) for p in all_pages.values())
    if stale and args.fix:
        print(f"check_pages: rewrote {len(stale)} generated file(s): {', '.join(stale)}")
        stale = []
    if stale:
        problems.append("generated blocks are stale in " + ", ".join(stale) + " -- run tools/check_pages.py --fix")
    if problems:
        print(f"check_pages: {len(problems)} problem(s) in {total} page(s)\n")
        for p in problems:
            print(f"  - {p}")
        return 1
    stubs = sum(p.stub for ps in all_pages.values() for p in ps)
    print(f"check_pages: {total} page(s) in {len(all_pages)} chapter(s) ({total - stubs} checked, {stubs} stub(s)); indexes current.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
