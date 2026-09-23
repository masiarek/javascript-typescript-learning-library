# When inference guesses wrong — `NoInfer` and explicit type arguments

**Level:** 301 · for anyone who has written a generic function

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** tsc infers a type parameter from every argument it appears in, so `light(["red", "green"], "blue")` quietly adds `"blue"` to `C`; marking the second parameter `NoInfer<C>` stops it counting, and the same call becomes an error.

**Keywords:** `NoInfer`, `explicit type argument`

## What the finished page will answer

- Why does `light(["red", "green"], "blue")` compile, and what does tsc infer for `C`?
- What does `NoInfer<C>` change, and what error does the same call give then?
- What does `parse<T>(json: string): T` return when called as `parse(text)`, where no argument mentions `T`?
- When you write `parse<{ n: number }>(text)`, what has tsc checked, and what has it only assumed?
- Can you give one type argument and let tsc infer the rest, and what does TS2558 say when you try?

## Examples it will need

- [ ] `when_inference_fails_noinfer_sh.sh` — the declarations tsc emits for light and strictLight, and the TS2345 error that NoInfer produces
- [ ] `when_inference_fails_return_only_sh.sh` — the type tsc gives parse(text) with and without an explicit type argument: unknown, then the type you wrote
- [ ] `when_inference_fails_partial_tserror.ts` — the TS2558 error for giving one of two type arguments

## See also

- [Generic functions](../generic_functions/README.md) — how inference works when it succeeds
- [`const` type parameters](../const_type_parameters/README.md) — the other way to steer inference
- [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md) — an explicit type argument on parse is an unchecked assertion
- [Annotations and inference](../../22_TypeScript_Basics/annotations_and_inference/README.md) — when to write the type yourself
- [Rust: When the compiler cannot infer ↗](https://masiarek.github.io/rust-learning-library/22_Generics/when_the_compiler_cannot_infer/index.html) — rustc's E0282: the same gap, reported as an error instead of unknown

## Sources to start from

- [TypeScript 5.4 release notes — The NoInfer utility type ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-4.html#the-noinfer-utility-type)
- [TypeScript Handbook — Specifying type arguments ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#specifying-type-arguments)
