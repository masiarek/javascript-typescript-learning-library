# Measuring elapsed time — `Date.now`, `performance.now` and `process.hrtime`

**Level:** 201 · for anyone timing a piece of code

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Date.now()` is whole milliseconds since 1970 from the system clock, `performance.now()` is fractional milliseconds since the process started, so it reads under a second at launch, and `process.hrtime.bigint()` counts nanoseconds as a `BigInt`.

**Keywords:** `Date.now`, `performance.now`, `process.hrtime.bigint`, `performance.timeOrigin`

## What the finished page will answer

- What do `Date.now()`, `performance.now()` and `process.hrtime.bigint()` return at program start, in what unit, and counted from when?
- How does `performance.timeOrigin + performance.now()` compare with `Date.now()`?
- What is the smallest step each clock shows between two back-to-back calls?
- How do you time a block with each clock, and why subtract two readings rather than trust one?
- What do `performance.mark` and `performance.measure` record, and how do you read the result?

## Examples it will need

- [ ] `measuring_elapsed_three_clocks_js.js` — the type, integer-ness and rough size of Date.now, performance.now and process.hrtime.bigint at start-up
- [ ] `measuring_elapsed_time_a_block_js.js` — one loop timed with each clock, printed as whether each saw time pass, plus the name of a performance.measure entry

## See also

- [Timers](../../13_Async_and_the_Event_Loop/timers/README.md) — setTimeout delays, measured with these clocks
- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — timing the loop that blocks everything else
- [BigInt](../../02_Values_and_Types/bigint/README.md) — the type process.hrtime.bigint returns
- [Rust: Two clocks: `Instant` and `SystemTime` ↗](https://masiarek.github.io/rust-learning-library/33_Time_and_Benchmarking/two_clocks/index.html) — the same two kinds of clock in Rust, and which can be set
- [C++: Three clocks, and the one in the trenchcoat ↗](https://masiarek.github.io/cpp-learning-library/01_Time_and_Benchmarking/three_clocks/index.html) — three clocks in C++, one of which can be set back
- [C++: The cost of asking the time ↗](https://masiarek.github.io/cpp-learning-library/01_Time_and_Benchmarking/the_cost_of_asking_the_time/index.html) — what reading a clock itself costs

## Sources to start from

- [MDN — Performance: now() ↗](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [Node.js 24 — process.hrtime.bigint() ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processhrtimebigint)
- [MDN — Date.now() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
