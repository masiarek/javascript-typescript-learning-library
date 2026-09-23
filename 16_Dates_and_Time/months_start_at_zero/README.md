# `Date` months start at zero — and overflow into the next month silently

**Level:** 101 · for anyone who has built a Date from numbers

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Months count from zero and days overflow without a word: `new Date(2026, 1, 30)` is 2 March 2026, day `0` is the last day of the month before, and adding one month to 31 January with `setMonth` lands on 3 March.

**Keywords:** `Date`, `getMonth`, `setMonth`, `getDay`

## What the finished page will answer

- What dates do `new Date(2026, 1, 30)`, `new Date(2026, 12, 1)` and `new Date(2026, 0, 0)` produce?
- What does `setMonth(getMonth() + 1)` do on 31 January, and how do you add a month without skipping February?
- Which parts of a `Date` count from zero (month, weekday) and which from one (day of the month)?
- Why does `new Date(2026, 0, 1)` depend on the machine's time zone while `Date.UTC(2026, 0, 1)` does not?
- What year does `new Date(99, 0, 1)` give, and why?

## Examples it will need

- [ ] `months_start_at_zero_overflow_sh.sh` — dates built from out-of-range months and days under TZ=America/New_York, one per line
- [ ] `months_start_at_zero_add_month_js.js` — setUTCMonth(+1) on the 31st of several months beside a version that stops at the month's last day (UTC methods only, so no TZ is needed)

## See also

- [Time zones](../time_zones/README.md) — why new Date(y, m, d) depends on the machine's zone
- [Temporal](../temporal/README.md) — months numbered from 1, and overflow you choose
- [Parsing dates](../date_parsing/README.md) — the other way to make a Date: from a string

## Sources to start from

- [MDN — Date() constructor ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [MDN — Date.prototype.setMonth() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [ECMA-262 — MakeDay ↗](https://tc39.es/ecma262/#sec-makeday)
