# Array covariance — the unsoundness TypeScript chose

**Level:** 301 · for anyone who has passed an array to a function

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** tsc lets a `Dog[]` be used as an `Animal[]`, so pushing a plain `Animal` through that alias type-checks and the next `d.bark()` on the original array throws `TypeError`; typing the alias `readonly Animal[]` closes the hole by removing `push`.

**Keywords:** `soundness`, `array covariance`, `method bivariance`

## What the finished page will answer

- Why does tsc accept `const animals: Animal[] = dogs`, and what happens to `dogs` after `animals.push({ name: "Tom" })`?
- How does `readonly Animal[]` close the hole, and what does it cost the code that receives it?
- Why is an object with a method `handle(d: Dog)` accepted where `handle(a: Animal)` is required, while the arrow-function property form is rejected under `strictFunctionTypes`?
- What does the push look like when it happens inside a function that takes `Animal[]`, far from where `dogs` was declared?
- What does the TypeScript handbook's note on soundness list as deliberately unsound, and which pages of this chapter match its items?

## Examples it will need

- [ ] `array_covariance_push_cat_sh.sh` — tsc's silence, woof for the real dog, and the TypeError when the pushed animal is asked to bark
- [ ] `array_covariance_readonly_tserror.ts` — the error push gets on a readonly Animal[] parameter
- [ ] `array_covariance_method_bivariance_tserror.ts` — the strictFunctionTypes error for the arrow-property form, and nothing for the method form

## See also

- [Variance](../../25_Type_Compatibility/variance/README.md) — the variance rules, including the one this page breaks
- [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md) — readonly arrays, the safe type for a read-only parameter
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — strictFunctionTypes, which covers only function-typed properties
- [Type assertions](../type_assertions_are_unchecked/README.md) — another place tsc trusts instead of checking
- [Rust: When the type checker is wrong ↗](https://masiarek.github.io/rust-learning-library/20_Compilers/when_the_type_checker_is_wrong/index.html) — soundness defined: in rustc a hole is a bug, here it is a choice

## Sources to start from

- [TypeScript Handbook — A note on soundness ↗](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#a-note-on-soundness)
- [TSConfig reference — strictFunctionTypes ↗](https://www.typescriptlang.org/tsconfig/#strictFunctionTypes)
