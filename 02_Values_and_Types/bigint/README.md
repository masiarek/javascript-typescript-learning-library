# BigInt — integers with no fixed width, and no mixing with numbers

**Level:** 201 · for anyone whose integers outgrew 2^53

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `2n ** 64n` is exact and `7n / 2n` is `3n`, but `1n + 1` throws a `TypeError`: arithmetic never mixes BigInt with Number, although comparison does, so `1n == 1` is `true` and `2n > 1` works.

**Keywords:** `BigInt`, `BigInt.asIntN`, `BigInt.asUintN`

## What the finished page will answer

- What do `2n ** 64n`, `7n / 2n` and `-7n / 2n` return, and which way does BigInt division round?
- Which operations throw when a BigInt meets a Number (`+`, `Math.max`, unary `+`) and which work (`==`, `<`, `Number(1n)`)?
- Is `2n ** 53n + 1n == 2 ** 53 + 1` true, and what does that say about how mixed comparisons work?
- What do `JSON.stringify(1n)`, `BigInt(1.5)` and `BigInt("0x1f")` do?
- How does `BigInt.asIntN(8, 255n)` give fixed-width wrap-around, and where is V8's ceiling on BigInt size?

## Examples it will need

- [ ] `bigint_arithmetic_js.js` — exact powers of two past 2^53, truncating division, and the TypeError from mixing with a number
- [ ] `bigint_conversions_js.js` — BigInt() and Number() on edge values, JSON.stringify of a BigInt, asIntN wrapping, and the RangeError at V8's size limit

## See also

- [Safe integers](../../10_Numbers_and_Math/safe_integers/README.md) — where Number stops being exact
- [Money](../../10_Numbers_and_Math/money_and_decimals/README.md) — integer cents as BigInt
- [Converting on purpose](../../03_Equality_and_Coercion/explicit_conversion/README.md) — `Number(1n)` works where `+1n` throws
- [JSON](../../06_Objects/json/README.md) — `JSON.stringify` refuses a BigInt
- [Rust: Big integers: `BigInt` and Python's `int` ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/other_number_types/big_integers/index.html) — big integers in Rust and Python, side by side
- [Python: Comparing an `int` with a `float` ↗](https://masiarek.github.io/python-learning-library/03_Numbers/comparing_int_and_float/index.html) — in Python too, mixed numbers compare by exact value

## Sources to start from

- [MDN — BigInt ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [ECMA-262 — The BigInt Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-bigint-type)
- [V8 — BigInt: arbitrary-precision integers in JavaScript ↗](https://v8.dev/features/bigint)
