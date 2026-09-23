# 12 — Errors

**One line:** JavaScript lets you throw any value and catch it anywhere up the stack, but only an `Error` carries a stack and a `cause`, and an error nobody catches — thrown or rejected — ends a Node process with exit status 1.

The chapter starts with `throw` and `try...catch`, and why the thing you throw should be an `Error`. It then lists the built-in error types and the mistakes that produce each, covers `finally` and the `return` inside it that silently wins, and shows how to define your own error classes and wrap one error in another with `cause`. It ends with what an error records in `error.stack`, and with what Node does with an error that nobody catches.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`throw` and `try...catch`](throw_and_try_catch/README.md) | 101 | `throw` accepts any value, but only an `Error` object records a `stack`: throw a string and `catch` receives just the string — no stack, no `instanceof Error`, nothing to say which calls led there. | stub |
| [Built-in error types](error_types/README.md) | 101 | The engine picks the type: `TypeError` for using a value the wrong way, `ReferenceError` for an unknown name, `RangeError` for a number out of range, `SyntaxError` for text it cannot parse — and `EvalError` only when the host forbids `eval` altogether. | stub |
| [`finally`](finally/README.md) | 201 | `finally` runs however the `try` block is left — by `return`, `throw`, `break` or falling off the end — and a `return` inside it replaces the result and silently discards a thrown error; only ending the process, as `process.exit()` does, skips it. | stub |
| [Custom errors and `cause`](custom_errors_and_cause/README.md) | 201 | `new Error(message, { cause })` keeps the original error on `.cause`, so wrapping loses nothing; but a bare `class ConfigError extends Error {}` still calls itself `"Error"` — its `name` comes from `Error.prototype` until you set your own. | stub |
| [Stack traces](stack_traces/README.md) | 201 | V8 fills in `error.stack` when the `Error` is created, not when it is thrown, and keeps only the top 10 frames (`Error.stackTraceLimit`); `stack` is not in the standard, and an `await` chain still shows up as `at async` frames. | stub |
| [Unhandled errors](unhandled_errors_in_node/README.md) | 201 | An uncaught exception and an unhandled rejection both end Node with exit status 1, and a rejection is unhandled if no handler is attached by the time the microtask queue empties — a `.catch` added one timer later is already too late. | stub |
<!-- /lessons -->

## Boundaries

Rejected promises and `try...catch` around `await` are built up in Async and the event loop; the `error` event of an `EventEmitter` is in The Node.js runtime; `using` and `Symbol.dispose` are in Metaprogramming.
