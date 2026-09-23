# Temporal — the replacement for `Date`, and why Node does not run it yet

**Level:** 301 · for anyone tired of the Date bugs in this chapter

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Temporal replaces `Date` with separate types for an instant, a calendar date and a date-time in a zone, but Node 25.2.1 does not ship it: `typeof Temporal` is `"undefined"`, and `--harmony-temporal` does not change that.

**Keywords:** `Temporal`, `Temporal.PlainDate`, `Temporal.ZonedDateTime`, `Temporal.Instant`

## What the finished page will answer

- What is `typeof Temporal` in Node 24 and in Node 25.2.1, with and without `--harmony-temporal`?
- Which Temporal type answers which question: `Instant`, `PlainDate`, `PlainDateTime`, `ZonedDateTime`, `Duration`?
- What does `Temporal.PlainDate.from("2026-01-31").add({ months: 1 })` give, where `setMonth` gave 3 March?
- What does `overflow: "reject"` do with 30 February?
- How does a program check for `Temporal` and fall back to `Date` when it is missing?

## Examples it will need

- [ ] `temporal_feature_check_sh.sh` — node --version, then typeof Temporal with and without --harmony-temporal
- [ ] `temporal_month_end_js.js` — 31 January plus one month with Temporal.PlainDate when Temporal exists, and a one-line notice when it does not

## See also

- [`Date` months start at zero](../months_start_at_zero/README.md) — the Date bugs Temporal was designed to remove
- [Which features your Node has](../../01_Running_JavaScript/which_features_your_node_has/README.md) — checking whether this Node has a feature
- [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md) — how a proposal becomes part of the language
- [Time zones](../time_zones/README.md) — the zone handling that ZonedDateTime makes explicit
- [Rust: An `Instant` is not a `SystemTime` ↗](https://masiarek.github.io/rust-learning-library/33_Time_and_Benchmarking/an_instant_is_not_a_system_time/index.html) — the same split in Rust: an instant is not a calendar time
- [C++: A time point knows its clock ↗](https://masiarek.github.io/cpp-learning-library/01_Time_and_Benchmarking/a_time_point_knows_its_clock/index.html) — the C++ way: the clock is part of the time point's type

## Sources to start from

- [MDN — Temporal ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [TC39 — Temporal proposal ↗](https://github.com/tc39/proposal-temporal)
- [TC39 — Temporal documentation ↗](https://tc39.es/proposal-temporal/docs/)
