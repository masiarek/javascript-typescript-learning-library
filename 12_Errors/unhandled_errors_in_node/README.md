# Unhandled errors — what Node does with an uncaught exception or a rejected promise

**Level:** 201 · for anyone whose Node process died of an error nobody caught

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An uncaught exception and an unhandled rejection both end Node with exit status 1, and a rejection is unhandled if no handler is attached by the time the microtask queue empties — a `.catch` added one timer later is already too late.

**Keywords:** `uncaughtException`, `unhandledRejection`, `--unhandled-rejections`

## What the finished page will answer

- What does Node print, and with which exit status, for an uncaught exception and for an unhandled rejection?
- What do the `--unhandled-rejections` modes `throw`, `strict`, `warn`, `warn-with-error-code` and `none` change about the output and the exit status?
- Why is a `.catch` attached in a microtask in time, while one attached in a `setTimeout(0)` callback is too late?
- What happens to the process after a `process.on("uncaughtException")` handler runs, and why do the Node docs say not to resume normal work?
- Which exit codes does Node use besides 1, such as 13 for a top-level `await` that never settles?

## Examples it will need

- [ ] `unhandled_errors_exit_status_sh.sh` — exit statuses for an uncaught exception, an unhandled rejection, and a rejection handled in a microtask or one timer later
- [ ] `unhandled_errors_modes_sh.sh` — stdout and exit status for the same rejection under each `--unhandled-rejections` mode
- [ ] `unhandled_errors_process_handlers_js.js` — what `unhandledRejection` and `uncaughtException` handlers receive, and that the process keeps running

## See also

- [Promises](../../13_Async_and_the_Event_Loop/promises/README.md) — how a rejection comes about
- [Microtasks and tasks](../../13_Async_and_the_Event_Loop/microtasks_and_tasks/README.md) — the queue that must drain before a rejection counts
- [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) — the `error` event that crashes the same way
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — exit status 1 among Node's other exit codes
- [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md) — a `for await` loop that leaves a rejection unhandled
- [Concurrency: What happens to a task that is started and never awaited? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/a_task_nobody_awaits/index.html) — a task started and never awaited, in other runtimes
- [Concurrency: What does a failure on a thread do when nobody is waiting for it? ↗](https://masiarek.github.io/concurrency-learning-library/01_Threads/a_failure_nobody_is_waiting_for/index.html) — a failure on a thread nobody waits for
- [Go: A panic ends the whole program ↗](https://masiarek.github.io/go-learning-library/01_Goroutines/a_panic_ends_the_whole_program/index.html) — an unrecovered panic in Go also ends the whole program

## Sources to start from

- [Node.js 24 — process: Event 'unhandledRejection' ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#event-unhandledrejection)
- [Node.js 24 — CLI: --unhandled-rejections ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#--unhandled-rejectionsmode)
- [ECMA-262 — HostPromiseRejectionTracker ↗](https://tc39.es/ecma262/#sec-host-promise-rejection-tracker)
