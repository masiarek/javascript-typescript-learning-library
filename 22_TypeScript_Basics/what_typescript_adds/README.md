# What TypeScript adds — types that are checked, then erased

**Level:** 101 · for JavaScript programmers meeting TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** TypeScript is JavaScript plus a checker that runs before the program does: `tsc` rejects `user.fristName` and suggests `firstName`, while Node, which only deletes type syntax and runs the rest, prints `undefined`.

**Keywords:** `static type checking`, `type error`

## What the finished page will answer

- What does `tsc` report for `user.fristName` on an object that has `firstName`, and what does Node print for the same file?
- Which mistakes does the checker catch before a run that JavaScript reports late or never: a misspelt property, a string passed as a number, a method called on a value that may be `undefined`?
- Does the checker need annotations to find those mistakes, or does it work from the types it infers?
- How does a plain `.js` file get the same checks, with `// @ts-check` and a JSDoc `@param {number}`?
- Which TypeScript features add run-time code instead of only types, and why does this library keep away from them?

## Examples it will need

- [ ] `typescript_adds_a_check_sh.sh` — tsc's TS2551 for `user.fristName` with its 'Did you mean' suggestion and exit status 1, then Node's `undefined` and exit status 0 for the same file
- [ ] `typescript_adds_checks_to_js_sh.sh` — the same misspelling and a wrongly typed argument caught in a plain .js file by `tsc --allowJs` under `// @ts-check` and a JSDoc `@param`

## See also

- [Types are erased](../types_are_erased/README.md) — what is left of the program once the types are deleted
- [Running TypeScript](../running_typescript/README.md) — the two commands, one that checks and one that runs
- [The language and the host](../../01_Running_JavaScript/the_language_and_the_host/README.md) — what JavaScript itself defines before TypeScript adds anything
- [`any` is contagious](../../30_Where_Types_Lie/any_is_contagious/README.md) — where the checker stops checking without saying so
- [Rust: What a compiler does before your program runs ↗](https://masiarek.github.io/rust-learning-library/20_Compilers/what_a_compiler_does/index.html) — rustc also rejects code before it runs, and its types reach the machine code

## Sources to start from

- [TypeScript Handbook — TypeScript for the New Programmer ↗](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html#typescript-a-static-type-checker)
- [TypeScript Handbook — The Basics: static type checking ↗](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
