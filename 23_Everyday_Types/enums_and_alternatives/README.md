# Enums — what they compile to, and the union that replaces them

**Level:** 201 · for TypeScript users who meet enums in existing code

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A numeric `enum` compiles to an object keyed both ways, so `Object.keys` of a two-member enum gives four keys, `0`, `1`, `Up` and `Down`; Node's type stripping refuses an `enum`, and an `as const` object plus a union type does the same job.

**Keywords:** `enum`, `const enum`

## What the finished page will answer

- What JavaScript does `tsc` write for `enum Direction { Up, Down }`, and why does `Object.keys(Direction)` return four keys?
- Does a string enum get the reverse mapping too, and what does `Object.keys` return for it?
- What does a `const enum` compile to, and what is left of it at run time?
- Why is `move(42)` rejected for a numeric enum parameter (TS2345), when older TypeScript accepted any number?
- How do an `as const` object and `(typeof Direction)[keyof typeof Direction]` rebuild an enum from erasable syntax, and what can they not do that an enum can?
- What do Node and `tsc --erasableSyntaxOnly` say about an `enum`, and what does `--experimental-transform-types` change?

## Examples it will need

- [ ] `enums_compiled_output_sh.sh` — the reverse-mapping lines tsc emits for a numeric enum, the four keys Node prints for the compiled file, and Node's ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX for the .ts itself
- [ ] `enums_as_const_alternative_ts.ts` — the keys of an `as const` object used as an enum, and a function that accepts only its values
- [ ] `enums_under_erasable_syntax_tserror.ts` — tsc's TS1294 for an `enum` under the library's tsconfig

## See also

- [Erasable syntax](../../22_TypeScript_Basics/erasable_syntax/README.md) — why Node refuses an enum, with the other refused constructs
- [Primitive and literal types](../primitive_and_literal_types/README.md) — the literal types an enum-like union is built from
- [`keyof` and `typeof` in types](../../27_Type_Operators/keyof_and_typeof/README.md) — `keyof typeof`, the type half of the replacement
- [Discriminated unions](../../24_Narrowing/discriminated_unions/README.md) — where a union of literals does an enum's job
- [Rust: What an enum is ↗](https://masiarek.github.io/rust-learning-library/13_Enums/what_an_enum_is/index.html) — a Rust enum is a closed type that `match` must cover
- [Rust: An enum instead of a bool ↗](https://masiarek.github.io/rust-learning-library/13_Enums/an_enum_instead_of_a_bool/index.html) — named states instead of a bare flag, in Rust

## Sources to start from

- [TypeScript Handbook — Enums: reverse mappings ↗](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings)
- [TypeScript Handbook — Enums: objects versus enums ↗](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)
- [TypeScript 5.0 release notes — all enums are union enums ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#all-enums-are-union-enums)
