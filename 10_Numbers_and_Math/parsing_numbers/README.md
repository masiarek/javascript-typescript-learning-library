# Parsing numbers — `parseInt` stops at the first bad character, `Number()` rejects the whole string

**Level:** 201 · for anyone who turns user input into numbers

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `parseInt` reads leading digits and stops, `Number()` and unary `+` want the whole string: `parseInt("12px")` is `12` but `Number("12px")` is `NaN`, `Number("")` is `0` but `parseInt("")` is `NaN`, and `parseInt(0.0000005)` is `5`, because the number first becomes `"5e-7"`.

**Keywords:** `parseInt`, `parseFloat`, `radix`

## What the finished page will answer

- What do `parseInt`, `parseFloat`, `Number()` and unary `+` return for `"12px"`, `""`, `" 12 "`, `"1e3"`, `"0x1f"`, `"0b101"` and `null`?
- Why is `parseInt(0.0000005)` equal to `5`, and what does `tsc` say about passing a number to `parseInt`?
- What does the radix argument change, what happens with radix 1 or 37, and what does `parseInt` assume without one?
- Where do `Number()` and unary `+` disagree, and why does `+10n` throw while `Number(10n)` is `10`?
- Which spellings does `Number()` reject that a numeric literal accepts, such as `"1_000"`?

## Examples it will need

- [ ] `parsing_numbers_compare_js.js` — a table of inputs (`"12px"`, `""`, `" 12 "`, `"0x1f"`, `"0b101"`, `"1e3"`, `"1_000"`, `null`) through `parseInt`, `parseFloat`, `Number()` and unary `+`
- [ ] `parsing_numbers_radix_js.js` — `parseInt` with radix 2, 16, 36, 1 and none, and `parseInt(0.0000005)` next to `String(0.0000005)`
- [ ] `parsing_numbers_parseint_number_tserror.ts` — tsc's TS2345 diagnostic for passing a number to `parseInt`

## See also

- [Converting on purpose](../../03_Equality_and_Coercion/explicit_conversion/README.md) — `Number()` and unary `+` on values that are not strings
- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — why `["1", "2", "3"].map(parseInt)` goes wrong
- [`NaN`, `Infinity` and `-0`](../nan_infinity_and_negative_zero/README.md) — the `NaN` a failed parse returns, and how to test for it
- [BigInt](../../02_Values_and_Types/bigint/README.md) — `BigInt("...")` for integers past 2^53
- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — why passing parseInt straight to map goes wrong
- [C: Parsing a number from text ↗](https://masiarek.github.io/c-learning-library/03_Strings/parsing_a_number_from_text/index.html) — the `atoi`, `sscanf` and `strtol` of C, which fail three different ways
- [Rust: Parsing out of a string ↗](https://masiarek.github.io/rust-learning-library/14_Strings/parsing_a_string/index.html) — in Rust, `parse` returns a `Result` where JavaScript returns `NaN`

## Sources to start from

- [MDN — parseInt() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [ECMA-262 — parseInt ( string, radix ) ↗](https://tc39.es/ecma262/#sec-parseint-string-radix)
- [ECMA-262 — StringToNumber ↗](https://tc39.es/ecma262/#sec-stringtonumber)
