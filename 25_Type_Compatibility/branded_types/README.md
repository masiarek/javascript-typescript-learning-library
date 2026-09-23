# Branded types — nominal typing on a structural system

**Level:** 301 · for TypeScript users keeping look-alike strings apart

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Intersect `string` with a property no string has, `{ readonly __brand: "UserId" }`, and a plain `"u-42"` is rejected where a `UserId` is expected (TS2345); at run time the brand does not exist, and the value is an ordinary string.

**Keywords:** `branded type`, `nominal typing`, `unique symbol`

## What the finished page will answer

- Why is `loadUser("u-42")` rejected when `loadUser` takes a `UserId`, and what do `typeof id` and `JSON.stringify(id)` print for a branded value?
- Why does creating a `UserId` need an `as` inside one function, and why should that function be the one that validates?
- Why is an `OrderId` rejected where a `UserId` is expected, and what does a `unique symbol` key change about accidental clashes between brands?
- What type do `id.toUpperCase()` and `id + "!"` have: does the brand survive a string operation?
- Can a branded number still be used in arithmetic, and what type does `amount * 2` have?

## Examples it will need

- [ ] `branded_types_user_id_sh.sh` — tsc's TS2345 for a plain string passed as a UserId, then Node showing that the branded value is an ordinary string
- [ ] `branded_types_unique_symbol_tserror.ts` — TS2345 for an OrderId passed as a UserId when both brands use `unique symbol` keys
- [ ] `branded_types_validated_ts.ts` — the outcome of a validating `toUserId` for a good and a bad input

## See also

- [Structural typing](../structural_typing/README.md) — the rule a brand works around
- [Symbols](../../02_Values_and_Types/symbols/README.md) — the run-time symbols behind `unique symbol`
- [Run-time validation](../../30_Where_Types_Lie/runtime_validation/README.md) — checking the value in the one function that brands it
- [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md) — the unchecked `as` that creates a brand
- [Rust: A score is not a number: the newtype ↗](https://masiarek.github.io/rust-learning-library/16_Structs/newtype_score/index.html) — the Rust newtype, which gives the same safety as a real type
- [Rust: Phantom types ↗](https://masiarek.github.io/rust-learning-library/12_Traits/phantom_types/index.html) — a zero-byte type tag in Rust, the closest match to a brand

## Sources to start from

- [TypeScript FAQ — Can I make a type alias nominal? ↗](https://github.com/microsoft/TypeScript/wiki/FAQ#can-i-make-a-type-alias-nominal)
- [TypeScript Playground — Nominal Typing ↗](https://www.typescriptlang.org/play/typescript/language-extensions/nominal-typing.ts.html)
