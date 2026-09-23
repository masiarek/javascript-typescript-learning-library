# Measuring memory — `process.memoryUsage`, heap snapshots and `--expose-gc`

**Level:** 301 · for anyone who needs a number before and after a change

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `heapUsed` counts only the JavaScript heap: allocating a 64 MiB `Buffer` changes it by under 1 MiB while `arrayBuffers` grows by 64 MiB, and `globalThis.gc` is `undefined` unless Node starts with `--expose-gc`.

**Keywords:** `process.memoryUsage`, `--expose-gc`, `v8.writeHeapSnapshot`, `--max-old-space-size`, `heapUsed`

## What the finished page will answer

- What do `rss`, `heapTotal`, `heapUsed`, `external` and `arrayBuffers` measure, and which grow for a 64 MiB `Buffer` and for a million-element array?
- What is `globalThis.gc` without and with `--expose-gc`, and why call it before each reading?
- How do you write a heap snapshot with `v8.writeHeapSnapshot()` or `--heapsnapshot-signal`, and what file appears?
- What does Node print, and with what exit status, when a loop fills a heap limited by `--max-old-space-size=64`?
- What does `v8.getHeapStatistics().heap_size_limit` report by default on this machine?

## Examples it will need

- [ ] `measuring_memory_usage_fields_sh.sh` — each process.memoryUsage field before and after a 64 MiB Buffer and a million-element array, in MiB
- [ ] `measuring_memory_heap_snapshot_sh.sh` — the name pattern and rough size of the file v8.writeHeapSnapshot writes
- [ ] `measuring_memory_out_of_memory_sh.sh` — the fatal heap-limit error and the exit status under --max-old-space-size=64

## See also

- [Memory leaks](../memory_leaks/README.md) — the leaks these numbers help find
- [`Buffer`](../../19_Node_Runtime/buffers/README.md) — why Buffer memory is counted outside the JavaScript heap
- [Debugging Node](../../31_Tooling/debugging_node/README.md) — reading a heap snapshot in DevTools
- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — the ArrayBuffer memory that heapUsed leaves out
- [Rust: The global allocator ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/the_global_allocator/index.html) — counting heap bytes in Rust with a replacement allocator
- [Rust: Stack and heap ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/stack_and_heap/index.html) — where Rust puts values, with no collector at all

## Sources to start from

- [Node.js 24 — process.memoryUsage() ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processmemoryusage)
- [Node.js 24 — v8.writeHeapSnapshot() ↗](https://nodejs.org/docs/latest-v24.x/api/v8.html#v8writeheapsnapshotfilenameoptions)
- [Node.js 24 — CLI: --expose-gc ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#--expose-gc)
