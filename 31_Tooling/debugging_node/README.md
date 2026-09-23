# Debugging Node — `--inspect`, breakpoints and DevTools

**Level:** 201 · for readers who have debugged with console.log alone

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `debugger;` is a breakpoint only while a debugger is attached — otherwise Node runs straight past it; `node --inspect` opens one on `ws://127.0.0.1:9229` and keeps running, and `--inspect-brk` waits there before the first line.

**Keywords:** `--inspect`, `--inspect-brk`, `debugger`, `node inspect`, `chrome://inspect`

## What the finished page will answer

- What does a `debugger;` statement do with no debugger attached, and what under `node inspect`?
- What does `--inspect` print, on which address and port, and why is `--inspect=0.0.0.0` dangerous?
- Where does `--inspect-brk` stop, and what does the program do until a debugger attaches?
- How do you step through a script with `node inspect` alone: `cont`, `next`, `exec sum`?
- How do VS Code and Zed attach to a process started with `--inspect`, and what does `chrome://inspect` list?

## Examples it will need

- [ ] `debugging_node_debugger_statement_sh.sh` — a `debugger;` statement run without a debugger, the `--inspect` banner with its UUID masked, and `--inspect-brk` waiting until a 3-second timeout
- [ ] `debugging_node_inspect_cli_sh.sh` — a `node inspect` session fed from stdin: the stop at `debugger;`, `exec sum` printing 0.30000000000000004, then the program's own output

## See also

- [Stack traces](../../12_Errors/stack_traces/README.md) — the call stack a breakpoint shows live
- [Editor setup](../editor_setup/README.md) — the editors that attach to port 9229
- [Measuring memory](../../18_Memory_and_Garbage_Collection/measuring_memory_in_node/README.md) — heap snapshots through the same inspector
- [Running a file with Node](../../01_Running_JavaScript/running_a_file_with_node/README.md) — the other flags `node` takes
- [C: What the debugger records ↗](https://masiarek.github.io/c-learning-library/04_Debugging/what_the_debugger_records/index.html) — what a native debugger records, in C

## Sources to start from

- [Node.js 24 — Debugger ↗](https://nodejs.org/docs/latest-v24.x/api/debugger.html)
- [Node.js 24 — --inspect ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#--inspecthostport)
- [Node.js — Debugging Node.js ↗](https://nodejs.org/learn/getting-started/debugging)
