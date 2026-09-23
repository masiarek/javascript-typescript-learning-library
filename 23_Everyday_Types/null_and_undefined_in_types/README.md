# `strictNullChecks` — `null` is its own type

**Level:** 101 · for JavaScript programmers writing their first types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Under `strictNullChecks`, on by default in TypeScript 7, `names.find(...)` is `string | undefined` and returning it as a `string` is TS2322; switch the check off and the same file compiles, then fails at run time reading `length` of `undefined`.

**Keywords:** `strictNullChecks`, `non-null assertion`

## What the finished page will answer

- What type does `names.find(...)` have, and what do tsc and Node each report when it finds nothing and the result is returned as a `string`?
- What does turning `strictNullChecks` off change: which assignments of `null` compile, and what type does `let x = null` get?
- What does the postfix `!` in `names.find(...)!` promise, and what happens at run time when the promise is false?
- How do `?.` and `??` add and remove `undefined`: what is the type of `user?.name ?? "anonymous"`?
- Why are `null` and `undefined` two different types, and which one do optional properties and missing arguments use?

## Examples it will need

- [ ] `null_in_types_find_sh.sh` — tsc's TS2322 under the default checks, a clean check with `--strictNullChecks false`, then Node's TypeError reading `length` of `undefined`
- [ ] `null_in_types_non_null_assertion_sh.sh` — a clean tsc check of `names.find(...)!.length`, then the TypeError it still throws at run time

## See also

- [`null` and `undefined`](../../02_Values_and_Types/null_and_undefined/README.md) — the two absences at run time
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — the `?.` and `??` operators, which add and remove `undefined`
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — the other checks that come with `strict`
- [Index access](../../30_Where_Types_Lie/index_access_and_nouncheckedindexedaccess/README.md) — lookups that stay typed as present even under this check
- [Rust: Partial functions: why `Option` exists ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/partial_functions/index.html) — why Rust's `find` returns an `Option` instead
- [Rust: Null dereference ↗](https://masiarek.github.io/rust-learning-library/31_C_and_Cpp/null_dereference/index.html) — the same crash in C, and Rust's separate type for absence

## Sources to start from

- [TSConfig Reference — strictNullChecks ↗](https://www.typescriptlang.org/tsconfig/#strictNullChecks)
- [TypeScript Handbook — Everyday Types: null and undefined ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
