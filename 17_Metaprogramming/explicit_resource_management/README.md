# `using` and `Symbol.dispose` — cleanup that runs when a block ends

**Level:** 301 · for anyone who has written try...finally to close something

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `using` calls `[Symbol.dispose]()` as its block exits — in reverse order of declaration, even when the block throws — and when a dispose throws too, both errors survive in one `SuppressedError`; Node 24 and 25.2.1 run it without a flag.

**Keywords:** `using`, `await using`, `Symbol.dispose`, `DisposableStack`, `SuppressedError`

## What the finished page will answer

- In what order do two `using` declarations dispose, and does disposal run when the block throws?
- What do the `error` and `suppressed` fields of a `SuppressedError` hold when both the block and a dispose throw?
- What does `await using` wait for, and which symbol does it call?
- What do `DisposableStack`'s `use`, `defer` and `move` add for resources that have no `[Symbol.dispose]`?
- Why does tsc accept `using` under `--lib es2025` only when `@types/node` is loaded?
- What does `using x = null` do, and what happens with a value that has no dispose method?

## Examples it will need

- [ ] `explicit_resource_management_order_js.js` — open and dispose lines for two using declarations, in a block that ends normally and in one that throws
- [ ] `explicit_resource_management_suppressed_js.js` — the SuppressedError when both the block and a dispose throw, with its error and suppressed messages
- [ ] `explicit_resource_management_disposable_ts.ts` — a class implementing Disposable, type-checked by tsc and run by node, printing open and dispose

## See also

- [`finally`](../../12_Errors/finally/README.md) — the try...finally that using replaces
- [Well-known symbols](../well_known_symbols/README.md) — where Symbol.dispose sits among the other well-known symbols
- [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md) — async cleanup, the setting for await using
- [`WeakRef` and `FinalizationRegistry`](../../18_Memory_and_Garbage_Collection/weakref_and_finalizationregistry/README.md) — cleanup you cannot schedule, beside cleanup you can
- [Rust: `Drop`, and what RAII buys ↗](https://masiarek.github.io/rust-learning-library/12_Traits/drop_and_raii/index.html) — the Rust version: Drop runs at the end of scope, no keyword needed
- [Rust: Drop guards ↗](https://masiarek.github.io/rust-learning-library/12_Traits/drop_guards/index.html) — a value whose only job is cleanup on every exit
- [Concurrency: Scoped locking ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/synchronization/scoped_lock/index.html) — scoped cleanup applied to locks, across languages

## Sources to start from

- [MDN — using ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/using)
- [ECMA-262 — Let, Const, Using, and Await Using Declarations ↗](https://tc39.es/ecma262/#sec-let-and-const-declarations)
- [MDN — SuppressedError ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SuppressedError)
