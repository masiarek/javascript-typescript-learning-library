# Automatic semicolon insertion — where a missing semicolon changes the meaning

**Level:** 201 · for anyone who leaves semicolons out, or works with someone who does

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A line break ends a statement only when the next line cannot continue it, but always ends a `return`: `return` followed by a newline returns `undefined`, a line starting with `(` calls the value above it, and one starting with `[` indexes into it.

**Keywords:** `automatic semicolon insertion`, `ASI`

## What the finished page will answer

- What does a function return when `return` is alone on its line and the value is on the next one?
- What happens when a line without a semicolon is followed by one that starts with `(`, `[` or a backtick?
- Why does the swap `[a, b] = [b, a]` throw a `ReferenceError` right after `let a = 1, b = 2` written without a semicolon?
- Where does a semicolon go in `i`, `++`, `j` written on three lines, and what are `i` and `j` afterwards?

## Examples it will need

- [ ] `semicolons_and_asi_three_traps_js.js` — a return with its value on the next line, a line starting with ( and one starting with [, each with what it actually evaluated to
- [ ] `semicolons_and_asi_swap_sh.sh` — the destructuring swap after a line with no semicolon, with the ReferenceError and the exit status

## See also

- [Destructuring](../../04_Variables_and_Scope/destructuring/README.md) — the swap that a missing semicolon turns into a TDZ error
- [Template literals](../../09_Strings_and_Unicode/template_literals/README.md) — a line starting with a backtick becomes a tagged template
- [Prettier](../../31_Tooling/formatting_with_prettier/README.md) — the semicolon setting in Prettier, and what it guards against
- [ESLint](../../31_Tooling/linting_with_eslint/README.md) — a lint rule for the unexpected multiline
- [Rust: A block is an expression ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/a_block_is_an_expression/index.html) — in Rust, one semicolon changes what a block returns

## Sources to start from

- [ECMA-262 — Automatic Semicolon Insertion ↗](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)
- [ECMA-262 — Interesting Cases of Automatic Semicolon Insertion ↗](https://tc39.es/ecma262/#sec-interesting-cases-of-automatic-semicolon-insertion)
- [MDN — Lexical grammar: automatic semicolon insertion ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
