# Time zones — `Date` stores UTC, formatting picks a zone

**Level:** 201 · for anyone whose dates are an hour or a day off on another machine

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `Date` is one number, milliseconds since 1970 UTC, and the zone appears only when you read it: the same `Date` has `getHours()` 8 under `TZ=America/New_York` and 21 under `TZ=Asia/Tokyo`, and `getTimezoneOffset()` is positive west of UTC.

**Keywords:** `getTimezoneOffset`, `TZ`

## What the finished page will answer

- What do `getTime()`, `getHours()` and `getTimezoneOffset()` print for one instant under two `TZ` settings?
- Why is `getTimezoneOffset()` positive west of UTC, and how does it change across a daylight-saving switch?
- How do you print an instant in another zone without touching `TZ`?
- Where does `new Date(2026, 2, 8, 2, 30)` land in New York, where 02:30 that night does not exist?
- Does changing `process.env.TZ` while the program runs change what later `Date` calls print?

## Examples it will need

- [ ] `time_zones_one_instant_sh.sh` — one instant's getTime, getHours and getTimezoneOffset under three TZ values
- [ ] `time_zones_dst_gap_sh.sh` — local times inside the spring-forward gap and the autumn overlap in New York, and where Date puts each

## See also

- [Parsing dates](../date_parsing/README.md) — strings that carry a zone, and strings that do not
- [Formatting dates](../formatting_dates_with_intl/README.md) — the timeZone option that formats in any zone
- [Temporal](../temporal/README.md) — a date-time type that keeps its zone: ZonedDateTime
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — process.env, where TZ is read from

## Sources to start from

- [MDN — Date.prototype.getTimezoneOffset() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
- [ECMA-262 — Time Values and Time Range ↗](https://tc39.es/ecma262/#sec-time-values-and-time-range)
- [Node.js 24 — CLI: TZ ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#tz)
