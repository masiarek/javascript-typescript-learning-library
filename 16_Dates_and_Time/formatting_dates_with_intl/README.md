# Formatting dates — `toISOString`, `toLocaleString` and `Intl.DateTimeFormat`

**Level:** 201 · for anyone printing a date for a person or for a file

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `toISOString()` prints UTC ending in `Z` whatever the machine's zone, but throws `RangeError` on an invalid date, which `JSON.stringify` quietly writes as `null`; `toLocaleString` prints the same instant as 22 September in New York and 23.9.2026 in Tokyo.

**Keywords:** `toISOString`, `toLocaleString`, `Intl.DateTimeFormat`, `formatToParts`

## What the finished page will answer

- What does `toISOString()` print for one instant, and why is it the same on every machine?
- What do `toLocaleString` calls with `en-US` and `de-DE`, each given a `timeZone`, print for that instant?
- What do `String()`, `JSON.stringify` and `toISOString()` do with an invalid date?
- What does `formatToParts` return, and why build output from its parts instead of slicing a formatted string?
- Which spaces does ICU put in a formatted time range (U+2009, U+202F), and do Node 24 and 25 agree?

## Examples it will need

- [ ] `formatting_dates_iso_and_locale_js.js` — one instant through toISOString, toLocaleString in three locale and zone pairs, and formatToParts
- [ ] `formatting_dates_invalid_js.js` — an invalid date through String, JSON.stringify and toISOString, with the RangeError

## See also

- [Time zones](../time_zones/README.md) — the zone a format uses when you name none
- [Rounding and formatting](../../10_Numbers_and_Math/rounding_and_formatting/README.md) — the same Intl machinery applied to numbers
- [JSON](../../06_Objects/json/README.md) — what JSON.stringify does with a Date
- [Comparing and sorting strings](../../09_Strings_and_Unicode/comparing_and_sorting_strings/README.md) — localeCompare, another result that depends on the locale
- [Java text: Format follows the locale ↗](https://masiarek.github.io/java-text-learning-library/03_Locale/format_follows_the_locale/index.html) — the same locale dependence in Java's formatted numbers

## Sources to start from

- [MDN — Date.prototype.toISOString() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
- [MDN — Intl.DateTimeFormat ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [ECMA-262 — Date.prototype.toISOString ↗](https://tc39.es/ecma262/#sec-date.prototype.toisostring)
