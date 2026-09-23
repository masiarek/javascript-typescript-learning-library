# Memory leaks — the closure, the listener and the cache that never empties

**Level:** 301 · for anyone whose Node process grows until it is restarted

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In V8, closures made in one call share a scope object, so a callback that uses nothing keeps a million-element array alive because a sibling closure mentions it; and Node warns at the eleventh listener on one event with `MaxListenersExceededWarning`.

**Keywords:** `MaxListenersExceededWarning`, `setMaxListeners`, `memory leak`

## What the finished page will answer

- Why does a callback that uses nothing keep a large array alive when a sibling closure in the same function mentions it?
- What does Node print at the eleventh listener on one event, and what do `setMaxListeners` and `removeListener` change?
- How much does `heapUsed` grow after `gc()` for a `Map` cache with 100 000 entries, against a cache capped at 1 000?
- What does a forgotten `setInterval` keep alive, and which of `clearInterval` and `unref()` lets its closure be collected?
- How do you confirm a leak by comparing `heapUsed` after `gc()` across repeated runs of the suspect code?

## Examples it will need

- [ ] `memory_leaks_shared_closure_sh.sh` — whether a large array survives gc() when a sibling closure mentions it, and when none does
- [ ] `memory_leaks_listeners_sh.sh` — the MaxListenersExceededWarning at the eleventh listener, and none after setMaxListeners(20)
- [ ] `memory_leaks_unbounded_cache_sh.sh` — heapUsed after gc() for an unbounded Map cache and a capped one, after 100 000 inserts each

## See also

- [Closures](../../04_Variables_and_Scope/closures/README.md) — what a closure keeps, which can be more than it uses
- [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) — listeners, once and removeListener
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — the Map that becomes a cache
- [Measuring memory](../measuring_memory_in_node/README.md) — the numbers that confirm a leak
- [Go: A leaked goroutine never ends ↗](https://masiarek.github.io/go-learning-library/05_Context/a_leaked_goroutine_never_ends/index.html) — the Go version: a goroutine blocked for ever, holding its memory
- [Concurrency: Leaked tasks ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/hazards/task_leak/index.html) — leaked tasks, the concurrent form of a memory leak

## Sources to start from

- [Node.js 24 — events.defaultMaxListeners ↗](https://nodejs.org/docs/latest-v24.x/api/events.html#eventsdefaultmaxlisteners)
- [MDN — Memory management ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management)
- [Node.js Learn — Memory ↗](https://nodejs.org/learn/diagnostics/memory)
