# Promises — a value not there yet, in three states

**Level:** 201 · for anyone who has used a promise but never built one

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A promise settles once — every later `resolve` or `reject` is silently ignored — and its `then` callback never runs straight away: even on a promise that is already fulfilled, it waits until the code that registered it has finished.

**Keywords:** `Promise`, `then`, `Promise.withResolvers`, `Promise.try`, `thenable`

## What the finished page will answer

- When does the function passed to `new Promise` run, and when does a `then` callback run?
- What happens to a second `resolve`, or a `reject` after `resolve`, and does the ignored rejection count as unhandled?
- What does resolving a promise with another promise, or with any object that has a `then` method, do?
- What does `then` return, and how do a returned value and a `throw` travel down a chain to the next `then` or `catch`?
- What do `Promise.withResolvers()` and `Promise.try()` save you from writing?
- Does creating a promise start the work, or does calling `then` start it?

## Examples it will need

- [ ] `promises_settle_once_js.js` — the executor's log line, the ignored second `resolve` and `reject`, and when the `then` callback runs
- [ ] `promises_chaining_js.js` — a value and a throw travelling through a chain of `then` and `catch` calls
- [ ] `promises_thenable_js.js` — a promise resolved with a plain object that has a `then` method, taking on its value

## See also

- [`async` and `await`](../async_and_await/README.md) — the syntax built on promises
- [Microtasks and tasks](../microtasks_and_tasks/README.md) — the queue `then` callbacks wait in
- [`all`, `allSettled`, `race` and `any`](../promise_combinators/README.md) — waiting for many promises at once
- [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md) — a rejection nobody handles
- [Concurrency: What is a future before it has a value? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/a_future_is_a_value_not_yet_there/index.html) — a value not there yet, across languages
- [Rust: What a future is ↗](https://masiarek.github.io/rust-learning-library/35_Async/what_a_future_is/index.html) — a Rust future does nothing until polled; a promise starts at once

## Sources to start from

- [MDN — Promise ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN — Using promises ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [ECMA-262 — Promise Objects ↗](https://tc39.es/ecma262/#sec-promise-objects)
