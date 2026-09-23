# Declarations, expressions and arrows — three ways to write a function

**Level:** 101 · for anyone who has written a line of JavaScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Only a function declaration is hoisted with its body, so `declared()` works on the line above `function declared() {}`; the same early call throws a `TypeError` for a `var` function expression and a `ReferenceError` for an arrow in a `const`.

**Keywords:** `function`, `function expression`

## What the finished page will answer

- What does calling each of the three forms print on the line before it is defined, and why does the `var` version fail with a `TypeError` rather than a `ReferenceError`?
- What `name` does each form end up with, and where is the name of a named function expression such as `function fact(n) {}` visible?
- Which of the forms (declaration, expression, arrow, method) have their own `this`, `arguments` and `prototype`, and which can be called with `new`?
- Is a function declared inside an `if` block callable after the block in an ES module, and in a sloppy `.cjs` file?
- Why does `(x) => { a: x }` return `undefined` while `(x) => ({ a: x })` returns an object?

## Examples it will need

- [ ] `three_ways_called_early_js.js` — each form called on the line before its definition and again after it, with the error name and message for each early call that fails
- [ ] `three_ways_compared_js.js` — a table with one row per form (declaration, expression, arrow, method) and columns for name, own prototype, own this, arguments and whether new works
- [ ] `three_ways_block_function_sh.sh` — a function declared inside an if block and called after it, run as an .mjs module (ReferenceError) and as a .cjs script (the call works)

## See also

- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — why the declaration works early and the const arrow does not
- [Arrow functions](../arrow_functions_and_this/README.md) — what else the arrow form leaves out
- [Functions are objects](../functions_are_objects/README.md) — the name and length each form ends up with
- [Function types](../../23_Everyday_Types/function_types_and_overloads/README.md) — the same forms with types written on them
- [Rust: Functions ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/functions/index.html) — how Rust writes a function: every type spelled out, the last expression returned

## Sources to start from

- [MDN — function ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN — function expression ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [ECMA-262 — Function Definitions ↗](https://tc39.es/ecma262/#sec-function-definitions)
