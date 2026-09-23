# Reachability — an object lives while something can still reach it

**Level:** 201 · for anyone who wonders when JavaScript frees an object

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node frees what the program can no longer reach from its roots, cycles included: two objects that point at each other survive `gc()` while one outside reference remains, and a `WeakRef` to one reads `undefined` after the next `gc()` once it is gone.

**Keywords:** `garbage collection`, `reachability`, `mark-and-sweep`

## What the finished page will answer

- Does a cycle of two objects keep itself alive once nothing outside points at it?
- What counts as a root in Node: a global, a local on the stack, a closure, a pending timer, a pending promise?
- Why must the probe wait for a timer before `gc()` for the `WeakRef` to read `undefined`?
- How does the same cycle fare under reference counting, in Python with and without `gc.collect()`?

## Examples it will need

- [ ] `reachability_cycle_sh.sh` — a WeakRef to a two-object cycle before and after its last outside reference is dropped, with gc() between
- [ ] `reachability_roots_sh.sh` — objects kept alive by a global, a closure, a pending timer and a pending promise, and one kept by nothing
- [ ] `reachability_refcount_py.py` — Python's reference counts on a cycle, and gc.collect() freeing it

## See also

- [Values and references](../../02_Values_and_Types/values_and_references/README.md) — the references that decide what is reachable
- [Closures](../../04_Variables_and_Scope/closures/README.md) — a closure is a reference that keeps variables alive
- [`WeakRef` and `FinalizationRegistry`](../weakref_and_finalizationregistry/README.md) — the tools that let a program watch collection happen
- [`WeakMap` and `WeakSet`](../../08_Arrays_and_Collections/weakmap_and_weakset/README.md) — keys that do not count as reaching an object
- [Concurrency: Object lifetime ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/safety_in_languages/object_lifetime/index.html) — who guarantees an object's lifetime, language by language
- [Rust: `Rc`: the clone that copies a pointer ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/reference_counting/index.html) — counting owners instead of tracing from roots: Rust's Rc

## Sources to start from

- [MDN — Memory management: mark-and-sweep algorithm ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management#mark-and-sweep_algorithm)
- [ECMA-262 — Liveness ↗](https://tc39.es/ecma262/#sec-liveness)
- [v8.dev — Trash talk: the Orinoco garbage collector ↗](https://v8.dev/blog/trash-talk)
