# Destructuring — unpacking arrays and objects, with defaults that fire only on `undefined`

**Level:** 101 · for anyone unpacking function results and options objects

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A destructuring default fires only for `undefined`: `const { a = 1 } = { a: null }` leaves `a` as `null` and `const [c = 1] = [0]` keeps `0`; and destructuring `null` itself throws a `TypeError`, even when the pattern asks for nothing.

**Keywords:** `destructuring`, `destructuring assignment`

## What the finished page will answer

- Which values trigger a destructuring default (`undefined`, `null`, `0`, a missing index), and is the default evaluated when it is not needed?
- What error does destructuring `null` give with an object pattern, and what does `const [z] = undefined` give?
- Why does `{ a } = obj;` on its own line fail to parse, and what do the parentheses in `({ a } = obj);` fix?
- What does `const [first] = "\u{1F600}x"` put in `first`, compared with `"\u{1F600}x"[0]`?
- How do renaming (`{ a: alias }`), a nested default and `...rest` combine in one pattern?

## Examples it will need

- [ ] `destructuring_defaults_js.js` — defaults tried against undefined, null, 0, an empty string and a missing index, with the value bound each time
- [ ] `destructuring_errors_js.js` — the TypeErrors from destructuring null and undefined with object and array patterns
- [ ] `destructuring_patterns_js.js` — renaming, nesting, rest, and a string destructured by code point

## See also

- [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md) — parameter defaults follow the same `undefined` rule
- [Copying objects](../../06_Objects/copying_objects/README.md) — rest in a pattern makes a shallow copy
- [`null` and `undefined`](../../02_Values_and_Types/null_and_undefined/README.md) — the one value that triggers a default
- [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md) — an array pattern pulls its values from an iterator
- [Automatic semicolon insertion](../../01_Running_JavaScript/semicolons_and_asi/README.md) — the swap that a missing semicolon breaks
- [Rust: Destructuring structs ↗](https://masiarek.github.io/rust-learning-library/30_Pattern_Matching/destructuring_structs/index.html) — struct patterns in Rust name the fields you want
- [Rust: Irrefutable patterns ↗](https://masiarek.github.io/rust-learning-library/30_Pattern_Matching/irrefutable_patterns/index.html) — which patterns a Rust `let` accepts, and why
- [Rust: `let else` ↗](https://masiarek.github.io/rust-learning-library/30_Pattern_Matching/let_else/index.html) — a pattern that may fail, with an `else` to handle it

## Sources to start from

- [MDN — Destructuring ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [ECMA-262 — Destructuring Binding Patterns ↗](https://tc39.es/ecma262/#sec-destructuring-binding-patterns)
- [ECMA-262 — Destructuring Assignment ↗](https://tc39.es/ecma262/#sec-destructuring-assignment)
