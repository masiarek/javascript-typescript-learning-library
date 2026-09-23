# `throw` and `try...catch` — and why you throw an `Error`, not a string

**Level:** 101 · for anyone who has caught an exception in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `throw` accepts any value, but only an `Error` object records a `stack`: throw a string and `catch` receives just the string — no stack, no `instanceof Error`, nothing to say which calls led there.

**Keywords:** `throw`, `try...catch`, `Error`, `Error.isError`

## What the finished page will answer

- What reaches `catch` when the thrown value is a string, a number, `undefined` or an `Error`, and which of them has a `stack`?
- What does Node print when a thrown string is never caught — from an ES module, and from a CommonJS file?
- Does a `try` around `setTimeout(() => { throw ... })` catch the error, and does a `try` around a promise that is not awaited?
- What does `catch { }` without a binding do, and when is it the right choice?
- Why does TypeScript type the caught value as `unknown` under `strict`, and what must you check before reading `.message`?
- What does `Error.isError` answer that `instanceof Error` gets wrong, for an error made in another `node:vm` context?

## Examples it will need

- [ ] `throw_and_try_catch_any_value_js.js` — for a thrown string, number, `undefined` and `Error`: `typeof`, `instanceof Error` and `typeof stack` inside `catch`
- [ ] `throw_and_try_catch_uncaught_string_sh.sh` — Node's report for an uncaught thrown string from an ES module and from a CommonJS file, with each exit status
- [ ] `throw_and_try_catch_unknown_tserror.ts` — tsc's TS18046 for reading `.message` on a caught value under `strict`

## See also

- [Built-in error types](../error_types/README.md) — the `Error` subclasses the engine throws
- [Stack traces](../stack_traces/README.md) — what a stack records, and what a string lacks
- [`finally`](../finally/README.md) — the third clause of `try`
- [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md) — `try...catch` around `await` catches a rejection
- [`any`, `unknown` and `never`](../../23_Everyday_Types/any_unknown_and_never/README.md) — the `unknown` type a caught value gets
- [Rust: What makes a type an error ↗](https://masiarek.github.io/rust-learning-library/02_Errors/the_error_trait/index.html) — what Rust requires of a type before calling it an error
- [Rust: The `?` operator ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/the_question_mark_operator/index.html) — in Rust errors are returned as values, not thrown

## Sources to start from

- [MDN — throw ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [MDN — try...catch ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [ECMA-262 — The throw Statement ↗](https://tc39.es/ecma262/#sec-throw-statement)
