# One thread per agent — concurrency without parallelism

**Level:** 101 · for anyone who has used async and await

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Inside one agent, JavaScript never runs two things at once: two `async` tasks interleave only at `await` (`a1 b1 a2 b2 a3 b3`), and two 200 ms loops started together under `Promise.all` still take 400 ms.

**Keywords:** `agent`, `agent cluster`, `os.availableParallelism`

## What the finished page will answer

- In what order do two `async` tasks log when each awaits between steps, and in what order without the `await`?
- How long do two 200 ms CPU-bound loops take one after the other, and how long under `Promise.all`?
- What does ECMA-262 call an agent, and when may two agents share one executing thread?
- What does `Atomics.wait` return on Node's main thread, and why does a browser's main thread throw instead?
- How many agents does `os.availableParallelism()` suggest running at once on this machine?

## Examples it will need

- [ ] `one_thread_interleaving_at_await_js.js` — the log order of two async tasks with an `await` between steps and without one
- [ ] `one_thread_cpu_bound_promise_all_js.js` — elapsed time for two 200 ms busy loops run in sequence and under `Promise.all`
- [ ] `one_thread_atomics_wait_on_main_js.js` — what `Atomics.wait` with a 10 ms timeout returns on Node's main thread

## See also

- [Run to completion](../../13_Async_and_the_Event_Loop/run_to_completion/README.md) — why nothing interrupts a running function
- [Sequential or parallel](../../13_Async_and_the_Event_Loop/sequential_or_parallel_awaits/README.md) — `Promise.all` overlaps waiting, not computing
- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — what one busy loop does to every timer
- [Worker threads](../worker_threads/README.md) — the second agent that brings parallelism
- [Rust: Concurrency or parallelism ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/concurrency_or_parallelism/index.html) — the same distinction, drawn in Rust
- [Concurrency: Why do Python threads take turns? ↗](https://masiarek.github.io/concurrency-learning-library/07_Parallelism/the_gil_and_free_threaded_python/index.html) — why Python threads take turns
- [Concurrency: Who runs an async task, and on how many threads? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/who_runs_the_tasks/index.html) — who runs async tasks, and on how many threads

## Sources to start from

- [ECMA-262 — Agents ↗](https://tc39.es/ecma262/#sec-agents)
- [ECMA-262 — Agent Clusters ↗](https://tc39.es/ecma262/#sec-agent-clusters)
- [Node.js 24 — os.availableParallelism ↗](https://nodejs.org/docs/latest-v24.x/api/os.html#osavailableparallelism)
