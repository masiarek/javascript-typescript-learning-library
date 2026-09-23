# `process` — arguments, environment and exit codes

**Level:** 101 · for anyone who has run a script with node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A script's first argument is `process.argv[2]`, after the Node binary and the script path; every `process.env` value is a string, so `process.env.DEBUG = false` stores `"false"`; and `process.exitCode = 3` exits with 3 only after pending work finishes.

**Keywords:** `process.argv`, `process.env`, `process.exitCode`, `process.exit`, `--env-file`

## What the finished page will answer

- What are `process.argv[0]` and `process.argv[1]` for `node app.mjs a b`, and why does `node -e` put the first argument at index 1 instead?
- What does `process.env` hold after assigning `8080`, `false` and `undefined` to it, and why is `if (process.env.DEBUG)` true for the string `"false"`?
- When `node --env-file=.env` and the shell both set a variable, which value does the script see?
- What exit status does Node give after an uncaught `throw`, after `process.exitCode = 3`, and after `process.exit(3)` with a timer still pending?
- Why does `process.exit()` skip timers and pending output that `process.exitCode` lets finish?

## Examples it will need

- [ ] `process_argv_positions_sh.sh` — `process.argv` for `node file.mjs a b` and for `node -e` with the same arguments, then `process.argv0` beside `process.execPath`
- [ ] `process_env_strings_sh.sh` — the type and value of `process.env` entries after assigning 8080, false and undefined, then one variable set both by `--env-file` and by the shell, and which wins
- [ ] `process_exit_codes_sh.sh` — the exit status after an uncaught throw, after `process.exitCode = 3` with a pending timer, and after `process.exit(3)` with the same timer

## See also

- [Running a file with Node](../../01_Running_JavaScript/running_a_file_with_node/README.md) — `-e`, `-p` and the other ways to start node
- [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md) — the exit status an uncaught exception leaves behind
- [stdin, stdout and pipes](../stdin_stdout_and_pipes/README.md) — why `process.exit()` can cut pending output short
- [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md) — the same exit status, seen from the parent
- [Rust: Arguments and the environment ↗](https://masiarek.github.io/rust-learning-library/03_Command_Line/arguments_and_environment/index.html) — arguments and the environment in Rust
- [Rust: Standard error, and exit status ↗](https://masiarek.github.io/rust-learning-library/02_Errors/stderr_and_exit_status/index.html) — standard error and the exit status in Rust
- [Linux: grep exits 0, 1 or 2 ↗](https://masiarek.github.io/linux-learning-library/04_grep/grep_exit_status_0_1_2/index.html) — a tool whose exit status means three different things

## Sources to start from

- [Node.js 24 — process.argv ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processargv)
- [Node.js 24 — process.env ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processenv)
- [Node.js 24 — process.exitCode ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processexitcode_1)
