# CLAUDE.md — JavaScript and TypeScript learning library

Standing guidance for Claude working in this repo. Created 2026-09-22, when Adam asked for "java script / types cript library - add topics on the left - add stubs first and later add content".

## What this is

A JavaScript and TypeScript library in the same format as its siblings: one idea per page, every claim on a finished page backed by a program whose output is an answer key checked in CI (Ubuntu x86-64 and macOS arm64). Public repo `masiarek/javascript-typescript-learning-library`, site <https://masiarek.github.io/javascript-typescript-learning-library/>.

**The rules live in [CONTRIBUTING.md](CONTRIBUTING.md)** — especially "Stubs" and "The programs". This file carries only the operational context.

## How it was built

- The whole topic tree (chapters 01–32: 218 stubs, plus three finished reference pages in `32_Resources`) was laid out first, with `navigation.expand` so every topic shows in the sidebar. Stub content (claim, questions, planned examples, see-also, sources) was written by eight parallel agents from one spec, each one-line claim probed in Node 25.2.1 or tsc 7.0.2 (and re-run by the integrator: 211 probes, all reproduced), each source URL curl-checked, each sibling URL taken from the published sibling sites. Twenty H1s were corrected where a probe contradicted them (BigInt has a ceiling in V8; `finally` does not run on `process.exit()`; a default export is not a live binding...). A ninth agent wrote `32_Resources/books` from the owner's shelf, by title and chapter name only. The one checked lesson is `00_Start_Here/how_a_page_is_checked`; the crosswalk was generated from the stubs' sibling links.
- "Add content" later means: graduate stubs chapter by chapter. Keep each stub's folder and H1 subject (inbound links and the keyword index point at them), write the examples its "Examples it will need" list names (rename freely), drop the stub notice, run `tools/check_pages.py --fix`.

## Toolchain (measured 2026-09-22)

- Node: Homebrew `node` 25.2.1 at `/usr/local/opt/node/bin/node`; `node@20` (20.20.2) is first on PATH and is skipped by the runner (too old: no type stripping). CI uses Node 24 from `actions/setup-node`. Node 25.2.1 runs `.ts` files with no warning; it rejects `enum` with `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`.
- TypeScript 7.0.2 (released 2026-07-08, the native compiler: `typescript` depends on one `@typescript/typescript-<os>-<cpu>` binary package per platform), pinned with `@types/node` 24.13.6 in `package-lock.json`. `npm ci` installs it; `node_modules/` is gitignored and excluded from MkDocs (every package README would otherwise become a page).
- tsc 7 refuses a file list while a `tsconfig.json` is in the working directory (TS5112), so the runner writes a one-off tsconfig that `extends` the repo's, with an absolute `typeRoots`.
- A code span holding `|` inside a Markdown table keeps its escaping backslash in Python-Markdown; `tools/check_pages.py` writes such cells as `<code>…&#124;…</code>` (the Regex library's fix, 649c674).
- Docker image `node:24-slim` (Node 24.21.0) is cached locally; the stub agents used it to check that Node 24 prints what 25.2.1 prints. Use it before recording a key that might differ.

## Facts measured while writing the stubs (2026-09-22)

For whoever graduates a stub. Each was probed on Node 25.2.1 and, where it matters, Node 24.21.0.

- **Mac and CI can disagree.** Homebrew's Node is built against the system ICU: `new TextDecoder("windows-1252")` maps byte 0x80 to U+0080 here and to U+20AC in the official builds CI uses — never record a legacy-encoding key locally. ICU spacing differs too (`formatRange` puts U+202F before `PM` on 24.21.0, a plain space on 25.2.1). Always pass an explicit locale.
- **Node 24 versus 25.** `Buffer.poolSize` is 65536 on 24.21.0 and 8192 on 25.2.1; `Uint8Array` `toHex`/`toBase64`/`fromHex`/`fromBase64` exist only in 25; Node 25 adds web-storage globals, so global counts differ. `import.meta.main` needs 24.2+, `require()` of an ES module is stable from 24.15.
- **Not in either Node.** Temporal (Node 24's `--harmony-temporal` exposes an outdated draft), `Math.sumPrecise`, `Iterator.concat`, async iterator helpers. Decorators, both kinds, are a `SyntaxError` in Node; only `tsc`'s compiled output runs.
- **TypeScript 7.0.2.** `strict` is on by default and `alwaysStrict: false` is TS5108; `types` defaults to `[]` (so `@types/node` does nothing unless listed — the repo's tsconfig lists it); removed options (`baseUrl`, `moduleResolution: node10`) are hard errors; there is no compiler API (`require("typescript")` gives only the version) and no `tsserver` (`tsc --lsp --stdio`); unions print their members in sorted order, unlike older docs.
- **Nondeterminism to design around.** `setTimeout(0)` versus `setImmediate` from the main module split 15/15 over 30 runs (fixed only inside an I/O callback); recursion depth changes between Node versions; a `process.exit()` after a big write to a pipe loses a varying amount. Print comparisons and rounded figures, never raw counts or timings.
- **`npx tsc` trap on this Mac.** `~/.npm/_npx` holds the npm package `tsc@2.0.4` (npm: "A deprecated release of the TypeScript compiler"), so `npx tsc` outside a project with its own TypeScript runs that, not 7.0.2; an `npx` example must use a fresh `--cache`.

## Working with Adam

- **Be self-driven**: build, verify, commit, push, then report the page URL — flag only what is genuinely uncertain.
- Several sessions may share a checkout: `git status` before numbering a chapter, gate with `tools/check_all.py --staged`, stage only your own paths.
- **Never `-m` a commit message that contains backticks** — write it to a file and use `-F`.
- Markdown is not hard-wrapped.
- Books are cited bibliographically (title, author, chapter name), never by file name.
