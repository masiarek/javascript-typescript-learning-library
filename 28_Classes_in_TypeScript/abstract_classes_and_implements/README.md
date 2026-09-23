# `abstract` and `implements` — contracts for classes

**Level:** 201 · for anyone who has written a class in TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `implements` checks a class against an interface but types nothing inside it — `check(s)` in a class implementing `check(name: string)` is still an implicit-`any` error — and `abstract` makes `new Shape()` and a subclass missing `area()` compile errors.

**Keywords:** `abstract`, `implements`

## What the finished page will answer

- Why is `check(s)` an implicit-`any` error in a class that `implements Checker`, whose `check` takes a `string`?
- Does a class need `implements` to be accepted where a `Checker` is expected, and what does the clause add?
- What errors do `new Shape()` and a subclass without `area()` give when `Shape` is abstract?
- What does Node do with an abstract class once the types are stripped — can it be constructed, and what fails when it is?
- May an abstract class hold fields and method bodies, and when is it a better choice than an interface?

## Examples it will need

- [ ] `abstract_classes_and_implements_errors_tserror.ts` — the TS7006, TS2515 and TS2511 errors: an untyped parameter, a missing abstract member and new on an abstract class
- [ ] `abstract_classes_and_implements_runtime_sh.sh` — an abstract class constructed through a cast, and the TypeError when its abstract method is called
- [ ] `abstract_classes_and_implements_structural_ts.ts` — a plain object used as a Checker with no class and no implements clause

## See also

- [`extends` and `super`](../../07_Prototypes_and_Classes/inheritance_and_super/README.md) — extends, which abstract classes build on
- [Type aliases and interfaces](../../23_Everyday_Types/type_aliases_and_interfaces/README.md) — the interfaces a class implements
- [Structural typing](../../25_Type_Compatibility/structural_typing/README.md) — why implements is optional for compatibility
- [`readonly` and `override`](../readonly_and_override/README.md) — the other class modifiers tsc checks
- [Rust: What a trait is ↗](https://masiarek.github.io/rust-learning-library/12_Traits/what_a_trait_is/index.html) — a Rust type meets a trait only through an impl; implements is optional

## Sources to start from

- [TypeScript Handbook — implements clauses ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)
- [TypeScript Handbook — Abstract classes and members ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)
