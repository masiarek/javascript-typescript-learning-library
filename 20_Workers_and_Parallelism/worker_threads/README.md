# Worker threads — real parallelism in Node

**Level:** 201 · for readers who have hit a CPU-bound loop in Node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `Worker` is a second agent with its own thread, event loop and globals — a worker that sets `globalThis.counter` leaves the main thread's copy at 0 — so four 500 ms loops on four workers finish in about the time of one.

**Keywords:** `worker_threads`, `Worker`, `isMainThread`, `workerData`, `parentPort`

## What the finished page will answer

- What are `threadId` and `isMainThread` in the main thread and in a worker, and does a global set in one appear in the other?
- How long do four 500 ms loops take on the main thread, and on four workers, beside `os.availableParallelism()`?
- How long does a worker take to start and send its first message, and how much does `rss` grow per worker?
- What does the main thread receive when a worker throws, and what exit code does the `exit` event report?
- Does a module imported by both threads run once or twice?

## Examples it will need

- [ ] `worker_threads_own_globals_js.js` — `threadId`, `isMainThread` and a global counter in the main thread and in a worker that changes it
- [ ] `worker_threads_speedup_js.js` — wall time for four CPU-bound jobs on the main thread and on four workers, beside `os.availableParallelism()`
- [ ] `worker_threads_error_and_exit_js.js` — the `error` and `exit` events the main thread receives when a worker throws a RangeError

## See also

- [One thread per agent](../one_thread_per_agent/README.md) — why one agent never runs in parallel with itself
- [`postMessage`](../message_passing_and_structured_clone/README.md) — how data reaches a worker and comes back
- [Child processes](../child_processes/README.md) — a process instead of a thread
- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — moving the slow loop off the main thread
- [Concurrency: How much faster is real work on eight threads? ↗](https://masiarek.github.io/concurrency-learning-library/07_Parallelism/cpu_bound_speedup/index.html) — real speedup on eight threads, measured
- [Concurrency: How many workers should a pool have? ↗](https://masiarek.github.io/concurrency-learning-library/07_Parallelism/how_many_workers/index.html) — how many workers a pool should have
- [Rust: Spawning a thread ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/spawning_a_thread/index.html) — spawning a thread in Rust

## Sources to start from

- [Node.js 24 — worker_threads ↗](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html)
- [Node.js 24 — new Worker ↗](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html#new-workerfilename-options)
