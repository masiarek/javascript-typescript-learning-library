# Generic functions — a type parameter inferred from the arguments

**Level:** 201 · for anyone who has typed a function in TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The caller never writes `T`: tsc infers it from the arguments, so `pair(1, 2)` returns `number[]`. Disagreeing arguments do not make a union — `pair(1, "x")` is an error, because tsc takes `number` from the first argument and checks the second against it.

**Keywords:** `generics`, `type parameter`, `type argument inference`

## What the finished page will answer

- What type does tsc infer for `T` in `pair(1, 2)`, `pair("a", "b")` and `first([])`, and how can you see an inferred type without an editor?
- Why is `pair(1, "x")` an error instead of `T = string | number`, and why does swapping the arguments swap the message?
- Why is `id("red")` typed `"red"` when assigned to a `const` but `string` when assigned to a `let`?
- What does writing the type argument yourself, `pair<string | number>(1, "x")`, change?
- What is left of `T` once Node strips the types from `function first<T>(xs: T[]): T | undefined`?

## Examples it will need

- [ ] `generic_functions_inferred_sh.sh` — the .d.ts that tsc emits for calls to pair, id and first, one declaration per call with the type inferred there
- [ ] `generic_functions_disagree_tserror.ts` — tsc's two TS2345 errors for pair(1, "x") and pair("x", 1), one naming number and the other string
- [ ] `generic_functions_erased_ts.ts` — first applied to numbers, strings and an empty array, the same JavaScript running for every T

## See also

- [Constraints](../generic_constraints/README.md) — limiting which types T may be
- [When inference guesses wrong](../when_inference_fails/README.md) — when the arguments cannot, or should not, decide T
- [Annotations and inference](../../22_TypeScript_Basics/annotations_and_inference/README.md) — inference for plain variables, the same machinery
- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — the functions generics are most often written for
- [Rust: What a generic is ↗](https://masiarek.github.io/rust-learning-library/22_Generics/what_a_generic_is/index.html) — each Rust instantiation gets its own copy; TypeScript erases T entirely

## Sources to start from

- [TypeScript Handbook — Generics ↗](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Handbook — Generic functions ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions)
