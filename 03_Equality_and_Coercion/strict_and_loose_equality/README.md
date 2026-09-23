# `===` and `==` — one compares, the other converts first

**Level:** 101 · for anyone who has been told to always use === and wants to know why

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `==` converts its operands before comparing, which makes `"" == 0` and `"0" == 0` both true while `"" == "0"` is false, so `==` is not even transitive; `===` never converts, and only `NaN` breaks its rule that a value equals itself.

**Keywords:** `===`, `==`, `!==`, `!=`

## What the finished page will answer

- What do `"" == 0`, `"0" == 0`, `"" == "0"`, `[] == false` and `null == 0` return, and which conversion does each one perform?
- Why is `[] == ![]` true, and what happens to the array on the way?
- Which values is `null` loosely equal to, and why is `x == null` the one use of `==` that many style guides allow?
- When is `===` false for a value compared with itself, and when is it true for two values that print differently?
- How does `==` compare a BigInt with a string or a boolean (`"1" == 1n`, `1n == true`)?

## Examples it will need

- [ ] `strict_and_loose_equality_table_js.js` — a grid of ten values compared pairwise with == and ===, marking the pairs where the two disagree
- [ ] `strict_and_loose_equality_steps_js.js` — the conversion steps == takes for [] == false and [] == ![], one line per step

## See also

- [`Object.is`, `NaN` and `-0`](../samevalue_and_samevaluezero/README.md) — the other two equality algorithms
- [ToPrimitive](../toprimitive/README.md) — how `==` turns an object into a primitive
- [Truthy and falsy](../truthy_and_falsy/README.md) — `[] == false` although `[]` is truthy
- [`if`, `switch` and `? :`](../../11_Control_Flow_and_Iteration/if_switch_and_the_conditional_operator/README.md) — `switch` compares with `===`
- [C: Comparing signed and unsigned ↗](https://masiarek.github.io/c-learning-library/06_Numbers/comparing_signed_and_unsigned/index.html) — the same convert-then-compare trap in C, signed against unsigned
- [Python: Comparing an `int` with a `float` ↗](https://masiarek.github.io/python-learning-library/03_Numbers/comparing_int_and_float/index.html) — in Python, an int and a float compare without either converting
- [Rust: Comparing two numbers of different types ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/comparing_two_number_types/index.html) — in Rust, two number types cannot be compared until you convert one

## Sources to start from

- [MDN — Equality comparisons and sameness ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
- [MDN — Equality (==) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [ECMA-262 — IsLooselyEqual ↗](https://tc39.es/ecma262/#sec-islooselyequal)
