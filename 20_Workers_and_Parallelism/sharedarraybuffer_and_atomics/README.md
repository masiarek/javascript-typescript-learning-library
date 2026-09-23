# `SharedArrayBuffer` and `Atomics` — shared memory, and the data race that comes with it

**Level:** 301 · for readers who have met a data race in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Two workers each doing `shared[0]++` ten million times on one `SharedArrayBuffer` lose updates — the total falls short of 20,000,000 — because `++` is a read, an add and a write; `Atomics.add` does all three as one step and lands exactly.

**Keywords:** `SharedArrayBuffer`, `Atomics`, `Atomics.add`, `Atomics.wait`, `Atomics.notify`

## What the finished page will answer

- What totals do two workers reach with `shared[0]++` and with `Atomics.add`, over twenty runs?
- Why can a run without a start gate come out exactly right, and how does an `Atomics.wait` gate make the race show up?
- What does `Atomics.wait` return when woken by `Atomics.notify`, when the value already differs, and when it times out?
- Why does a web page need cross-origin isolation before it can use a `SharedArrayBuffer`, when Node needs nothing?
- What does `Atomics.compareExchange` return, and how does a retry loop build a lock from it?

## Examples it will need

- [ ] `sharedarraybuffer_lost_updates_js.js` — totals after two gated workers each add 10 million with `++` and with `Atomics.add`, over 20 runs
- [ ] `sharedarraybuffer_wait_and_notify_js.js` — the strings `Atomics.wait` returns for a notify, a value mismatch and a timeout

## See also

- [`postMessage`](../message_passing_and_structured_clone/README.md) — the copying default that shared memory opts out of
- [Worker threads](../worker_threads/README.md) — the workers that share the buffer
- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — the `Int32Array` view that `Atomics` works on
- [One thread per agent](../one_thread_per_agent/README.md) — why Node's main thread may block and a browser's may not
- [Concurrency: Is `total += n` safe on two threads? ↗](https://masiarek.github.io/concurrency-learning-library/02_Shared_State/the_lost_update/index.html) — the same lost update in other languages
- [Go: Atomic counters ↗](https://masiarek.github.io/go-learning-library/04_Sync/atomic_counters/index.html) — atomic counters in Go
- [Concurrency: Data race ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/hazards/data_race/index.html) — what a data race is

## Sources to start from

- [ECMA-262 — The Atomics Object ↗](https://tc39.es/ecma262/#sec-atomics-object)
- [ECMA-262 — Memory Model ↗](https://tc39.es/ecma262/#sec-memory-model)
- [MDN — SharedArrayBuffer: security requirements ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements)
