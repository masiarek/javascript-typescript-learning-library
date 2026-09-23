# Hoisting and the temporal dead zone — known before the line that declares it

**Level:** 201 · for anyone who has used a variable before the line that declares it

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Every declaration is known from the top of its scope: a `var` reads as `undefined` before its line, a function declaration can already be called, and a `let` or `const` throws a `ReferenceError` until its line has run — a matter of time, not position.

**Keywords:** `hoisting`, `temporal dead zone`, `TDZ`

## What the finished page will answer

- What do reading a `var`, calling a function declaration and reading a `let` give when each comes before its declaring line?
- Why can a function defined above a `let` read it, as long as the function is called after the `let` line has run?
- Why does `let x = 1; { console.log(x); let x = 2; }` throw instead of printing `1`?
- Which of `typeof`, a default parameter (`function f(a = b, b = 1)`) and `new` on a class declared later throws in the dead zone?
- Is a function expression assigned to a `var` hoisted the way a function declaration is?

## Examples it will need

- [ ] `hoisting_before_the_line_js.js` — a var, a function declaration and a let each used before their lines, with the value or the ReferenceError
- [ ] `hoisting_tdz_is_time_js.js` — a closure over a let that throws when called early and works when called late, and the shadowing case inside a block

## See also

- [`var`, `let` and `const`](../var_let_and_const/README.md) — the declarations whose hoisting differs
- [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md) — the one place `typeof` throws
- [Declarations, expressions and arrows](../../05_Functions/three_ways_to_write_a_function/README.md) — only declarations are hoisted whole
- [Module cycles](../../14_Modules/module_cycles/README.md) — an import read while it is still in its dead zone
- [Rust: Uninitialized reads ↗](https://masiarek.github.io/rust-learning-library/31_C_and_Cpp/uninitialized_reads/index.html) — where JavaScript throws, C reads garbage and Rust refuses to compile

## Sources to start from

- [MDN — Hoisting ↗](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN — let: temporal dead zone ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)
- [ECMA-262 — Let, Const, Using, and Await Using Declarations ↗](https://tc39.es/ecma262/#sec-let-and-const-declarations)
