# Callbacks — error-first, and the pyramid they build

**Level:** 101 · for anyone reading older Node code or its documentation

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A Node callback API calls back with the error first and the result second — `(err, data)`, with `err` `null` on success — and a `throw` inside the callback escapes any `try` around the call that registered it and crashes the process.

**Keywords:** `error-first callback`, `util.promisify`, `util.callbackify`

## What the finished page will answer

- What does `fs.readFile` pass to its callback on success and on failure, and what does it return to its caller?
- Why does a `try` around `fs.readFile(...)` not catch an error thrown inside its callback?
- What do three dependent steps look like as nested callbacks, as a promise chain and with `await`?
- What goes wrong when a function calls its callback synchronously on one path and asynchronously on another, and how does `process.nextTick` fix it?
- What does `util.promisify(fs.readFile)` return, and what does it do with the `err` argument?

## Examples it will need

- [ ] `callbacks_error_first_js.js` — the `(err, data)` arguments `fs.readFile` passes for a file that exists and for one that does not
- [ ] `callbacks_throw_escapes_sh.sh` — a throw inside a `readFile` callback getting past the surrounding `try`, with the exit status
- [ ] `callbacks_pyramid_to_await_js.js` — three dependent steps written with nested callbacks, with promises and with `await`, each printing the same result

## See also

- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — a callback is a function handed to another
- [Promises](../promises/README.md) — what replaced the pyramid
- [`throw` and `try...catch`](../../12_Errors/throw_and_try_catch/README.md) — why a `try` cannot reach into a later callback
- [Files](../../19_Node_Runtime/reading_and_writing_files/README.md) — `fs` callbacks next to `fs/promises`
- [Concurrency: Where does a callback keep its state? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/a_callback_and_its_state/index.html) — where a callback keeps its state between calls
- [Concurrency: Callback ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/async/callback/index.html) — the callback as a concurrency idea

## Sources to start from

- [Node.js — JavaScript Asynchronous Programming and Callbacks ↗](https://nodejs.org/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks)
- [Node.js 24 — util.promisify() ↗](https://nodejs.org/docs/latest-v24.x/api/util.html#utilpromisifyoriginal)
