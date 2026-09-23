# Timers — `setTimeout`, `setInterval` and `setImmediate`

**Level:** 201 · for anyone who has used a timer as a sleep

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A timer's delay is a minimum: Node turns `0`, a negative delay or one above `2 ** 31 - 1` ms into 1 ms, runs the callback on a later loop turn, and returns a `Timeout` object whose `unref()` lets the process exit without waiting.

**Keywords:** `setTimeout`, `setInterval`, `setImmediate`, `clearTimeout`, `unref`, `timers/promises`

## What the finished page will answer

- What does Node do with a delay of `0`, `-5` or `2 ** 31`, and what does it print about it?
- What does `setTimeout` return in Node and in a browser, and what do `ref()`, `unref()` and `hasRef()` change?
- How late does a 10 ms timer fire when the loop is busy, and does a `setInterval` catch up on the ticks it missed?
- When does `setImmediate` run compared with `setTimeout(0)`, and why do browsers not have it?
- What does `await setTimeout(100, value)` from `node:timers/promises` resolve to, and how does that module's `setInterval` work with `for await`?

## Examples it will need

- [ ] `timers_delay_is_a_minimum_sh.sh` — the order four timers fire in when their delays are 1, 0, -5 and `2 ** 31`, and Node's warnings with the process id removed
- [ ] `timers_unref_js.js` — that `setTimeout` returns a `Timeout` object, and that an unref'd 10 s timer does not keep the process alive
- [ ] `timers_promises_js.js` — the values from `await setTimeout` and from a `for await` loop over `setInterval` from `node:timers/promises`

## See also

- [The event loop](../the_event_loop/README.md) — the phase in which timers run
- [Blocking the event loop](../blocking_the_event_loop/README.md) — why a timer fires late
- [Cancellation](../cancellation_with_abortcontroller/README.md) — a `timers/promises` wait that takes a signal
- [Measuring elapsed time](../../16_Dates_and_Time/measuring_elapsed_time/README.md) — measuring how late a timer really was
- [Concurrency: Timers and tickers ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/async/timers/index.html) — timers and tickers across languages
- [Go: A timeout is a channel ↗](https://masiarek.github.io/go-learning-library/03_Select/a_timeout_is_a_channel/index.html) — in Go a timer is a channel you receive from

## Sources to start from

- [Node.js 24 — timers ↗](https://nodejs.org/docs/latest-v24.x/api/timers.html)
- [MDN — Window: setTimeout() method ↗](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
- [HTML Standard — Timers ↗](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers)
