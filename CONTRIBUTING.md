# Conventions

House rules for writing a page here. Readers browsing lessons do not need this file; it is for whoever is about to add one.

## The rule that comes before the others

**A page never claims something a program has not printed — on both machines.** CI runs every example on `ubuntu-latest` and `macos-latest`, and an answer key is only what both agree on. A sentence that no program here backs — what the specification promises, what V8 does internally, what a browser would do — links its source (ECMA-262, MDN, the TypeScript handbook, the Node docs), or the sibling library page that checks it, or ends with *(Not machine-checked here.)*

A **stub** is the one exception, and it says so at the top of the page (see [Stubs](#stubs)).

## What this library is

JavaScript and TypeScript in one library, because TypeScript is JavaScript with types that are checked and then erased. Chapters 01–18 are the language, 19–21 are where it runs (Node, workers, the browser), 22–30 are TypeScript, and 31–32 are tools and resources. The same questions put to other languages live in the sibling libraries — Encodings, Regex, Concurrency, Java text, Math, Python, Rust, Go, C — and a page that has a counterpart there links it.

## The shape of a lesson

```
03_Equality_and_Coercion/
  the_plus_operator/
    README.md                              the lesson
    examples/
      plus_operator_table_js.js            a JavaScript program (an ES module)
      plus_operator_table_js.out           its recorded output (generated — do not hand-edit)
      plus_operator_types_ts.ts            a TypeScript program: checked by tsc, run by Node
      plus_operator_types_ts.out
      plus_operator_refused_tserror.ts     TypeScript that must fail the check
      plus_operator_refused_tserror.out    what tsc said
      plus_operator_throws_sh.sh           a bash driver, for an exit status or stderr
    demo/                                  not run by CI: scripts behind "Real runs" fences
```

One idea per folder. The folder name is the idea, in `lower_snake_case`, and it becomes a permanent URL — so name it for what it teaches, not for where it sits in the reading order. A page names an example by its bare stem, so stems are unique across the whole library: end each stem with its kind (`_js`, `_cjs`, `_ts`, `_tserror`, `_sh`, `_py`) and start it with words from its lesson.

## The page

- `# Subject — what it teaches`. The sidebar shows only the subject, the part before the em dash, so keep it short: `` `typeof` — eight answers, and the `null` that says object `` appears in the sidebar as `typeof`.
- A `**Level:**` line: `101` / `201` / `301`, then ` · `, then who it is for.
- A `**One line:**` that states the claim rather than the topic.
- A `**Keywords:**` line naming, in backticks, the keywords, operators and APIs this page is the home of. [KEYWORDS.md](KEYWORDS.md) is generated from these lines.
- Put the output block early; explain it after, under **Reading the output**. Show the program with a `<!-- source:stem -->` block, folded inside `<details markdown="1">` when it is long.
- **What to do** — the rule a reader takes away.
- **In other languages** — the sibling library's page on the same question. Say in a sentence what differs; do not repeat their page.
- **Sources** — the ECMA-262 section, the MDN page, the TypeScript handbook page, the Node 24 docs. Quote at most a short phrase; paraphrase the rest.
- **See also** — the neighbouring pages here, each with a few words on why.

Do not hard-wrap paragraphs — one paragraph, one line.

## Stubs

A stub is a page with no example behind it yet: the H1, the Level, the One line, the Keywords, the questions the finished page has to answer, the examples it will need, and its links. It exists so that the whole library has a shape and a permanent URL for every topic before the prose does. Every stub carries the same notice directly under its `**Level:**` line, so nobody mistakes an outline for a checked page:

```markdown
> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.
```

A stub must not have an `<!-- output: -->` block: there is no answer key to fill it from. Most stubs' one-line claims were tried in Node or `tsc` when the stubs were written, but those runs are recorded nowhere a reader can check, which is exactly why the notice is there.

**A stub graduates** by gaining an `examples/` folder whose programs answer its questions, an output block for each, and the sections of a finished page — and by losing the notice. `tools/check_pages.py` then marks it `checked` in its chapter's table. Keep the folder, the H1's subject and the inbound links: other pages already point at it.

## Katas

A kata is an exercise, and it lives **on the page for the idea it practises** — under `## Practice`, as a `### Kata: <title>` heading, with the task stated exactly and the solution folded into a `<details markdown="1">` block. **The solution is a real example, never a pasted snippet:** put it beside the lesson's other examples with `_kata` in its stem (`typeof_kata_js.js`). **What it must print is the solution's own output block**, placed in the task — the runner fills every block for a stem, so the target and the solution cannot disagree, and nothing is hand-typed:

```markdown
### Kata: Name every value

Write `describe(value)` so that the program prints exactly this:

<!-- output:typeof_kata_js -->
<!-- /output -->

<details markdown="1">
<summary><strong>Solution</strong></summary>

<!-- source:typeof_kata_js -->
<!-- /source -->

</details>
```

[KATAS.md](KATAS.md) lists every kata in reading order and is generated by `tools/check_pages.py --fix`. A stub has no Practice section, and `check_pages.py` fails one that does — and fails a kata whose section has no `_kata` source block.

## Companion pages

When a chapter is built out, three pages join its lessons, named for the chapter's topic:

- **`<topic>_errors`** — the messages a learner meets, each as a heading in the exact words Node or `tsc` print, with the broken program (a `.sh` driver for a run-time error, a `_tserror.ts` for a type error), **The mistake**, and **The fix** as an example that runs.
- **`<topic>_lints`** — for each ESLint rule (and each `tsc` check) that guards the topic: the bad program, the report, a good program the rule passes in silence, and when the rule is right and when it is noise; then **What no lint catches**, shown by programs that pass every check and still print the wrong thing.
- **`<topic>_resources`** — books by chapter and section name, official documentation and articles with checked URLs, videos with timestamps where they could be verified, and **Read with care**: claims in those sources that fail when run, each shown failing by an example. A folder ending in `_resources` is a reference page, so it needs no program beyond those.

## Output is generated, never typed

Mark the spot and let the tool fill it:

```markdown
<!-- output:page_check_total_js -->
<!-- /output -->
```

`tools/run_examples.py` runs the example and pastes what it actually printed, with a provenance line above the fence. Inside the markers is generated; outside is yours. A second kind, `<!-- source:stem -->`, pastes the program itself.

```bash
npm ci                                             # once: the pinned TypeScript compiler
python3 tools/run_examples.py                      # verify + refill
python3 tools/run_examples.py --update --only X    # record X's output as its answer key (X: a stem or a lesson folder)
python3 tools/run_examples.py --check              # write nothing, fail on drift (CI)
python3 tools/check_pages.py --fix                 # rebuild the chapter tables, the front page counts, KEYWORDS.md
python3 tools/check_all.py --staged                # every gate CI runs, on what you are about to commit
```

**Always pass `--only` with `--update`**, and read what it recorded before committing: `--update` accepts whatever the program printed.

## The programs

**Node 24 or later, nothing from npm.** An example uses the language and Node's built-in modules (`node:fs`, `node:util`, `node:test`...), never a package. The only packages in the repo are two tools, pinned in `package.json`: the TypeScript compiler, and ESLint (core rules only — typescript-eslint needs a TypeScript compiler API, and TypeScript 7 ships none). A lint page runs ESLint from a `.sh` driver; no example imports either. A lesson about a library (a validator, a date library, a bundler) names it, links it, and builds the smallest standard version of what it does.

**The kinds, told apart by stem and extension:**

| File | What the runner does |
|---|---|
| `<stem>_js.js` | runs it with `node`. `package.json` says `"type": "module"`, so `.js` is an ES module here |
| `<stem>_cjs.cjs` | runs it with `node` as CommonJS |
| `<stem>_ts.ts` | type-checks it with `tsc` (every TypeScript example, in one run, before anything else), then runs it with `node`, which erases the types itself |
| `<stem>_tserror.ts` | never runs it. Checks it alone with `tsc`, requires the check to **fail**, and records the diagnostics (`--pretty`, colours stripped) as its answer key |
| `<stem>_sh.sh` | runs it with `bash`: for what a program cannot show about itself — an exit status, an uncaught error's message, a Node flag, stderr |
| `<stem>_py.py` | runs it with `python3 -I`, for a side-by-side with Python |

**TypeScript is checked with the repo's [`tsconfig.json` ↗](https://github.com/masiarek/javascript-typescript-learning-library/blob/master/tsconfig.json):** `strict`, target and lib `esnext` (tsc accepts the whole current draft; running the example on Node 24 is what shows whether Node has a feature), `module: nodenext`, `erasableSyntaxOnly` (only syntax Node can erase: no `enum`, no parameter properties, no `namespace` with values — a page about those uses a `_tserror` example) and `verbatimModuleSyntax`. A lesson about a compiler option shows it with a `.sh` driver that runs `tsc` with that option.

**The fixed environment.** Every example runs from its own folder under `LC_ALL=C`, `TZ=UTC`, no `NODE_OPTIONS`, colours off, with the chosen Node first on `PATH` (and as `$NODE`) and the pinned `tsc` on `PATH`. A lesson about time zones sets `TZ` itself, in a driver, and says so.

**Only stdout is recorded, and an example exits 0.** A program that throws, or ends with a non-zero status, fails the run. To show an uncaught error, write a `.sh` driver that runs the program, prints its exit status, and prints only the lines of stderr that do not vary (the message, not the stack trace with its absolute paths).

**Print what cannot vary.** Never a timestamp, a duration, a pid, a random value, a memory address, or the order in which two timers with the same delay fired. For objects, prefer `JSON.stringify` or explicit strings to `console.log(object)`: `util.inspect`'s layout is Node's to change between releases. Where the interesting part does vary, show it in a fence titled `Real runs —` with the Node version, the machine, the number of runs and the date, produced by a script in `demo/`.

**A driver is `bash`**, compatible with the Mac's `/bin/bash` 3.2, and works in a `mktemp -d` directory, printing each command before running it so that a verified block reads like a terminal.

**Name things for what they are.** Prices, orders, users, readings — not `foo` and `bar`.

## Two machines

CI's *Show toolchain* step prints what each runner has. Add a row when CI finds a difference between them, with the date.

| | Ubuntu runner | macOS runner |
|---|---|---|
| CPU | x86-64 | arm64 |
| `node` | 24, from `actions/setup-node` | 24, from `actions/setup-node` |
| `tsc` | 7.0.2, from `npm ci` (the native compiler, one binary per platform) | 7.0.2, from `npm ci` |
| `eslint` | 10.11.0, from `npm ci` | 10.11.0, from `npm ci` |
| `bash` | 5.x | 3.2 |

The first keys were recorded on an x86-64 Mac with Node 25.2.1 (Homebrew's `node`; the runner skips an older `node` on `PATH` and finds a 24+ itself). Where Node 24 and a newer Node print differently, CI's Node 24 is the reference: record that key with Node 24 (`brew install node@24`, then `NODE=$(brew --prefix node@24)/bin/node`).

## Links

- Link a folder by naming its `README.md` — `[label](some_folder/README.md)`, never `[label](some_folder/)`.
- **A link that leaves the library ends its label with ` ↗`**; an internal link never does. `python3 tools/check_link_style.py --fix` adds and removes them; CI runs it without `--fix`.
- A sibling library's page is linked as `https://masiarek.github.io/<library>/<chapter>/<lesson>/index.html`.
- Books are cited by title, author and chapter name ([Books](32_Resources/books/README.md)) — never by a file name.

## Nav order and the generated indexes

A new lesson folder gets a row in `NAV_ORDER` in `mkdocs_hooks.py`, in reading order. Its sidebar label is the subject of its H1; give it an entry in `LABEL_OVERRIDES` only when that is still too long. A chapter's label is its H1 without the number.

Five things repeat what the pages say, and `tools/check_pages.py --fix` regenerates all of them: each chapter's table of pages (between `<!-- lessons -->` markers), the front page's chapter tables and progress line, [KEYWORDS.md](KEYWORDS.md) and [KATAS.md](KATAS.md). CI fails when any of them is stale, when a lesson folder is missing from `NAV_ORDER`, when a stub has an output block, and when a page is neither a stub nor a checked lesson.
