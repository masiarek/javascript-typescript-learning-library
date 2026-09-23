# Discriminated unions — a tag field and a `switch`

**Level:** 201 · for TypeScript users modelling data with unions

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A union narrows on a tag only when each member's tag is a literal type: with `kind: "circle"` and `kind: "square"`, `switch (shape.kind)` gives each case its member, even through `const { kind } = shape`; with `kind: string`, reading `radius` is TS2339.

**Keywords:** `discriminated union`, `tagged union`

## What the finished page will answer

- Why does `switch (shape.kind)` give each `case` the right member when the tags are `"circle"` and `"square"`, and what does tsc say when both are typed `kind: string`?
- Why does narrowing still work after `const { kind } = shape`, a feature added in TypeScript 4.4?
- Can the tag be a number, a boolean or `undefined`, and how is `{ ok: true; value: T } | { ok: false; error: E }` narrowed?
- What does the checker allow in a `case` when two members share the same tag value?
- What does `JSON.stringify` print for a tagged value, and why does the tag survive at run time where the type does not?

## Examples it will need

- [ ] `discriminated_unions_literal_tag_tserror.ts` — TS2339 for the union tagged with `kind: string`, and no errors for the literal-tagged switch or the destructured tag
- [ ] `discriminated_unions_result_ts.ts` — one line per `Result` value, the value or the error, chosen by the `ok` tag

## See also

- [Exhaustiveness checking](../exhaustiveness_with_never/README.md) — making the switch prove that it covers every tag
- [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md) — the literal types that a tag must have
- [Enums](../../23_Everyday_Types/enums_and_alternatives/README.md) — the union of literals that replaces an enum
- [`if`, `switch` and `? :`](../../11_Control_Flow_and_Iteration/if_switch_and_the_conditional_operator/README.md) — how `switch` compares at run time
- [Rust: Variants that carry data ↗](https://masiarek.github.io/rust-learning-library/13_Enums/variants_that_carry_data/index.html) — the same idea built into Rust as enum variants
- [Rust: Destructuring enums ↗](https://masiarek.github.io/rust-learning-library/30_Pattern_Matching/destructuring_enums/index.html) — taking a tagged value apart with a pattern, in Rust

## Sources to start from

- [TypeScript Handbook — Narrowing: discriminated unions ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [TypeScript 4.4 release notes — aliased conditions and discriminants ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#control-flow-analysis-of-aliased-conditions-and-discriminants)
