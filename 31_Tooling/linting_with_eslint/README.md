# ESLint — what a linter catches that `tsc` does not

**Level:** 201 · for readers whose code already passes tsc --strict

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `tsc --strict` exits 0 on a promise nobody awaits, an assignment inside `if`, a `map` callback that returns nothing and a variable never read — all type-correct — and ESLint rules such as `no-floating-promises` and `no-cond-assign` exist to reject exactly these.

**Keywords:** `ESLint`, `eslint.config.js`, `typescript-eslint`, `no-floating-promises`, `no-cond-assign`

## What the finished page will answer

- Which of a floating promise, `if (count = n)`, a `map` callback without `return` and an unused variable does `tsc --strict` report, and which does ESLint report?
- What happens at run time to the promise nobody awaited when it rejects?
- Why does `no-floating-promises` need type information, and what does `parserOptions.projectService` give it?
- Which of these rules does `js.configs.recommended` turn on, and which must be added by hand?
- What does `// eslint-disable-next-line` silence, and how does `reportUnusedDisableDirectives` find stale ones?

## Examples it will need

- [ ] `linting_what_tsc_accepts_sh.sh` — tsc --strict's exit status 0 on a file with a floating promise, an assignment in if, a map callback without return and an unused variable
- [ ] `linting_floating_promise_at_run_time_sh.sh` — the same floating promise run by node: the unhandled rejection on stderr and exit status 1
- [ ] `linting_eslint_reports_sh.sh` — ESLint's report on the same file with js.configs.recommended and typescript-eslint's recommendedTypeChecked, one line per rule

## See also

- [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md) — what the floating promise does when it rejects
- [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md) — the `==` that `eqeqeq` forbids
- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — why a `map` callback must return
- [Prettier](../formatting_with_prettier/README.md) — layout, which a linter should leave to the formatter
- [Rust: Strict clippy: denying the panic, and the arithmetic that comes with it ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/strict_lints/index.html) — clippy, Rust's linter, set to deny

## Sources to start from

- [ESLint — Getting Started ↗](https://eslint.org/docs/latest/use/getting-started)
- [typescript-eslint — no-floating-promises ↗](https://typescript-eslint.io/rules/no-floating-promises/)
- [ESLint — no-cond-assign ↗](https://eslint.org/docs/latest/rules/no-cond-assign)
