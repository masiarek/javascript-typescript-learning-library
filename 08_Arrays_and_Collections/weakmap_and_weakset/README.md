# `WeakMap` and `WeakSet` — keys that do not keep objects alive

**Level:** 301 · once reachability and garbage collection are clear

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An object used as a `Map` key stays alive as long as the `Map` does; used as a `WeakMap` key, it is collected once nothing else refers to it, which is why a `WeakMap` has no `size`, no `keys()` and cannot be iterated.

**Keywords:** `WeakMap`, `WeakSet`

## What the finished page will answer

- After the last other reference is dropped and `gc()` runs, is an object used as a `Map` key still alive, and one used as a `WeakMap` key?
- Why does a `WeakMap` have no `size`, no `keys()` and no `Symbol.iterator`?
- Which values can be `WeakMap` keys and `WeakSet` members: objects, `Symbol("x")`, `Symbol.for("x")`, strings?
- How does a `WeakMap` attach data to objects you do not own, and how does that compare with a `#private` field?
- What does `tsc` say about `new WeakMap<string, number>()`?

## Examples it will need

- [ ] `weakmap_and_weakset_collected_sh.sh` — a `node --expose-gc` run in which a key held by a `Map` survives `gc()` and a key held only by a `WeakMap` is gone, watched through `WeakRef`
- [ ] `weakmap_and_weakset_keys_js.js` — which values `WeakMap.prototype.set` and `WeakSet.prototype.add` accept, with the `TypeError` for a string and for a registered symbol
- [ ] `weakmap_and_weakset_key_tserror.ts` — tsc's TS2344 diagnostic: `string` does not satisfy the `WeakKey` constraint

## See also

- [`Map` and `Set`](../map_and_set/README.md) — the strong version, which keeps every key alive
- [Reachability](../../18_Memory_and_Garbage_Collection/reachability/README.md) — which references keep an object alive, and which do not
- [`WeakRef` and `FinalizationRegistry`](../../18_Memory_and_Garbage_Collection/weakref_and_finalizationregistry/README.md) — the `WeakRef` the probe uses to watch a key disappear
- [Memory leaks](../../18_Memory_and_Garbage_Collection/memory_leaks/README.md) — the cache that leaks because it should have been a `WeakMap`
- [Private fields](../../07_Prototypes_and_Classes/private_fields/README.md) — `#name`, which replaced the per-class `WeakMap` for private data
- [Rust: `Rc`: the clone that copies a pointer ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/reference_counting/index.html) — in Rust, `Weak` also points at a value without keeping it alive

## Sources to start from

- [MDN — WeakMap ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [ECMA-262 — WeakMap Objects ↗](https://tc39.es/ecma262/#sec-weakmap-objects)
- [Node.js 24 — Command-line options: --expose-gc ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#--expose-gc)
