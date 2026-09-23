# Rounding and formatting — `toFixed`, `Math.round` and `Intl.NumberFormat`

**Level:** 201 · for anyone who shows numbers to people

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `(1.005).toFixed(2)` is `"1.00"` because the stored double is 1.00499999…, yet `Intl.NumberFormat` with two fraction digits prints `1.01`; and `Math.round(-2.5)` is `-2`, since it rounds halves toward +∞, where `Intl.NumberFormat` rounds them away from zero to `-3`.

**Keywords:** `toFixed`, `toPrecision`, `Math.round`, `Math.floor`, `Math.trunc`, `Intl.NumberFormat`

## What the finished page will answer

- Why does `(1.005).toFixed(2)` give `"1.00"` while `Intl.NumberFormat` with `maximumFractionDigits: 2` gives `1.01`?
- How do `Math.round`, `toFixed(0)` and `Intl.NumberFormat` round `2.5`, `-2.5` and `-0.4`?
- What do `Math.floor`, `Math.ceil` and `Math.trunc` return for `-1.5`?
- What do the `roundingMode` options of `Intl.NumberFormat` (`halfEven`, `halfCeil`, `trunc`...) change?
- Why does `(1234567.891).toLocaleString("fr-FR")` separate groups with U+202F instead of a space, and how does `en-IN` group digits?

## Examples it will need

- [ ] `rounding_and_formatting_tofixed_js.js` — `toFixed(2)`, `Math.round(x * 100) / 100` and `Intl.NumberFormat` on 1.005, 1.045, 2.675 and 8.345, beside each value's stored digits from `toPrecision(21)`
- [ ] `rounding_and_formatting_halves_js.js` — `Math.round`, `toFixed(0)` and `Intl.NumberFormat` with each `roundingMode` on 2.5, -2.5, 0.5 and -0.5, as a table
- [ ] `rounding_and_formatting_locales_js.js` — one number formatted for `en-US`, `de-DE`, `fr-FR` and `en-IN`, with the code points of the separators

## See also

- [Every number is a double](../every_number_is_a_double/README.md) — why 1.005 is stored a little below 1.005
- [Money](../money_and_decimals/README.md) — formatting currency once amounts are kept in cents
- [Formatting dates](../../16_Dates_and_Time/formatting_dates_with_intl/README.md) — the same `Intl` formatter pattern, for dates
- [Bitwise operators](../bitwise_operators/README.md) — `~~x` and `x | 0`, truncation that breaks past 2^31
- [Rust: Making a float whole ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/rounding_a_float/index.html) — `floor`, `ceil`, `trunc` and `round` in Rust, on negatives and halves
- [Math: Significant figures ↗](https://masiarek.github.io/math-learning-library/01_Precision/significant_figures/index.html) — the rule for how many digits a result deserves

## Sources to start from

- [MDN — Number.prototype.toFixed() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [MDN — Math.round() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
- [MDN — Intl.NumberFormat() constructor ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
