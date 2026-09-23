# The global object — `globalThis`, and which declarations land on it

**Level:** 201 · for anyone who has wondered where window and global went

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In a classic script, a top-level `var` or function declaration becomes a property of `globalThis` but `let`, `const` and `class` do not; in a module none of them do, so `var x` at the top of an `.mjs` file never reaches `globalThis.x`.

**Keywords:** `globalThis`, `global`, `window`

## What the finished page will answer

- Which of `var`, `let`, `const`, `function` and `class` at the top of a script create a property on `globalThis`, and where do the others live?
- What does `globalThis.x` give for a `var x` at the top of an `.mjs` file, and at the top of a `.cjs` file?
- Is `globalThis === global` in Node, and what are `window` and `self` there?
- Why can `delete` remove an accidental global (`b = 2`) but not one made by `var`?

## Examples it will need

- [ ] `the_global_object_declarations_js.js` — five top-level declarations run as a script in node:vm, with which of them appear on the global object
- [ ] `the_global_object_in_each_file_kind_sh.sh` — a top-level var looked up on globalThis from node -e, a .cjs file and an .mjs file

## See also

- [Scripts and modules](../../01_Running_JavaScript/scripts_and_modules/README.md) — why a module keeps its `var` to itself
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — the accidental global that strict mode stops
- [`var`, `let` and `const`](../var_let_and_const/README.md) — the declarations, one by one
- [The language and the host](../../01_Running_JavaScript/the_language_and_the_host/README.md) — which globals the language defines and which Node adds

## Sources to start from

- [MDN — globalThis ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
- [ECMA-262 — Global Environment Records ↗](https://tc39.es/ecma262/#sec-global-environment-records)
