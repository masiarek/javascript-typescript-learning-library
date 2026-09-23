# The built-in test runner — `node:test` and `node --test`

**Level:** 201 · for readers who have written a test in any language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `node --test` needs no package: it finds `*.test.mjs`, `*.test.ts` and anything under `test/`, runs each file in its own child process, and exits with status 1 when one test fails — here `assert.equal(0.1 + 0.2, 0.3)`.

**Keywords:** `node:test`, `node --test`, `node:assert`, `mock.timers`

## What the finished page will answer

- Which files does `node --test` pick up in a folder of test and non-test files, and does it include `.ts` files?
- What exit status does the run give when one test fails, and what does the TAP summary count?
- What does `assert.equal` report for `0.1 + 0.2` against `0.3`, and how does `assert.deepEqual` differ from `assert.equal` on two objects?
- Do two test files share a `process.pid`, and what changes under `--test-isolation=none`?
- How does `mock.timers` make a test that waits on a one-hour `setTimeout` finish at once?

## Examples it will need

- [ ] `test_runner_discovery_sh.sh` — which files `node --test` runs in a folder mixing test files, a `test/` folder and a helper, the TAP ok and not ok lines, and the exit status
- [ ] `test_runner_process_per_file_sh.sh` — the `process.pid` two test files print under the default isolation and under `--test-isolation=none`
- [ ] `test_runner_mock_timers_sh.sh` — a test around a one-hour `setTimeout` finished by `mock.timers.tick`, its TAP line, and the run's wall time

## See also

- [Every number is a double](../../10_Numbers_and_Math/every_number_is_a_double/README.md) — why `0.1 + 0.2` fails `assert.equal`
- [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md) — each test file runs as a child process
- [Timers](../../13_Async_and_the_Event_Loop/timers/README.md) — the timers `mock.timers` stands in for
- [`npm run` and `npx`](../../31_Tooling/npm_scripts_and_npx/README.md) — `npm test` running `node --test`
- [Rust: How `cargo test` runs your tests ↗](https://masiarek.github.io/rust-learning-library/28_Testing/how_cargo_test_runs/index.html) — how `cargo test` finds and runs tests
- [Rust: cargo-nextest: one process per test, and what that actually buys ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/nextest/index.html) — one process per test, beside Node's one per file
- [Concurrency: How does a test wait an hour in a millisecond? ↗](https://masiarek.github.io/concurrency-learning-library/09_Testing_and_Tools/virtual_time_in_tests/index.html) — virtual time in tests, across languages

## Sources to start from

- [Node.js 24 — Running tests from the command line ↗](https://nodejs.org/docs/latest-v24.x/api/test.html#running-tests-from-the-command-line)
- [Node.js 24 — Test runner execution model ↗](https://nodejs.org/docs/latest-v24.x/api/test.html#test-runner-execution-model)
- [Node.js 24 — Class: MockTimers ↗](https://nodejs.org/docs/latest-v24.x/api/test.html#class-mocktimers)
