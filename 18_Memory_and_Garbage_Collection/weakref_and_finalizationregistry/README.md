# `WeakRef` and `FinalizationRegistry` — observing collection, and why not to rely on it

**Level:** 301 · for anyone who wants to know when an object is collected

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `FinalizationRegistry` callback is not a destructor: drop the object and let the program end, and the callback never runs; even after a forced `gc()` it runs later, in a task of its own, after the program's last line.

**Keywords:** `WeakRef`, `FinalizationRegistry`, `deref`

## What the finished page will answer

- Does a `FinalizationRegistry` callback run if the program ends before a collection?
- After `gc()` returns, when does the callback run: on the next line, or after the current code finishes?
- Why does `deref()` keep returning the object for the rest of the current job, even after the last strong reference is gone?
- What does `register` refuse (holdings that are the target itself), and what does `unregister` need?
- How does a cache of `WeakRef` values behave across a `gc()`, and why must it still work if a callback never runs?

## Examples it will need

- [ ] `weakref_finalization_timing_sh.sh` — a cleanup callback that never runs without --expose-gc, and runs after the program's last line with it
- [ ] `weakref_deref_same_job_sh.sh` — deref() right after gc() in the same job, and again in the next task

## See also

- [Reachability](../reachability/README.md) — what makes an object collectable in the first place
- [`WeakMap` and `WeakSet`](../../08_Arrays_and_Collections/weakmap_and_weakset/README.md) — weak keys, the tool to reach for first
- [`using` and `Symbol.dispose`](../../17_Metaprogramming/explicit_resource_management/README.md) — cleanup that runs at a known point instead
- [Microtasks and tasks](../../13_Async_and_the_Event_Loop/microtasks_and_tasks/README.md) — the queue a cleanup callback waits in
- [Rust: `Drop`, and what RAII buys ↗](https://masiarek.github.io/rust-learning-library/12_Traits/drop_and_raii/index.html) — a destructor that runs at a known point, unlike a finalizer

## Sources to start from

- [MDN — WeakRef ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
- [MDN — FinalizationRegistry ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
- [ECMA-262 — Processing Model of WeakRef and FinalizationRegistry Targets ↗](https://tc39.es/ecma262/#sec-weakref-processing-model)
