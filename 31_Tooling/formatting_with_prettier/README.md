# Prettier — formatting nobody argues about

**Level:** 101 · for anyone who has argued about semicolons

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Prettier throws your layout away and reprints the code from its syntax tree, with two exceptions it keeps on purpose: blank lines, several collapsing into one, and an object with a line break after `{`, which it never joins back onto one line.

**Keywords:** `Prettier`, `.prettierrc`, `prettier-ignore`, `printWidth`, `objectWrap`

## What the finished page will answer

- What does Prettier do to quotes, semicolons, trailing commas and a 120-character call, with no configuration at all?
- Which short object stays on several lines and which joins onto one, depending only on the newline after `{`?
- Which quotes does Prettier choose for a string that contains an apostrophe, and why is that not always the `singleQuote` setting?
- What does `prettier --check` exit with for a formatted and an unformatted file, and what does `// prettier-ignore` keep?
- What does `semi: false` put at the start of a line that begins with `(` or `[`, and why?

## Examples it will need

- [ ] `formatting_prettier_reprints_sh.sh` — a messy file before and after prettier: quotes, semicolons, trailing commas, a kept multi-line object and collapsed blank lines
- [ ] `formatting_prettier_check_exit_sh.sh` — prettier --check's exit status on a formatted and an unformatted file

## See also

- [Automatic semicolon insertion](../../01_Running_JavaScript/semicolons_and_asi/README.md) — the ASI hazards behind `semi: false`'s leading semicolons
- [ESLint](../linting_with_eslint/README.md) — rules about bugs, not layout
- [Editor setup](../editor_setup/README.md) — format on save in Zed and VS Code
- [Rust: Formatting: `rustfmt`, and the formatter your IDE swaps in behind it ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/formatting/index.html) — rustfmt, and the formatter an IDE swaps in

## Sources to start from

- [Prettier — Rationale ↗](https://prettier.io/docs/rationale)
- [Prettier — Options ↗](https://prettier.io/docs/options)
- [Prettier — Option philosophy ↗](https://prettier.io/docs/option-philosophy)
