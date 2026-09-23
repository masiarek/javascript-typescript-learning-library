# Annotations and inference — when to write a type and when to let it be

**Level:** 101 · for anyone writing their first typed functions

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Inference types most variables unaided: `let count = 1` is `number`, `const one = 1` is the literal type `1`, and a `map` callback's parameter is typed from the array; a declared function's parameters are not, and `strict` reports them as TS7006.

**Keywords:** `type annotation`, `type inference`, `contextual typing`

## What the finished page will answer

- What types does tsc infer for `let count = 1`, `const one = 1` and `[1, 2].map((n) => n * 2)`, and how can an error message be made to print them?
- Why is a callback's `n` typed without an annotation while `function half(n)` gets TS7006?
- When does an annotation change the type instead of repeating it: a variable assigned later, or a wider union such as `let id: string | number = 1`?
- What does annotating a return type catch that inference lets through, for a function that forgets one branch?
- What does `const empty = []` get under `strict`, and why does tsc ask for an annotation with TS7034?

## Examples it will need

- [ ] `annotations_inferred_types_tserror.ts` — tsc's diagnostics revealing the inferred types of a `let`, a `const` and a `map` result, plus TS7006 for an unannotated parameter
- [ ] `annotations_return_type_tserror.ts` — TS2366 for a function whose annotated return type exposes a branch that returns nothing

## See also

- [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md) — why `const` infers `1` and `let` infers `number`
- [Generic functions](../../26_Generics/generic_functions/README.md) — inferring type parameters from the arguments
- [When inference guesses wrong](../../26_Generics/when_inference_fails/README.md) — when you must write the type argument yourself
- [`satisfies`, `as` and annotations](../../24_Narrowing/satisfies_as_and_annotations/README.md) — the three ways to state a type, compared
- [Rust: Type inference ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/type_inference/index.html) — in Rust, inference also uses later lines; TypeScript uses the initialiser
- [Rust: What a type annotation does ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/what_an_annotation_does/index.html) — an annotation as an input to inference, in Rust

## Sources to start from

- [TypeScript Handbook — Type Inference ↗](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [TypeScript Handbook — Everyday Types: annotations on variables ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)
