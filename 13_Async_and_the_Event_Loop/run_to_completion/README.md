# Run to completion — one call stack, one task at a time

**Level:** 101 · for anyone who has heard that JavaScript is single-threaded

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Once a piece of JavaScript starts, nothing else in its thread runs until the call stack is empty: a `setTimeout(..., 0)` due during a 200 ms loop waits for the loop and the rest of the script, and cannot change a variable midway.

**Keywords:** `run-to-completion`

## What the finished page will answer

- When does a `setTimeout(..., 0)` callback run if the script then spends 200 ms in a loop, and can it change a variable the loop is reading?
- Why can two callbacks that each do `counter++` never lose an update in one Node thread, when the same code on two threads can?
- Where can other code get in, if never in the middle of a function: at `await`, at `yield`, between callbacks?
- What does the spec call one of these pieces of work, and what makes the next one start?

## Examples it will need

- [ ] `run_to_completion_busy_loop_js.js` — a variable read before and after a 200 ms loop while a zero-delay timer waits to change it
- [ ] `run_to_completion_await_is_a_gap_js.js` — a shared counter updated on both sides of an `await`, showing where another callback got in

## See also

- [The event loop](../the_event_loop/README.md) — who chooses the next piece of code
- [Blocking the event loop](../blocking_the_event_loop/README.md) — the cost of a piece that takes too long
- [`async` and `await`](../async_and_await/README.md) — `await`, a point where other code may run
- [One thread per agent](../../20_Workers_and_Parallelism/one_thread_per_agent/README.md) — the one thread per agent that makes this true
- [Concurrency: Is `total += n` safe on two threads? ↗](https://masiarek.github.io/concurrency-learning-library/02_Shared_State/the_lost_update/index.html) — `total += n` on two threads, the race this rules out
- [Concurrency: Cooperative scheduling ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/scheduling/cooperative_scheduling/index.html) — a task runs until it gives up the thread

## Sources to start from

- [MDN — JavaScript execution model ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model)
- [ECMA-262 — Jobs and Host Operations to Enqueue Jobs ↗](https://tc39.es/ecma262/#sec-jobs)
