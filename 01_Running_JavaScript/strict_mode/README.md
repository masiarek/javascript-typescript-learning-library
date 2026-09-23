# Strict mode — the silent mistakes it turns into errors

**Level:** 201 · for anyone who has seen "use strict" at the top of a file

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Without `"use strict"`, assigning to a misspelled variable creates a global and writing to a frozen object does nothing; strict mode, which every module and class body gets automatically, turns the first into a `ReferenceError` and the second into a `TypeError`.

**Keywords:** `use strict`, `strict mode`, `sloppy mode`

## What the finished page will answer

- What happens to `totl = 1` (a misspelled `total`) and to a write to a frozen property in sloppy mode, and in strict mode?
- Which code is strict without any directive, and is a class body inside a sloppy function strict?
- Why does `"use strict"` do nothing when it is not the first statement, and why is it a `SyntaxError` in a function with default parameters?
- What is `this` in a plain function call in each mode, and what breaks in code that relied on it being `globalThis`?
- Can TypeScript 7 compile a file as sloppy code at all, given that `--alwaysStrict false` is rejected with TS5108?

## Examples it will need

- [ ] `strict_mode_silent_failures_cjs.cjs` — a misspelled assignment, a write to a frozen object and an assignment to NaN, each silently doing nothing in sloppy mode
- [ ] `strict_mode_same_mistakes_js.js` — the same three mistakes in a module, each caught with its ReferenceError or TypeError message
- [ ] `strict_mode_in_tsc_tserror.ts` — tsc's diagnostics for a with statement (TS1101) and an assignment to an undeclared name (TS2304)

## See also

- [Scripts and modules](../scripts_and_modules/README.md) — modules are strict without the directive
- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — the writes that fail silently outside strict mode
- [`this`](../../05_Functions/this_is_set_by_the_call/README.md) — `this` is `undefined` in a strict plain call
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — tsc's `strict` flag is a different switch
- [Rust: Strict clippy: denying the panic, and the arithmetic that comes with it ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/strict_lints/index.html) — opt-in strictness in Rust turns runtime aborts into compile errors

## Sources to start from

- [MDN — Strict mode ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [ECMA-262 — Strict Mode Code ↗](https://tc39.es/ecma262/#sec-strict-mode-code)
- [ECMA-262 — The Strict Mode of ECMAScript ↗](https://tc39.es/ecma262/#sec-strict-mode-of-ecmascript)
