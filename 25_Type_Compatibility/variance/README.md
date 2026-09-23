# Variance — when a `Dog[]` may stand in for an `Animal[]`

**Level:** 301 · for TypeScript users who want to know why unsound code compiles

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `Dog[]` passes as an `Animal[]` because arrays are compared covariantly; parameters are compared the other way, so `onlyDogs(d: Dog)` is rejected for an `(a: Animal) => void` property (TS2322) but accepted for the same member written as a method, where it throws a TypeError.

**Keywords:** `variance`, `covariance`, `contravariance`, `strictFunctionTypes`

## What the finished page will answer

- Why does `const animals: Animal[] = dogs` compile, and what goes wrong once `animals` is given a `Cat`?
- Why is `(d: Dog) => void` rejected for a property typed `(a: Animal) => void` but accepted for a method, and what does calling it with an `Animal` do?
- Which way do return types vary: is `() => Dog` assignable to `() => Animal`, and the reverse?
- What do the `in` and `out` annotations on a type parameter declare, and why does TS2636 catch a wrong `out` on a property but not on a method?
- What does `--strictFunctionTypes false` change in the same file?

## Examples it will need

- [ ] `variance_method_bivariance_sh.sh` — tsc's TS2322 for the property-style handler only, then the TypeError that the accepted method-style handler throws
- [ ] `variance_annotations_tserror.ts` — TS2636 for an `out` annotation on a type used as a parameter, and for an `in` annotation on a return type
- [ ] `variance_return_types_ts.ts` — a `() => Dog` used as a `() => Animal`, and what the caller receives

## See also

- [Array covariance](../../30_Where_Types_Lie/array_covariance_is_unsound/README.md) — the array case, run until it breaks
- [Function types](../../23_Everyday_Types/function_types_and_overloads/README.md) — function types, whose parameters vary the other way
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — `strictFunctionTypes`, one of the eight strict checks
- [Generic types](../../26_Generics/generic_types_and_defaults/README.md) — the type parameters that `in` and `out` annotate
- [`extends` and `super`](../../07_Prototypes_and_Classes/inheritance_and_super/README.md) — the `extends` that makes a Dog an Animal
- [Rust: When the type checker is wrong ↗](https://masiarek.github.io/rust-learning-library/20_Compilers/when_the_type_checker_is_wrong/index.html) — what soundness means, from a checker that promises it

## Sources to start from

- [TypeScript Handbook — Type Compatibility: function parameter bivariance ↗](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#function-parameter-bivariance)
- [TSConfig Reference — strictFunctionTypes ↗](https://www.typescriptlang.org/tsconfig/#strictFunctionTypes)
- [TypeScript 4.7 release notes — variance annotations ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#optional-variance-annotations-for-type-parameters)
