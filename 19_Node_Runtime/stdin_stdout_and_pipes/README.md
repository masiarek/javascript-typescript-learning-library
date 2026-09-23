# stdin, stdout and pipes — reading lines, and output that is buffered

**Level:** 201 · for readers who pipe one program into another

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** When stdout is a pipe, `process.stdout.isTTY` is `undefined`, not `false`, and writes are asynchronous: `process.exit()` right after writing 4 MiB lets only a fraction through (64 to 128 KiB in these runs), while setting `process.exitCode` delivers all of it.

**Keywords:** `process.stdout`, `process.stdin`, `readline`, `isTTY`

## What the finished page will answer

- What is `process.stdout.isTTY` in a terminal, in a pipe and when redirected to a file, and why test it with `Boolean()`?
- How many bytes of a 4 MiB write reach `wc -c` when the script calls `process.exit()` next, and how many when it sets `process.exitCode`?
- Which line endings does `readline` split on — `\n`, `\r\n`, a lone `\r` — and does it deliver a last line that has no newline?
- How much output is still queued in `process.stdout.writableLength` after a tight `console.log` loop into a pipe, and how much into a file?
- How do you read all of stdin at once, and what does `for await (const chunk of process.stdin)` give you?

## Examples it will need

- [ ] `stdin_stdout_istty_sh.sh` — `process.stdout.isTTY` and `Boolean(process.stdout.isTTY)` when stdout is a pipe and when it is a file
- [ ] `stdin_stdout_exit_truncates_sh.sh` — the KiB reaching `wc -c` after a 4 MiB write followed by `process.exit()`, then by `process.exitCode`, looped to show the spread
- [ ] `stdin_lines_with_readline_sh.sh` — the lines `readline` yields for input ending in `\n`, `\r\n`, a lone `\r`, and no final newline

## See also

- [`process`](../process_argv_env_and_exit_codes/README.md) — `process.exitCode`, the exit that waits for output
- [Streams](../streams_and_backpressure/README.md) — stdout is a writable stream, and a pipe is slow
- [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md) — `for await` over the lines of `readline`
- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — a loop that never yields never flushes a pipe
- [Python: Standard in, standard out, and pipes ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/stdin_stdout_and_pipes/index.html) — the same pipes from Python
- [Linux: A program knows it is piped ↗](https://masiarek.github.io/linux-learning-library/01_Pipelines/a_program_knows_it_is_piped/index.html) — `ls` asking the same question as `isTTY`
- [Rust: Broken pipe ↗](https://masiarek.github.io/rust-learning-library/02_Errors/broken_pipe/index.html) — what a closed pipe does to a Rust program

## Sources to start from

- [Node.js 24 — A note on process I/O ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#a-note-on-process-io)
- [Node.js 24 — readline: read a file line by line ↗](https://nodejs.org/docs/latest-v24.x/api/readline.html#example-read-file-stream-line-by-line)
