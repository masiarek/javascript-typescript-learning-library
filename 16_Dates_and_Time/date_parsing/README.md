# Parsing dates — a date-only string is UTC, a date-time string without an offset is local

**Level:** 201 · for anyone turning a string from a form or an API into a Date

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Under `TZ=America/New_York`, `new Date("2026-03-08")` is midnight UTC but `new Date("2026-03-08T00:00")` is midnight local, five hours later, and strings outside the ISO format are the engine's guess: V8 reads `"08/03/2026"` as 3 August.

**Keywords:** `Date.parse`, `Invalid Date`

## What the finished page will answer

- What instants do `"2026-03-08"` and `"2026-03-08T00:00"` become under `TZ=America/New_York`, and why do they differ?
- What does V8 make of strings outside the spec's format, such as `"08/03/2026"` and `"2026-02-30"`?
- What does an unparsable string give, and how do you detect it without a `try`?
- How do a trailing `Z` or an offset such as `+02:00` change the result?
- What does `Date.parse` return for the same strings, and how does it relate to `new Date(string)`?

## Examples it will need

- [ ] `date_parsing_formats_sh.sh` — several date strings parsed under TZ=America/New_York, each shown as toISOString or Invalid Date

## See also

- [Time zones](../time_zones/README.md) — what local time means for a string without Z
- [Formatting dates](../formatting_dates_with_intl/README.md) — the reverse trip: a Date back to a string
- [`NaN`, `Infinity` and `-0`](../../10_Numbers_and_Math/nan_infinity_and_negative_zero/README.md) — the NaN inside an Invalid Date
- [Run-time validation](../../30_Where_Types_Lie/runtime_validation/README.md) — checking dates where they enter the program

## Sources to start from

- [MDN — Date.parse() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
- [ECMA-262 — Date Time String Format ↗](https://tc39.es/ecma262/#sec-date-time-string-format)
- [MDN — Date: date time string format ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format)
