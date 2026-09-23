# `null` and `undefined` — two kinds of nothing

**Level:** 101 · for anyone who has checked a value against both null and undefined

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `undefined` fills anything never assigned — a missing property, argument or return value — while `null` is a value some code chose to return; they are `==` but not `===`, and `null + 1` is `1` but `undefined + 1` is `NaN`.

**Keywords:** `null`, `undefined`, `void`

## What the finished page will answer

- Which everyday operations produce `undefined` (a missing property, a missing argument, a bare `return`, `void 0`), and which built-ins return `null` (`match` with no match, `Object.getPrototypeOf(Object.prototype)`)?
- Why is `null + 1` equal to `1` while `undefined + 1` is `NaN`, and what do `Number(null)` and `Number(undefined)` return?
- Which checks treat the two alike (`== null`, `??`, `?.`) and which do not (a default parameter, `JSON.stringify`, `typeof`)?
- Why can a function declare `let undefined = 1` while `null = 1` is a `SyntaxError`?

## Examples it will need

- [ ] `null_and_undefined_sources_js.js` — six ways to get undefined and three built-ins that return null, each labelled
- [ ] `null_and_undefined_treated_alike_js.js` — == null, ??, ?., a default parameter, JSON.stringify and typeof, each applied to null and to undefined

## See also

- [`typeof`](../the_typeof_operator/README.md) — the typeof answer that calls null an object
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — `?.` and `??` stop at both
- [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md) — a default fires for `undefined`, never for `null`
- [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md) — how TypeScript keeps the two apart
- [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md) — why `x == null` is the one common use of `==`
- [Rust: Partial functions: why `Option` exists ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/partial_functions/index.html) — how Rust's `Option` makes no answer one of the answers
- [Rust: Null dereference ↗](https://masiarek.github.io/rust-learning-library/31_C_and_Cpp/null_dereference/index.html) — what null costs in C, and what Rust uses instead
- [Rust: Six kinds of zero ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/six_kinds_of_zero/index.html) — when two kinds of missing are not enough

## Sources to start from

- [MDN — null ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)
- [MDN — undefined ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [ECMA-262 — The Undefined Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-undefined-type)
