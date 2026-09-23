# 10 — Numbers and math

**One line:** Every JavaScript number is a 64-bit binary double, so exactness ends at 2^53 and at the first decimal fraction, and each page in this chapter is a consequence of that or a way around it.

The chapter opens with the representation, one IEEE 754 double for every number, and its consequences: why `0.1 + 0.2` misses, where integers stop being exact, and the special values `NaN`, `Infinity` and `-0`. Then the conversions: parsing text into numbers, and rounding numbers back into text. Bitwise operators come next, because they quietly switch to 32-bit integers. Random numbers and money close the chapter, as two jobs where the wrong kind of number is a bug.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Every number is a double](every_number_is_a_double/README.md) | 101 | Every number, `1` included, is a 64-bit IEEE 754 double, and `0.1` cannot be stored exactly: it is 0.1000000000000000055511…, while `0.3` is 0.2999999999999999888977…, so `0.1 + 0.2` prints `0.30000000000000004` and `0.1 + 0.2 === 0.3` is `false`. | stub |
| [Safe integers](safe_integers/README.md) | 201 | Above 2^53 a double skips integers (between 2^53 and 2^54 it holds only even ones), so `2 ** 53 + 1 === 2 ** 53` is `true`, the literal `9007199254740993` prints `9007199254740992`, and `JSON.parse` rounds a 20-digit id without a word; `BigInt` keeps every digit. | stub |
| [`NaN`, `Infinity` and `-0`](nan_infinity_and_negative_zero/README.md) | 201 | `NaN` is the one value not equal to itself, so `[NaN].indexOf(NaN)` is `-1` while `includes` finds it; `isNaN("abc")` is `true` because it converts first, `Number.isNaN("abc")` is `false`; and `-0 === 0` and `String(-0)` is `"0"`, yet `1 / -0` is `-Infinity`. | stub |
| [Parsing numbers](parsing_numbers/README.md) | 201 | `parseInt` reads leading digits and stops, `Number()` and unary `+` want the whole string: `parseInt("12px")` is `12` but `Number("12px")` is `NaN`, `Number("")` is `0` but `parseInt("")` is `NaN`, and `parseInt(0.0000005)` is `5`, because the number first becomes `"5e-7"`. | stub |
| [Rounding and formatting](rounding_and_formatting/README.md) | 201 | `(1.005).toFixed(2)` is `"1.00"` because the stored double is 1.00499999…, yet `Intl.NumberFormat` with two fraction digits prints `1.01`; and `Math.round(-2.5)` is `-2`, since it rounds halves toward +∞, where `Intl.NumberFormat` rounds them away from zero to `-3`. | stub |
| [Bitwise operators](bitwise_operators/README.md) | 301 | Bitwise operators first cut number operands to 32-bit two's-complement integers: <code>2 ** 32 &#124; 0</code> is `0`, <code>3000000000 &#124; 0</code> is `-1294967296`, `1 << 32` is `1` because shift counts wrap at 32, and `-1 >>> 0` is `4294967295`; `BigInt` operands keep every bit. | stub |
| [Random numbers](random_numbers/README.md) | 201 | `Math.random` is a pseudo-random generator seeded once per process: `node --random-seed=42` prints the same number on every run, while `crypto.randomUUID()` still differs, because the `crypto` functions use a secure generator the seed does not touch, the only kind for tokens and passwords. | stub |
| [Money](money_and_decimals/README.md) | 201 | `1.15 * 100` is `114.99999999999999`, so `Math.trunc` turns $1.15 into 114 cents; keep integer cents (exact up to about $90 trillion) or `BigInt`, convert with `Math.round`, and place leftover cents yourself: `10000n / 3n` is `3333n`, remainder `1n`. | stub |
<!-- /lessons -->

## Boundaries

`BigInt` as a type is introduced in Values and types, and `Number()`, `String()` and unary `+` applied to every kind of value are in Equality and coercion.
