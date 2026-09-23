# Constraints — `extends` limits what a type parameter accepts

**Level:** 201 · for anyone who has written a generic function

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `<T extends { length: number }>` lets the body read `.length` and makes `longest(10, 20)` an error. Inside the body, though, `T` is not its constraint: returning `{ length: 0 }` as a `T` fails, because the caller's `T` may be a narrower type.

**Keywords:** `extends`, `generic constraint`

## What the finished page will answer

- What may the body of `longest<T>(a: T, b: T)` do with `a` before a constraint is added, and what does `extends { length: number }` unlock?
- Why does returning `{ length: 0 }` from a function declared to return `T` fail, when `{ length: 0 }` satisfies the constraint?
- Which arguments pass `T extends { length: number }` — a string, an array, `{ length: 3 }`, a function — and why does a function pass?
- How does `K extends keyof T` tie one type parameter to another, and what error does `get(user, "nmae")` give?
- How does `extends` in a constraint differ from `extends` in a class heading and in a conditional type?

## Examples it will need

- [ ] `generic_constraints_length_ts.ts` — longest applied to two strings, two arrays and two functions, with the length of each winner
- [ ] `generic_constraints_subtype_tserror.ts` — tsc's TS2322 for returning { length: 0 } as T, with its 'could be instantiated with a different subtype' line
- [ ] `generic_constraints_keyof_tserror.ts` — the error for get(user, "nmae") when K extends keyof T

## See also

- [Generic functions](../generic_functions/README.md) — inference before any constraint
- [`keyof` and `typeof` in types](../../27_Type_Operators/keyof_and_typeof/README.md) — keyof, the usual partner of a constraint
- [Structural typing](../../25_Type_Compatibility/structural_typing/README.md) — why any value with a length satisfies the constraint
- [Conditional types](../../27_Type_Operators/conditional_types_and_infer/README.md) — the same extends word asking a question instead
- [Rust: Where the bound goes ↗](https://masiarek.github.io/rust-learning-library/22_Generics/where_the_bound_goes/index.html) — a trait bound, Rust's constraint, and where it belongs

## Sources to start from

- [TypeScript Handbook — Generic constraints ↗](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [TypeScript Handbook — Constraints ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints)
