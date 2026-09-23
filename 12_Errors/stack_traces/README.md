# Stack traces — what `error.stack` records, and how deep

**Level:** 201 · for anyone who has read a stack trace and wanted more of it

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** V8 fills in `error.stack` when the `Error` is created, not when it is thrown, and keeps only the top 10 frames (`Error.stackTraceLimit`); `stack` is not in the standard, and an `await` chain still shows up as `at async` frames.

**Keywords:** `error.stack`, `Error.stackTraceLimit`, `Error.captureStackTrace`, `--stack-trace-limit`

## What the finished page will answer

- Does the stack point to where the `Error` was created or where it was thrown, and what does that mean for an error built in a helper and thrown elsewhere?
- How many frames does a 50-deep recursion leave in `error.stack`, and what do `Error.stackTraceLimit = Infinity` and `node --stack-trace-limit=50` change?
- What does `Error.captureStackTrace(obj, fn)` do, and why do libraries pass their own constructor as `fn`?
- Why does an awaited call keep its caller as an `at async` frame, while a `setTimeout` callback's stack starts inside Node's timer code?
- Do the line and column numbers in a stack from a `.ts` file that Node ran match the TypeScript source?

## Examples it will need

- [ ] `stack_traces_limit_js.js` — the frame count for a 50-deep recursion at the default limit and at a raised one
- [ ] `stack_traces_created_not_thrown_js.js` — whether the stack names the function that created the `Error` and the one that threw it
- [ ] `stack_traces_async_frames_js.js` — function names from the stack of an error thrown after `await`, and of one thrown in a timer callback

## See also

- [`throw` and `try...catch`](../throw_and_try_catch/README.md) — a thrown string has no stack at all
- [Recursion and the call stack](../../05_Functions/recursion_and_the_call_stack/README.md) — the call stack a trace is a snapshot of
- [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md) — where the `at async` frames come from
- [Debugging Node](../../31_Tooling/debugging_node/README.md) — a debugger shows the live stack instead
- [Rust: Reading a backtrace ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/reading_a_backtrace/index.html) — the Rust counterpart, printed when a program panics

## Sources to start from

- [MDN — Error.prototype.stack ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)
- [V8 — Stack trace API ↗](https://v8.dev/docs/stack-trace-api)
- [Node.js 24 — errors: Error.stackTraceLimit ↗](https://nodejs.org/docs/latest-v24.x/api/errors.html#errorstacktracelimit)
