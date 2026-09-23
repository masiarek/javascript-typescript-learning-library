# Recursion and the call stack — how deep Node lets you go

**Level:** 201 · for anyone whose recursion ended in `Maximum call stack size exceeded`

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In Node 25 a one-line recursive function overflows after about 12,000 calls with a catchable `RangeError`; `--stack-size` moves that limit, but past the operating system's stack the process dies with a segfault, and the spec's proper tail calls never shipped in V8.

**Keywords:** `Maximum call stack size exceeded`, `--stack-size`, `tail call`

## What the finished page will answer

- How many calls deep does a one-line recursive function get before the `RangeError`, and how do extra parameters and locals change the count?
- Can you catch the overflow and carry on, and what is left in `error.stack`?
- What does `--stack-size` change, and why does a value larger than the thread's real stack (8 MB here, `ulimit -s`) end in a segfault and exit status 139 instead of a `RangeError`?
- Why does a tail-recursive function in strict mode still overflow, when ECMA-262 has specified proper tail calls since ES2015?
- How do you rewrite a deep recursion as a loop with an explicit stack, and how deep can that version go?

## Examples it will need

- [ ] `recursion_depth_js.js` — the number of calls made before the RangeError for a function with no locals and one with ten, and the error's name and message
- [ ] `recursion_stack_size_sh.sh` — one program run with the default stack, with --stack-size doubled, and with a value larger than the thread's stack: the depth twice, then exit status 139
- [ ] `recursion_tail_call_js.js` — a tail-recursive countdown in strict mode that still overflows, beside the same countdown as a loop and as an explicit stack

## See also

- [Built-in error types](../../12_Errors/error_types/README.md) — the RangeError an overflow throws
- [Stack traces](../../12_Errors/stack_traces/README.md) — what error.stack keeps of a deep stack
- [Run to completion](../../13_Async_and_the_Event_Loop/run_to_completion/README.md) — the one call stack every function shares
- [Which features your Node has](../../01_Running_JavaScript/which_features_your_node_has/README.md) — proper tail calls: in the spec, missing from Node
- [Rust: Recursion and the size of the stack ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/recursion_and_the_stack/index.html) — how Rust ends an overflow: the process aborts, nothing to catch
- [Rust: The call stack: what a call does to memory ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/the_call_stack/index.html) — what one call does to stack memory, measured in Rust

## Sources to start from

- [MDN — InternalError: too much recursion ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
- [ECMA-262 — Tail Position Calls ↗](https://tc39.es/ecma262/#sec-tail-position-calls)
- [V8 — ES2015, ES2016, and beyond ↗](https://v8.dev/blog/modern-javascript)
