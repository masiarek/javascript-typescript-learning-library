# `satisfies`, `as` and annotations — three ways to state a type

**Level:** 201 · for TypeScript users choosing how to state a type

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An annotation checks an object and forgets its details, `satisfies` checks it and keeps them, and `as` barely checks: `{ red: [255, 0, 0] } as Palette` compiles without the required `green`, which `satisfies Palette` reports as TS2741.

**Keywords:** `satisfies`, `as`

## What the finished page will answer

- What type does `green` have in an object declared `: Palette` and in one declared `satisfies Palette`, and which of them allows `green.toUpperCase()`?
- Why does `{ red: [255, 0, 0] } as Palette` compile without `green`, and what does reading `green` give at run time?
- When does `as` refuse, as TS2352 does for `42 as string`, and what does `as unknown as` do about it?
- Do `satisfies` and an annotation both report an extra property such as `blue` (TS2353)?
- What does `as const satisfies Palette` add over `satisfies Palette` alone?

## Examples it will need

- [ ] `satisfies_as_annotation_tserror.ts` — TS2339 on the annotated object's `green`, nothing on the `satisfies` one, nothing on the `as` one that lacks `green`, and TS2741 when `satisfies` meets the same missing property
- [ ] `satisfies_as_missing_property_ts.ts` — the `undefined` that an `as`-asserted object holds where `green` should be

## See also

- [Annotations and inference](../../22_TypeScript_Basics/annotations_and_inference/README.md) — when to write a type at all
- [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md) — how far an `as` can lie
- [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md) — the literal types `satisfies` keeps and an annotation widens
- [Excess property checks](../../25_Type_Compatibility/excess_property_checks/README.md) — the extra-property check both forms apply
- [Rust: Casting with `as` ↗](https://masiarek.github.io/rust-learning-library/29_Conversion/casting_with_as/index.html) — an `as` in Rust converts the value; TypeScript's converts nothing

## Sources to start from

- [TypeScript 4.9 release notes — the satisfies operator ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
- [TypeScript Handbook — Everyday Types: type assertions ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
