# Types are erased — nothing of them is left in the code Node runs

**Level:** 101 · for anyone who has written a type annotation

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node erases types by overwriting each annotation with spaces, so `area.toString()` shows blanks where `: Point` and `: number` stood, and an interface used as a value, `p instanceof Point`, fails at run time with a ReferenceError.

**Keywords:** `type erasure`, `stripTypeScriptTypes`

## What the finished page will answer

- What does `area.toString()` print for a function with annotated parameters, and why do stack-trace line and column numbers still match the `.ts` file?
- What does `stripTypeScriptTypes` from `node:module` return for `let total: number = add(1, 2) as number;`, and what warning comes with it?
- Why can no program ask at run time which interface a value satisfies, and what do `tsc` and Node each report for `p instanceof Point`?
- Which constructs do leave run-time code behind, such as `enum`, parameter properties and the `design:type` metadata of `emitDecoratorMetadata`, and which of them does Node refuse?
- If the types are gone at run time, what has to check data that arrives from outside, such as the result of `JSON.parse`?

## Examples it will need

- [ ] `types_erased_to_spaces_ts.ts` — a typed function's `toString()` as JSON, with runs of spaces where each annotation was
- [ ] `types_erased_interface_value_sh.sh` — tsc's TS2693 for an interface used with `instanceof`, then Node's ReferenceError for the same line
- [ ] `types_erased_strip_api_sh.sh` — one line of TypeScript before and after `stripTypeScriptTypes`, and the ExperimentalWarning Node writes to stderr

## See also

- [Erasable syntax](../erasable_syntax/README.md) — the syntax that cannot be erased by blanking it out
- [Run-time validation](../../30_Where_Types_Lie/runtime_validation/README.md) — checking at run time what the erased types no longer can
- [`instanceof`](../../07_Prototypes_and_Classes/instanceof/README.md) — the run-time test, which needs a constructor, not a type
- [Decorators](../../17_Metaprogramming/decorators/README.md) — decorator metadata, the one place tsc writes a type into its output
- [C: What the decompiler recovers ↗](https://masiarek.github.io/c-learning-library/02_Decompiling/what_the_decompiler_recovers/index.html) — compiled C loses its names and structs the way TypeScript loses its types

## Sources to start from

- [Node.js 24 — TypeScript: type stripping ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html#type-stripping)
- [TypeScript Handbook — The Basics: erased types ↗](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types)
- [Node.js 24 — module.stripTypeScriptTypes ↗](https://nodejs.org/docs/latest-v24.x/api/module.html#modulestriptypescripttypescode-options)
