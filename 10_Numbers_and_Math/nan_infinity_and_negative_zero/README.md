# `NaN`, `Infinity` and `-0` — the special values

**Level:** 201 · once doubles are familiar

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `NaN` is the one value not equal to itself, so `[NaN].indexOf(NaN)` is `-1` while `includes` finds it; `isNaN("abc")` is `true` because it converts first, `Number.isNaN("abc")` is `false`; and `-0 === 0` and `String(-0)` is `"0"`, yet `1 / -0` is `-Infinity`.

**Keywords:** `NaN`, `Infinity`, `-0`, `isNaN`, `Number.isNaN`, `Number.isFinite`

## What the finished page will answer

- Why is `NaN !== NaN`, and which tests find a `NaN`: `===`, `isNaN`, `Number.isNaN`, `Object.is`, `includes`, `indexOf`?
- Why is `isNaN("abc")` `true` while `Number.isNaN("abc")` is `false`, and how do `isFinite` and `Number.isFinite` differ the same way?
- Which operations produce `Infinity`, `-Infinity` and `NaN`: `1 / 0`, `0 / 0`, `Infinity - Infinity`, `Math.sqrt(-1)`, `2 ** 1024`?
- Where does `-0` come from (`Math.round(-0.4)`, `0 * -1`, `-1e-400`), and which of `===`, `String`, `JSON.stringify`, `Object.is` and `1 / x` can tell it from `0`?
- What does `JSON.stringify` write for `NaN`, `Infinity` and `-0`?

## Examples it will need

- [ ] `nan_infinity_and_negative_zero_nan_js.js` — how `===`, `Object.is`, `isNaN`, `Number.isNaN`, `indexOf`, `includes`, `Set` and `Map` treat `NaN`, one row each
- [ ] `nan_infinity_and_negative_zero_signed_zero_js.js` — operations that produce `-0`, then each way of printing or testing it (`console.log`, `String`, `JSON.stringify`, `===`, `Object.is`, `1 / x`)

## See also

- [`Object.is`, `NaN` and `-0`](../../03_Equality_and_Coercion/samevalue_and_samevaluezero/README.md) — `Object.is`, the equality that sees `NaN` and `-0`
- [Parsing numbers](../parsing_numbers/README.md) — where most `NaN` values come from
- [JSON](../../06_Objects/json/README.md) — `JSON.stringify` writes `NaN` and `Infinity` as `null`
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — why a `Map` does find a `NaN` key
- [Python: Float equality and NaN ↗](https://masiarek.github.io/python-learning-library/03_Numbers/float_equality_and_nan/index.html) — the same IEEE 754 `NaN`, compared in Python
- [C: A float exception is a flag ↗](https://masiarek.github.io/c-learning-library/06_Numbers/a_float_exception_is_a_flag/index.html) — the status flag C can read when an operation makes a `NaN`

## Sources to start from

- [MDN — NaN ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [MDN — Number.isNaN() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [ECMA-262 — isNaN ( number ) ↗](https://tc39.es/ecma262/#sec-isnan-number)
