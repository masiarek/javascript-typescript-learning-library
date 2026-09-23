# Arrays and tuples — `T[]`, `readonly`, and a tuple that `push` can still grow

**Level:** 101 · for JavaScript programmers writing their first types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A tuple type is an array with a type per position, not a fixed-length array: `pair.push(99)` on a `[string, number]` compiles and makes `length` 3, yet tsc still rejects `pair[2]`; only `readonly [string, number]` refuses the `push`.

**Keywords:** `tuple`, `ReadonlyArray`, `Array<T>`

## What the finished page will answer

- Why does `pair.push(99)` compile on a `[string, number]`, and what do `pair` and `pair.length` hold afterwards?
- Why does tsc reject `pair[2]` with TS2493 even after the push has made it exist?
- What do `readonly string[]`, `ReadonlyArray<string>` and `readonly [string, number]` remove from the type, and why can a `readonly string[]` not be passed where a `string[]` is expected (TS4104)?
- What does `[1, "a"]` infer, a tuple or `(string | number)[]`, and what changes with `as const` or a tuple annotation?
- What type does `length` have for `[string, number?]` and for `[string, ...number[]]`?

## Examples it will need

- [ ] `arrays_and_tuples_push_sh.sh` — tsc's TS2493 for a tuple read past its end and TS2339 for a readonly tuple push, then Node printing the grown tuple and its length 3
- [ ] `arrays_and_tuples_readonly_tserror.ts` — TS4104 when a `readonly string[]` is passed to a function that takes `string[]`
- [ ] `arrays_and_tuples_lengths_tserror.ts` — the `length` types of a fixed, an optional-element and a rest tuple, printed through deliberate TS2322 errors

## See also

- [Arrays](../../08_Arrays_and_Collections/array_basics/README.md) — the run-time array that every tuple type describes
- [Mutating and copying methods](../../08_Arrays_and_Collections/mutating_and_copying_methods/README.md) — the methods that a `readonly` array type removes
- [Index access](../../30_Where_Types_Lie/index_access_and_nouncheckedindexedaccess/README.md) — why `arr[99]` is typed as present
- [Destructuring](../../04_Variables_and_Scope/destructuring/README.md) — unpacking a tuple into named variables
- [Rust: Tuples ↗](https://masiarek.github.io/rust-learning-library/26_Collections/tuples/index.html) — a Rust tuple really does have a fixed length
- [Rust: Array or `Vec`? ↗](https://masiarek.github.io/rust-learning-library/26_Collections/array_or_vec/index.html) — fixed-size array or growable Vec, the choice TypeScript blurs

## Sources to start from

- [TypeScript Handbook — Object Types: tuple types ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
- [TypeScript Handbook — Object Types: readonly tuple types ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-tuple-types)
