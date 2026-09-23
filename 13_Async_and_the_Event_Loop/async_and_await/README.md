# `async` and `await` — promises written as straight-line code

**Level:** 201 · for anyone who has chained promises and wants the code flat

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An `async` function always returns a promise — `return 1` gives a promise of 1 and a `throw` becomes a rejection — and it runs synchronously up to its first `await`, then resumes later, even when the awaited value is not a promise.

**Keywords:** `async`, `await`, `async function`

## What the finished page will answer

- What does calling an `async` function return, for `return 1`, for `return somePromise` and for a `throw`?
- Which lines of an `async` function run before the caller's next line, and which run later?
- Does `await 42` pause, although 42 is not a promise?
- How does `try...catch` around `await` turn a rejection back into a thrown error, and why does `return p` inside `try` skip the `catch` when `return await p` does not?
- Why must a function be `async` to use `await`, and what does TypeScript say when an `async` function is declared to return `number`?

## Examples it will need

- [ ] `async_and_await_order_js.js` — log lines from an `async` function and its caller, in the order they run
- [ ] `async_and_await_return_await_js.js` — which of `return p` and `return await p` inside `try` lets the `catch` see the rejection
- [ ] `async_and_await_return_type_tserror.ts` — tsc's TS1064 for an `async` function declared to return `number`

## See also

- [Promises](../promises/README.md) — what an `async` function returns
- [Sequential or parallel](../sequential_or_parallel_awaits/README.md) — `await` in a loop waits one at a time
- [Dynamic `import()` and top-level `await`](../../14_Modules/dynamic_import_and_top_level_await/README.md) — `await` at the top level of a module
- [Generators](../../11_Control_Flow_and_Iteration/generators/README.md) — the pause and resume that `await` builds on
- [Concurrency: What happens at an `await`? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/async_and_await/index.html) — what happens at an `await`, in several languages
- [Concurrency: Why can't a normal function call an async one? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/function_coloring/index.html) — why a normal function cannot `await`
- [Rust: `async fn` and `.await` ↗](https://masiarek.github.io/rust-learning-library/35_Async/async_fn_and_await/index.html) — the same keywords in Rust, where nothing runs until awaited

## Sources to start from

- [MDN — async function ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN — await ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [ECMA-262 — Async Function Definitions ↗](https://tc39.es/ecma262/#sec-async-function-definitions)
