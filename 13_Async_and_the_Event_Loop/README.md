# 13 — Async and the event loop

**One line:** JavaScript runs one piece of code at a time on one thread, and callbacks, promises, `await` and timers are all ways of queueing the next piece — so what runs when is decided by queues, not by threads.

The chapter starts from run to completion — one call stack, one piece of code at a time — then opens Node's event loop and its two kinds of queue, tasks and microtasks. On that base it builds three generations of asynchronous code: error-first callbacks, promises, and `async` with `await`. It then compares awaiting in sequence with awaiting together, the four promise combinators, timers, and cancellation with `AbortController`, and ends with the failure they all share: one slow synchronous loop stops everything.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Run to completion](run_to_completion/README.md) | 101 | Once a piece of JavaScript starts, nothing else in its thread runs until the call stack is empty: a `setTimeout(..., 0)` due during a 200 ms loop waits for the loop and the rest of the script, and cannot change a variable midway. | stub |
| [The event loop](the_event_loop/README.md) | 201 | Node's loop visits its queues in a fixed cycle — expired timers, then I/O callbacks, then `setImmediate` callbacks, then close handlers — draining `process.nextTick` and promise callbacks after each callback, so inside an I/O callback `setImmediate` always runs before `setTimeout(0)`. | stub |
| [Microtasks and tasks](microtasks_and_tasks/README.md) | 201 | Promise callbacks, `queueMicrotask` and `process.nextTick` all run before the next timer or I/O callback, so a promise chain that keeps queueing more starves `setTimeout(0)`; and `nextTick` beats promise callbacks in CommonJS but not at the top level of an ES module. | stub |
| [Callbacks](callbacks/README.md) | 101 | A Node callback API calls back with the error first and the result second — `(err, data)`, with `err` `null` on success — and a `throw` inside the callback escapes any `try` around the call that registered it and crashes the process. | stub |
| [Promises](promises/README.md) | 201 | A promise settles once — every later `resolve` or `reject` is silently ignored — and its `then` callback never runs straight away: even on a promise that is already fulfilled, it waits until the code that registered it has finished. | stub |
| [`async` and `await`](async_and_await/README.md) | 201 | An `async` function always returns a promise — `return 1` gives a promise of 1 and a `throw` becomes a rejection — and it runs synchronously up to its first `await`, then resumes later, even when the awaited value is not a promise. | stub |
| [Sequential or parallel](sequential_or_parallel_awaits/README.md) | 201 | Three 100 ms waits awaited one by one in a loop take about 300 ms; started together and handed to `Promise.all`, they take about 100 ms — each operation starts when its promise is created, not when it is awaited. | stub |
| [`all`, `allSettled`, `race` and `any`](promise_combinators/README.md) | 201 | `Promise.all` rejects at the first failure, `allSettled` never rejects, `race` takes whichever settles first even if it failed, and `any` takes the first success, rejecting with an `AggregateError` only when all fail — and none of them stops the others. | stub |
| [Timers](timers/README.md) | 201 | A timer's delay is a minimum: Node turns `0`, a negative delay or one above `2 ** 31 - 1` ms into 1 ms, runs the callback on a later loop turn, and returns a `Timeout` object whose `unref()` lets the process exit without waiting. | stub |
| [Cancellation](cancellation_with_abortcontroller/README.md) | 301 | Calling `abort()` stops nothing by itself — it sets `signal.aborted` and fires one `abort` event — so code that never checks the signal runs to the end, while an API that listens, such as `fetch` or the `timers/promises` sleep, rejects with an `AbortError`. | stub |
| [Blocking the event loop](blocking_the_event_loop/README.md) | 201 | While one piece of synchronous code runs, no timer, I/O callback or request is handled: a 10 ms timer behind a 300 ms loop runs after 300 ms, and a 10 ms `setInterval` does not replay the thirty ticks it missed. | stub |
<!-- /lessons -->

## Boundaries

Real parallelism with worker threads is in Workers and parallelism, the browser's rendering loop in The browser, and `for await...of` with async generators in Control flow and iteration.
