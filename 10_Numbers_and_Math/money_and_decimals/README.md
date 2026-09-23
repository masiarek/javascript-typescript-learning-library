# Money — integer cents, BigInt, or a decimal library

**Level:** 201 · for anyone who adds up prices

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `1.15 * 100` is `114.99999999999999`, so `Math.trunc` turns $1.15 into 114 cents; keep integer cents (exact up to about $90 trillion) or `BigInt`, convert with `Math.round`, and place leftover cents yourself: `10000n / 3n` is `3333n`, remainder `1n`.

**Keywords:** `money`, `cents`, `currency`, `decimal`

## What the finished page will answer

- Why is `1.15 * 100` equal to `114.99999999999999`, and what do `Math.trunc` and `Math.round` make of it?
- Do ten additions of `0.1` dollars reach `1`, and do ten additions of `10` cents reach `100`?
- Up to what amount are integer cents exact in a number, and when do you need `BigInt` cents?
- How do you split $100.00 three ways so that the shares add back up to $100.00?
- How does `Intl.NumberFormat` with `style: "currency"` format dollars, yen and a `BigInt`, and what does it do with the string `"12345678901234567.891"`?

## Examples it will need

- [ ] `money_and_decimals_cents_js.js` — prices converted to cents with `Math.trunc` and with `Math.round`, then one cart totalled in dollars and in cents
- [ ] `money_and_decimals_split_js.js` — $100.00 split three ways in `BigInt` cents with the leftover cent placed, each share formatted by `Intl.NumberFormat` with `currency: "USD"`
- [ ] `money_and_decimals_branded_tserror.ts` — tsc's TS2345 diagnostic when a plain dollar `number` is passed where a branded `Cents` type is expected

## See also

- [Every number is a double](../every_number_is_a_double/README.md) — why `1.15 * 100` is not `115`
- [Safe integers](../safe_integers/README.md) — how many cents a double holds exactly
- [BigInt](../../02_Values_and_Types/bigint/README.md) — exact integer arithmetic past 2^53
- [Rounding and formatting](../rounding_and_formatting/README.md) — `Intl.NumberFormat`, and rounding half away from zero
- [Branded types](../../25_Type_Compatibility/branded_types/README.md) — a `Cents` type the compiler keeps apart from plain numbers
- [Rust: Decimals: `rust_decimal`, `bigdecimal` and Python's `Decimal` ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/other_number_types/decimal_numbers/index.html) — decimal types in Rust and Python, and integer cents
- [Rust: Scale the denominator away ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/scaled_integers/index.html) — scaling the denominator away, then summing in plain integers

## Sources to start from

- [MDN — Intl.NumberFormat ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [MDN — BigInt ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [TC39 proposal — Decimal ↗](https://github.com/tc39/proposal-decimal)
