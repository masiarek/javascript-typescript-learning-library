# Type predicates — `x is T` and `asserts x is T`

**Level:** 201 · for TypeScript users writing their own type checks

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The checker takes a type predicate on trust: `isString(value): value is string` that returns `true` for `42` compiles cleanly, so `input.toUpperCase()` passes the check and throws a TypeError at run time.

**Keywords:** `type predicate`, `is`, `asserts`

## What the finished page will answer

- Why does a predicate whose body returns `true` for `42` compile, and what happens when the narrowed value is used?
- What does `[1, null, 2].filter((n) => n !== null)` infer, and why does `filter((n) => !!n)` infer no predicate?
- How does `asserts value is number` narrow the code after the call, and what does the function throw when the value is not a number?
- Why does calling an assertion function stored in an unannotated `const` fail with TS2775?
- What does the false branch of `if (isString(x))` narrow `x` to, and how can a predicate that is too narrow mislead that branch?

## Examples it will need

- [ ] `type_predicates_trusted_sh.sh` — a clean tsc check of a wrong predicate, then the TypeError the program throws
- [ ] `type_predicates_inferred_tserror.ts` — the `number[]` type tsc infers from a filter callback, and the `(number | null)[]` it keeps for `!!n`, printed through deliberate TS2322 errors
- [ ] `type_predicates_asserts_tserror.ts` — TS2775 for an assertion arrow function stored in an unannotated const

## See also

- [Narrowing](../narrowing_by_control_flow/README.md) — the built-in tests a predicate stands in for
- [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md) — the other unchecked promise, `as`
- [Run-time validation](../../30_Where_Types_Lie/runtime_validation/README.md) — predicates as the gate for data from outside
- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — the `filter` method, whose result type a predicate changes
- [Rust: `expect`: writing down the proof ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/expect/index.html) — a claim the compiler cannot check, written down, in Rust

## Sources to start from

- [TypeScript Handbook — Narrowing: type predicates ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
- [TypeScript Handbook — Narrowing: assertion functions ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions)
- [TypeScript 5.5 release notes — inferred type predicates ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#inferred-type-predicates)
