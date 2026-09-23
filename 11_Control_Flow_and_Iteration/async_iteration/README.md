# Async iteration — `for await...of` and async generators

**Level:** 301 · for anyone comfortable with promises and generators

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `for await...of` waits for each value before asking for the next, so looping over an array of running promises is a trap: one that rejects before the loop reaches it is unhandled, and Node exits with status 1 despite the `try` around the loop.

**Keywords:** `for await...of`, `async function*`, `Symbol.asyncIterator`, `Array.fromAsync`

## What the finished page will answer

- In what order do an async generator's body and a `for await` loop's body run, and does the generator run ahead while the loop body is busy?
- Why does a `try` around `for await (const v of [slow, early])` fail to catch `early`'s rejection, and why do `Promise.all` and `Promise.allSettled` not have that problem?
- What does `break` inside `for await` do to an async generator paused at `yield` — does its `finally` run?
- What does `for await` do with a plain value that is not a promise, and with an ordinary synchronous iterable?
- What does `Array.fromAsync` return for an async generator, and how does it differ from `Promise.all` on an array?

## Examples it will need

- [ ] `async_iteration_generator_js.js` — log lines from an async generator and from the `for await` body in the order they run, then the generator's `finally` after `break`
- [ ] `async_iteration_early_rejection_sh.sh` — `for await` over `[slow, early]` ending with exit status 1, then the same promises through `Promise.allSettled`
- [ ] `async_iteration_from_async_js.js` — `Array.fromAsync` collecting an async generator

## See also

- [Generators](../generators/README.md) — the synchronous generators these extend
- [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md) — why an early rejection ends the process
- [`all`, `allSettled`, `race` and `any`](../../13_Async_and_the_Event_Loop/promise_combinators/README.md) — waiting for many promises without the early-rejection trap
- [Streams](../../19_Node_Runtime/streams_and_backpressure/README.md) — a readable stream is an async iterable
- [Concurrency: How does a loop await a sequence of values that arrive over time? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/an_async_stream/index.html) — a loop over values that arrive over time, in other languages
- [Rust: `Iterator` versus `Stream` ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/iterator_vs_stream/index.html) — `Stream`, the async counterpart of `Iterator` in Rust

## Sources to start from

- [MDN — for await...of ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [MDN — async function* ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*)
- [ECMA-262 — CreateAsyncFromSyncIterator ↗](https://tc39.es/ecma262/#sec-createasyncfromsynciterator)
