# Blocking the event loop — one slow loop stops every timer

**Level:** 201 · for anyone whose server stops answering under load

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** While one piece of synchronous code runs, no timer, I/O callback or request is handled: a 10 ms timer behind a 300 ms loop runs after 300 ms, and a 10 ms `setInterval` does not replay the thirty ticks it missed.

**Keywords:** `monitorEventLoopDelay`, `event loop delay`

## What the finished page will answer

- How late does a 10 ms timer run behind 300 ms of synchronous work, and how many ticks does a 10 ms `setInterval` deliver afterwards?
- Why does wrapping the slow loop in an `async` function or a promise not help?
- How long do everyday blocking calls take on a large input — `fs.readFileSync`, `JSON.parse` of a big string, a regex that backtracks, `crypto.pbkdf2Sync`?
- What does `monitorEventLoopDelay` from `node:perf_hooks` report for a 200 ms block?
- Which fix fits which work: splitting it into chunks with `setImmediate`, moving it to a worker thread, or a streaming parser?

## Examples it will need

- [ ] `blocking_the_event_loop_timers_js.js` — a 10 ms timer's delay and a 10 ms interval's tick count around 300 ms of synchronous work
- [ ] `blocking_the_event_loop_delay_js.js` — the worst delay `monitorEventLoopDelay` saw, rounded to 100 ms, for a 200 ms block
- [ ] `blocking_the_event_loop_chunked_js.js` — the same work split into chunks with `setImmediate`, with a timer now firing between chunks

## See also

- [Run to completion](../run_to_completion/README.md) — the rule a blocking loop runs into
- [Timers](../timers/README.md) — the timers that wait behind the loop
- [Worker threads](../../20_Workers_and_Parallelism/worker_threads/README.md) — moving the slow work to another thread
- [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md) — a server that stops answering while it computes
- [Concurrency: What does one blocking call do to every other task? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/blocking_the_event_loop/index.html) — one blocking call and every other task, in other runtimes
- [Regex: Catastrophic backtracking, with no backreference anywhere ↗](https://masiarek.github.io/regex-learning-library/05_Backtracking/catastrophic_backtracking/index.html) — a regex that can block the loop for seconds

## Sources to start from

- [Node.js — Don't Block the Event Loop (or the Worker Pool) ↗](https://nodejs.org/learn/asynchronous-work/dont-block-the-event-loop)
- [Node.js 24 — perf_hooks.monitorEventLoopDelay() ↗](https://nodejs.org/docs/latest-v24.x/api/perf_hooks.html#perf_hooksmonitoreventloopdelayoptions)
