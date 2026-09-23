# 16 — Dates and time

**One line:** A `Date` is one number of milliseconds since 1970 UTC, and nearly every date bug comes from converting to and from it: months counted from zero, strings read as UTC or as local time, and a zone chosen only when printing.

The chapter starts with building a `Date` from numbers, where months count from zero and overflow silently, then parsing one from a string, where a missing `T00:00` moves the result by hours. Time zones and formatting follow: they decide how the one stored number is shown. Then Temporal, the Stage 4 replacement that Node does not ship yet. The last page measures durations, a job for other clocks than `Date`. Every probe that reads local time pins `TZ`.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`Date` months start at zero](months_start_at_zero/README.md) | 101 | Months count from zero and days overflow without a word: `new Date(2026, 1, 30)` is 2 March 2026, day `0` is the last day of the month before, and adding one month to 31 January with `setMonth` lands on 3 March. | stub |
| [Parsing dates](date_parsing/README.md) | 201 | Under `TZ=America/New_York`, `new Date("2026-03-08")` is midnight UTC but `new Date("2026-03-08T00:00")` is midnight local, five hours later, and strings outside the ISO format are the engine's guess: V8 reads `"08/03/2026"` as 3 August. | stub |
| [Time zones](time_zones/README.md) | 201 | A `Date` is one number, milliseconds since 1970 UTC, and the zone appears only when you read it: the same `Date` has `getHours()` 8 under `TZ=America/New_York` and 21 under `TZ=Asia/Tokyo`, and `getTimezoneOffset()` is positive west of UTC. | stub |
| [Formatting dates](formatting_dates_with_intl/README.md) | 201 | `toISOString()` prints UTC ending in `Z` whatever the machine's zone, but throws `RangeError` on an invalid date, which `JSON.stringify` quietly writes as `null`; `toLocaleString` prints the same instant as 22 September in New York and 23.9.2026 in Tokyo. | stub |
| [Temporal](temporal/README.md) | 301 | Temporal replaces `Date` with separate types for an instant, a calendar date and a date-time in a zone, but Node 25.2.1 does not ship it: `typeof Temporal` is `"undefined"`, and `--harmony-temporal` does not change that. | stub |
| [Measuring elapsed time](measuring_elapsed_time/README.md) | 201 | `Date.now()` is whole milliseconds since 1970 from the system clock, `performance.now()` is fractional milliseconds since the process started, so it reads under a second at launch, and `process.hrtime.bigint()` counts nanoseconds as a `BigInt`. | stub |
<!-- /lessons -->

## Boundaries

Timers that wait for a duration belong to the async chapter; this chapter only measures durations.
