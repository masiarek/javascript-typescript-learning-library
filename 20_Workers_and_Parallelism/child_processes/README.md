# Child processes — `spawn`, `exec` and exit statuses

**Level:** 201 · for readers who run shell commands from scripts

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `exec` hands its string to `/bin/sh`, so `$((6 * 7))` becomes `42`; `spawn` runs the program directly and passes the text through untouched; and a child killed by a signal reports `code` `null` and `signal` `'SIGTERM'`, where a shell would say 143.

**Keywords:** `child_process`, `spawn`, `exec`, `execFile`, `spawnSync`

## What the finished page will answer

- What does `echo $0 $((6 * 7))` print through `exec`, and what through `spawn`?
- What `code` and `signal` does the `exit` event report for a child that exits 3, one killed with `SIGTERM` and one with `SIGKILL`, and what does the shell's `$?` say for each?
- What does `exec` do when the child prints 2 MB, and how many bytes did it keep?
- Why is passing user input to `exec` a shell injection, and how do `execFile` and `spawn` avoid it?
- When does `exit` fire before `close`, and can stdout still hold data after `exit`?

## Examples it will need

- [ ] `child_processes_exec_versus_spawn_js.js` — the same `$0` and `$((6 * 7))` through `exec` and through `spawn`
- [ ] `child_processes_exit_and_signal_sh.sh` — `code` and `signal` for a child that exits 3, one killed by SIGTERM and one by SIGKILL, beside the shell's `$?` for the same children
- [ ] `child_processes_maxbuffer_js.js` — the error code `exec` gives when a child prints 2 MB, and the length of the output it kept

## See also

- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — the exit code, seen from inside the child
- [stdin, stdout and pipes](../../19_Node_Runtime/stdin_stdout_and_pipes/README.md) — the pipes between parent and child
- [Worker threads](../worker_threads/README.md) — a thread instead of a process
- [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) — `exit`, `close` and `error` arrive as events
- [Concurrency: How does a parent learn how its child ended? ↗](https://masiarek.github.io/concurrency-learning-library/08_Processes/a_child_process_and_its_exit_status/index.html) — how a parent learns how its child ended, across languages
- [Linux: The signals you cannot catch ↗](https://masiarek.github.io/linux-learning-library/11_Signals/signals_you_cannot_catch/index.html) — the signals no handler can catch
- [Concurrency: When are processes the better workers? ↗](https://masiarek.github.io/concurrency-learning-library/08_Processes/multiprocessing_instead_of_threads/index.html) — when processes are the better workers

## Sources to start from

- [Node.js 24 — child_process.exec ↗](https://nodejs.org/docs/latest-v24.x/api/child_process.html#child_processexeccommand-options-callback)
- [Node.js 24 — child_process.spawn ↗](https://nodejs.org/docs/latest-v24.x/api/child_process.html#child_processspawncommand-args-options)
- [Node.js 24 — Event: 'exit' ↗](https://nodejs.org/docs/latest-v24.x/api/child_process.html#event-exit)
