# `const` type parameters — inferring the literal, not the widened type

**Level:** 301 · for anyone who has needed a literal type back from a function call

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `<const T>` infers what `as const` would: `keep(["get", "post"])` is `readonly ["get", "post"]` where a plain `<T>` gives `string[]`. It acts only on a literal written in the call — pass a variable and the result is `string[]` again.

**Keywords:** `const type parameter`

## What the finished page will answer

- What do `plain(["get", "post"])`, `keep(["get", "post"])` and `plain(["get", "post"] as const)` return when only `keep` is declared `<const T>`?
- Why does `keep(verbs)` with a variable give `string[]` again?
- What does `keep({ method: "get", retries: 3 })` return, and why are its properties `readonly`?
- What does `<const T extends string[]>`, a mutable constraint, infer in TypeScript 7, and how does that differ from the TypeScript 5.0 release notes?
- Does `<const T>` freeze anything at run time — what does `Object.isFrozen` say about the returned array?

## Examples it will need

- [ ] `const_type_parameters_inferred_sh.sh` — the declarations tsc emits for plain, keep, keep with a variable and keep with a mutable constraint
- [ ] `const_type_parameters_runtime_ts.ts` — the array keep returns and Object.isFrozen of it, false, because const changed only the type

## See also

- [`satisfies`, `as` and annotations](../../24_Narrowing/satisfies_as_and_annotations/README.md) — as const at the call site, the older way to get this type
- [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md) — literal types, and when tsc widens them
- [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md) — readonly tuples, the type const T produces
- [Generic functions](../generic_functions/README.md) — ordinary inference, which widens
- [Rust: Const generics ↗](https://masiarek.github.io/rust-learning-library/22_Generics/const_generics/index.html) — a different idea with a similar name: Rust's const generic takes a value

## Sources to start from

- [TypeScript 5.0 release notes — const type parameters ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#const-type-parameters)
