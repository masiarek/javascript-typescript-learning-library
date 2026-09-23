# Conditional types — `T extends U ? X : Y`, `infer`, and distribution

**Level:** 301 · for anyone who has used ReturnType

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A conditional type on a bare type parameter runs once per union member: `ToArray<string | number>` is `string[] | number[]`, not `(string | number)[]`, and `ToArray<never>` is `never`. Wrapping both sides in `[ ]` turns the distribution off.

**Keywords:** `conditional type`, `infer`, `distributive conditional type`

## What the finished page will answer

- Why is `ToArray<string | number>` `string[] | number[]`, and what does writing `[T] extends [unknown]` change?
- Why is `ToArray<never>` `never` and not `never[]`?
- How does `infer E` pull the element type out of `boolean[]`, and what does `ElementOf<string>` give?
- How are `ReturnType`, `Awaited` and `Exclude` written with these two tools?
- What is `ToArray<T>` inside a generic function body, where `T` is not known yet?

## Examples it will need

- [ ] `conditional_types_distribution_tserror.ts` — the errors that reveal ToArray of a union, of never, and the non-distributive version
- [ ] `conditional_types_infer_ts.ts` — the elements of three arrays typed with a hand-written ElementOf, and a result typed with a hand-written ReturnType

## See also

- [Utility types](../utility_types/README.md) — the utility types built from these parts, such as ReturnType
- [Union and intersection types](../../23_Everyday_Types/union_and_intersection_types/README.md) — the unions a conditional type distributes over
- [`any`, `unknown` and `never`](../../23_Everyday_Types/any_unknown_and_never/README.md) — never, the empty union that distributes to nothing
- [Constraints](../../26_Generics/generic_constraints/README.md) — extends as a constraint rather than a question

## Sources to start from

- [TypeScript Handbook — Conditional types ↗](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [TypeScript Handbook — Distributive conditional types ↗](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)
