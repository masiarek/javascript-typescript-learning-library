# 18 — Memory and garbage collection

**One line:** Node frees an object when nothing can reach it any more, not when you are done with it, so every leak is a reference you forgot, and collection is something a program can observe but never schedule.

The chapter starts with reachability, the rule the collector follows, shown with a `WeakRef` and a forced `gc()`. It then turns the rule around to explain leaks: a closure's shared scope, listeners that pile up, a cache that never empties. `WeakRef` and `FinalizationRegistry` come next, with the reasons not to build on them. The last page measures memory with `process.memoryUsage`, heap snapshots and `--expose-gc`, the flag every probe in this chapter uses.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Reachability](reachability/README.md) | 201 | Node frees what the program can no longer reach from its roots, cycles included: two objects that point at each other survive `gc()` while one outside reference remains, and a `WeakRef` to one reads `undefined` after the next `gc()` once it is gone. | stub |
| [Memory leaks](memory_leaks/README.md) | 301 | In V8, closures made in one call share a scope object, so a callback that uses nothing keeps a million-element array alive because a sibling closure mentions it; and Node warns at the eleventh listener on one event with `MaxListenersExceededWarning`. | stub |
| [`WeakRef` and `FinalizationRegistry`](weakref_and_finalizationregistry/README.md) | 301 | A `FinalizationRegistry` callback is not a destructor: drop the object and let the program end, and the callback never runs; even after a forced `gc()` it runs later, in a task of its own, after the program's last line. | stub |
| [Measuring memory](measuring_memory_in_node/README.md) | 301 | `heapUsed` counts only the JavaScript heap: allocating a 64 MiB `Buffer` changes it by under 1 MiB while `arrayBuffers` grows by 64 MiB, and `globalThis.gc` is `undefined` unless Node starts with `--expose-gc`. | stub |
<!-- /lessons -->

## Boundaries

`WeakMap` and `WeakSet` are covered with the other collections, and `Buffer` memory with the Node runtime.
