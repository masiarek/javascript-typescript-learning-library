# Declaration files — `.d.ts`, `declare`, and types without code

**Level:** 201 · for anyone who has used a JavaScript library from TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `.d.ts` file holds types and no code, and tsc takes it on trust: `declare const APP_VERSION: string` makes `APP_VERSION.toUpperCase()` type-check, while Node, which never reads the file, throws `ReferenceError` on that line.

**Keywords:** `declare`, `.d.ts`, `ambient declaration`

## What the finished page will answer

- What may a `.d.ts` file contain, and what does TS1183 say about a function body inside one?
- Why does `declare const APP_VERSION: string` type-check and then throw `ReferenceError` in Node?
- How does tsc pair `util.js` with `util.d.ts` when a `.ts` file imports `./util.js`?
- What does `tsc --declaration --emitDeclarationOnly` write for a `.ts` file, and what disappears from it?
- When a hand-written `.d.ts` disagrees with the `.js` it describes, who notices, and when?

## Examples it will need

- [ ] `declaration_files_declare_sh.sh` — tsc's silence for a declared global, then Node's ReferenceError when the line runs
- [ ] `declaration_files_emit_sh.sh` — the .d.ts that tsc emits for a small module, beside the source it came from
- [ ] `declaration_files_drift_sh.sh` — a .d.ts saying add returns a number, a .js returning a string, and the wrong answer that type-checks

## See also

- [Types for packages](../types_for_packages/README.md) — where tsc finds the .d.ts files of a package
- [Declaration merging](../declaration_merging_and_augmentation/README.md) — adding to declarations that already exist
- [Types are erased](../../22_TypeScript_Basics/types_are_erased/README.md) — a .d.ts is all type and no code
- [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md) — another promise tsc takes on trust
- [Rust: Generating bindings ↗](https://masiarek.github.io/rust-learning-library/31_C_and_Cpp/migrating_c_to_rust/generating_bindings/index.html) — declarations of C code for Rust, generated because hand-written ones drift

## Sources to start from

- [TypeScript Handbook — Declaration files: introduction ↗](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [TypeScript Handbook — Type declarations ↗](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
