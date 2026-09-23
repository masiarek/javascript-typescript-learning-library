# Structural typing — a value fits a type if it has the members, whatever it is called

**Level:** 201 · for TypeScript users coming from Java, C# or Rust

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** TypeScript compares shapes, not names: a plain object literal passes as a `Dog` and `fake instanceof Dog` prints `false`; a class with a `#private` field is the exception, since no object literal can have one (TS2741).

**Keywords:** `structural typing`, `duck typing`

## What the finished page will answer

- Why does `const fake: Dog = { name, speak }` compile, and what does `fake instanceof Dog` print?
- Why does a `#lives` field stop the same trick with TS2741, and does a TypeScript `private` field do the same?
- May a value with more properties than the type asks for be assigned, and when is the extra property an error?
- Are two separately named types with the same members interchangeable in both directions?
- Does a class have to say `implements Dog` to be used where a `Dog` is expected?

## Examples it will need

- [ ] `structural_typing_fake_dog_sh.sh` — a clean tsc check for an object literal used as a Dog, TS2741 for the class with a `#private` field, then Node printing the fake's bark and `false` for instanceof
- [ ] `structural_typing_same_shape_ts.ts` — values of two separately named types with the same members, each passed to a function that expects the other

## See also

- [Excess property checks](../excess_property_checks/README.md) — the one place an extra property is an error
- [Branded types](../branded_types/README.md) — making two same-shaped types incompatible on purpose
- [`private` versus `#private`](../../28_Classes_in_TypeScript/private_versus_hash_private/README.md) — why a private member makes a class nominal
- [`instanceof`](../../07_Prototypes_and_Classes/instanceof/README.md) — the run-time check that follows prototypes, not shapes
- [Rust: What a trait is ↗](https://masiarek.github.io/rust-learning-library/12_Traits/what_a_trait_is/index.html) — traits in Rust are nominal: a type fits only after an `impl`

## Sources to start from

- [TypeScript Handbook — Type Compatibility ↗](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#starting-out)
- [TypeScript Handbook — Type Compatibility: private and protected members ↗](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#private-and-protected-members-in-classes)
