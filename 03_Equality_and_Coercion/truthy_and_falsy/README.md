# Truthy and falsy — the short list of values `if` treats as false

**Level:** 101 · for anyone who writes if (value)

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Eight values are falsy in Node — `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` — and a browser adds `document.all`; so `"0"`, `"false"`, `" "`, `[]`, `{}` and even `new Boolean(false)` all make an `if` run.

**Keywords:** `truthy`, `falsy`, `!!`, `ToBoolean`

## What the finished page will answer

- Which eight values does `Boolean()` turn into `false`, and what does it do with `"0"`, `" "`, `[]`, `{}` and `new Boolean(false)`?
- Why is `[] == false` true when `[]` is truthy?
- What does `value || fallback` give for `0` and `""`, and how does `??` change that?
- Why does `if (count)` skip a legitimate `0`, and how do you write the check you meant?

## Examples it will need

- [ ] `truthy_and_falsy_the_list_js.js` — the eight falsy values and eight surprising truthy ones, each with what Boolean() says
- [ ] `truthy_and_falsy_or_versus_nullish_js.js` — || and ?? applied to 0, an empty string, null and undefined, side by side

## See also

- [Truthiness narrowing](../../24_Narrowing/truthiness_narrowing/README.md) — what tsc drops from a type after `if (value)`
- [Short-circuit evaluation](../../11_Control_Flow_and_Iteration/short_circuit_evaluation/README.md) — `&&` and `||` return an operand, not a boolean
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — `??` falls back only on `null` and `undefined`
- [`===` and `==`](../strict_and_loose_equality/README.md) — `[] == false` is true anyway
- [Rust: Meet the `bool` ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/meet_the_bool/index.html) — in Rust there is no truthiness at all

## Sources to start from

- [MDN — Falsy ↗](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN — Truthy ↗](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [ECMA-262 — ToBoolean ↗](https://tc39.es/ecma262/#sec-toboolean)
