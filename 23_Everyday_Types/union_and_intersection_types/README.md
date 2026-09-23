# Union and intersection types — `A | B` and `A & B`

**Level:** 101 · for JavaScript programmers writing their first types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `|` and `&` combine sets of values, not lists of members: on `Cat | Dog` only the shared `name` is usable and `either.meow()` is TS2339, `Cat & Dog` has every member of both, and `string & number` is `never`.

**Keywords:** `union type`, `intersection type`

## What the finished page will answer

- Why does `either.meow()` fail on `Cat | Dog` while `both.meow()` works on `Cat & Dog`, when a union sounds like the bigger type?
- What is `string & number`, and what happens to `id` in `{ id: string } & { id: number }`?
- Which operations does a `string | number` allow before any test: `toString()`, `toFixed()`, `+`?
- What is the difference between `(string | number)[]` and `string[] | number[]`, and which of them accepts `[1, "a"]`?
- What must a function that takes `Cat | Dog` do before it may call `meow()`?

## Examples it will need

- [ ] `union_and_intersection_members_tserror.ts` — TS2339 for a member only one union member has, no error for the intersection, and TS2322 for a value assigned to `string & number`
- [ ] `union_and_intersection_arrays_tserror.ts` — the one TS2322 that shows which of `(string | number)[]` and `string[] | number[]` refuses a mixed array

## See also

- [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md) — how code gets from a union back to one member
- [Discriminated unions](../../24_Narrowing/discriminated_unions/README.md) — unions whose members carry a tag to tell them apart
- [Type aliases and interfaces](../type_aliases_and_interfaces/README.md) — `&` versus `extends` when two shapes disagree
- [`any`, `unknown` and `never`](../any_unknown_and_never/README.md) — the empty type an impossible intersection becomes
- [Rust: What a union is ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/what_a_union_is/index.html) — a Rust union is untagged memory, a different thing with the same name
- [Rust: Variants that carry data ↗](https://masiarek.github.io/rust-learning-library/13_Enums/variants_that_carry_data/index.html) — a Rust enum adds possibilities the way a union type does

## Sources to start from

- [TypeScript Handbook — Everyday Types: union types ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [TypeScript Handbook — Object Types: intersection types ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)
