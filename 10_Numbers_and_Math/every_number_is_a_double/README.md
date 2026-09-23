# Every number is a double — why `0.1 + 0.2` is not `0.3`

**Level:** 101 · for anyone who has added two decimals and got a surprise

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Every number, `1` included, is a 64-bit IEEE 754 double, and `0.1` cannot be stored exactly: it is 0.1000000000000000055511…, while `0.3` is 0.2999999999999999888977…, so `0.1 + 0.2` prints `0.30000000000000004` and `0.1 + 0.2 === 0.3` is `false`.

**Keywords:** `IEEE 754`, `double`, `floating point`, `Number.EPSILON`

## What the finished page will answer

- What value does a double really store for `0.1`, `0.2` and `0.3`, and why does their sum print `0.30000000000000004`?
- Are `1` and `1.0` different values or different types?
- Why is `(0.1 + 0.2) + 0.3` different from `0.1 + (0.2 + 0.3)`, and what does adding `0.1` ten times give?
- What is `Number.EPSILON`, and why does `Math.abs(a - b) < Number.EPSILON` work near 0.3 but fail for `1000.1 + 1000.2` against `2000.3`?
- Does Python print the same `0.30000000000000004`?

## Examples it will need

- [ ] `every_number_is_a_double_digits_js.js` — `0.1`, `0.2`, `0.3` and `0.1 + 0.2` with `toFixed(25)` and as their 64 bits in hex, read through a `Float64Array`
- [ ] `every_number_is_a_double_epsilon_js.js` — an `Number.EPSILON` comparison that passes near 0.3 and fails near 2000, beside a relative tolerance that passes both
- [ ] `every_number_is_a_double_sum_py.py` — the same sums in Python, which prints the same digits because both languages use IEEE 754 doubles

## See also

- [Safe integers](../safe_integers/README.md) — the integers a double can still hold exactly
- [Rounding and formatting](../rounding_and_formatting/README.md) — printing a double without its noise
- [Money](../money_and_decimals/README.md) — why prices should not be doubles
- [Eight types](../../02_Values_and_Types/eight_types/README.md) — `number` is one type, whole or not
- [BigInt](../../02_Values_and_Types/bigint/README.md) — the one numeric type that is not a double
- [Rust: What a float actually stores ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/what_a_float_stores/index.html) — the same `0.1`, printed to thirty digits in Rust
- [Math: Machine numbers ↗](https://masiarek.github.io/math-learning-library/01_Precision/machine_numbers/index.html) — the finite set of numbers a float can be, and its rounding

## Sources to start from

- [MDN — Number: number encoding ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)
- [ECMA-262 — The Number Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type)
- [MDN — Number.EPSILON ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)
