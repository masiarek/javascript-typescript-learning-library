# `finally` — runs on every way out of the block, and a `return` inside it wins

**Level:** 201 · for anyone who writes cleanup code

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `finally` runs however the `try` block is left — by `return`, `throw`, `break` or falling off the end — and a `return` inside it replaces the result and silently discards a thrown error; only ending the process, as `process.exit()` does, skips it.

**Keywords:** `finally`

## What the finished page will answer

- What does `function f() { try { return "try" } finally { return "finally" } }` return, and what happens to an error thrown in the `try` when `finally` returns?
- If `try` returns `x` and `finally` then changes `x`, which value does the caller get?
- Does `finally` run on `break` and `continue` inside a loop, and before or after the loop's next turn?
- Which exits skip `finally`: `process.exit()`, an uncaught error in a timer callback, a generator that is never resumed?
- In an `async` function, does `finally` run after an awaited promise rejects, and before or after the caller's `catch`?

## Examples it will need

- [ ] `finally_return_wins_js.js` — the result of `return` in `try` against `return` in `finally`, a swallowed throw, and a variable changed after `return`
- [ ] `finally_in_loops_and_async_js.js` — log lines showing `finally` on `break`, on `continue` and after an awaited rejection, in order
- [ ] `finally_skipped_sh.sh` — what prints when `try` calls `process.exit()`, and when a generator paused in `try` is never resumed

## See also

- [`throw` and `try...catch`](../throw_and_try_catch/README.md) — the `try` and `catch` that `finally` follows
- [Generators](../../11_Control_Flow_and_Iteration/generators/README.md) — a paused generator's `finally` runs only on `return()`
- [`using` and `Symbol.dispose`](../../17_Metaprogramming/explicit_resource_management/README.md) — `using`: cleanup without writing `finally`
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — `process.exit()`, which skips every `finally`
- [Rust: `Drop`, and what RAII buys ↗](https://masiarek.github.io/rust-learning-library/12_Traits/drop_and_raii/index.html) — cleanup by scope instead, with Rust's `Drop`
- [Concurrency: Who unlocks when the function returns early? ↗](https://masiarek.github.io/concurrency-learning-library/03_When_Locks_Go_Wrong/the_forgotten_unlock/index.html) — releasing a lock on every exit path, across languages

## Sources to start from

- [MDN — try...catch ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [ECMA-262 — The try Statement: Runtime Semantics: Evaluation ↗](https://tc39.es/ecma262/#sec-try-statement-runtime-semantics-evaluation)
- [ESLint — no-unsafe-finally ↗](https://eslint.org/docs/latest/rules/no-unsafe-finally)
