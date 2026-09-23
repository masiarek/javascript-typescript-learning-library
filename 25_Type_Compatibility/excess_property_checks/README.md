# Excess property checks — only for a fresh object literal

**Level:** 201 · for TypeScript users puzzled by extra-property errors

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `const direct: Point = { x: 1, y: 2, z: 3 }` is TS2353, but put the same object in a variable and `const later: Point = staged` passes: the extra-property check runs only on an object literal written where the type is expected.

**Keywords:** `excess property check`, `weak type`

## What the finished page will answer

- Why is `{ x: 1, y: 2, z: 3 }` an error written directly as a `Point` (TS2353) but not when it comes from a variable?
- Does the check apply to an object literal passed as an argument or returned from a function?
- What is a weak type, and why does `{ verbos: true }` fail against an all-optional `Options` even from a variable (TS2559)?
- How do an index signature, a spread such as `{ ...staged }`, or `as Point` change the check?
- Which typo does the check exist to catch, given that extra properties are otherwise allowed?

## Examples it will need

- [ ] `excess_property_fresh_literal_tserror.ts` — TS2353 for the literal written as a Point and for the literal passed to a function, with no error for the staged object or the spread
- [ ] `excess_property_weak_type_tserror.ts` — TS2559 for a misspelt option assigned from a variable to an all-optional type

## See also

- [Structural typing](../structural_typing/README.md) — the rule this check is an exception to
- [Object types](../../23_Everyday_Types/object_types/README.md) — optional properties and index signatures, which change the check
- [`satisfies`, `as` and annotations](../../24_Narrowing/satisfies_as_and_annotations/README.md) — `satisfies`, which applies the same check
- [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md) — the `as` that skips the check entirely
- [Rust: When a struct refuses ↗](https://masiarek.github.io/rust-learning-library/16_Structs/when_a_struct_refuses/index.html) — a Rust struct literal refuses an unknown field every time

## Sources to start from

- [TypeScript Handbook — Object Types: excess property checks ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks)
