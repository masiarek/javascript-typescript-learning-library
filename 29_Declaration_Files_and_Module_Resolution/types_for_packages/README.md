# Types for packages — bundled types and `@types` from DefinitelyTyped

**Level:** 201 · for anyone who has installed a package from npm

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An import finds `@types/<name>` by itself, but globals such as `process` come only from packages listed in `types` — and since TypeScript 6 that list starts empty, so an installed `@types/node` adds nothing until `types` names it.

**Keywords:** `@types`, `DefinitelyTyped`, `types`, `typeRoots`

## What the finished page will answer

- Where does tsc look for the types of `import { greet } from "greet"` — the package's own `types` or `exports` entry, then `@types/greet`?
- What does TS7016 say for a package with no types at all, and which two fixes does it suggest?
- Why is `process` error TS2591 when `@types/node` is installed, and what does `"types": ["node"]` change?
- What did `types` default to before TypeScript 6, and what does `"types": ["*"]` restore?
- How does `typeRoots` differ from `types`?

## Examples it will need

- [ ] `types_for_packages_lookup_sh.sh` — the types tsc finds for three local packages: one bundling its .d.ts, one covered by @types, one with none (TS7016)
- [ ] `types_for_packages_globals_sh.sh` — TS2591 for process with @types/node installed, then no errors with types set to node and to *

## See also

- [Declaration files](../declaration_files/README.md) — what a .d.ts file is
- [Module resolution](../module_resolution/README.md) — how tsc finds the package itself
- [npm](../../31_Tooling/npm_and_package_json/README.md) — installing @types packages as dev dependencies
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — the tsconfig.json where types is set

## Sources to start from

- [TSConfig reference — types ↗](https://www.typescriptlang.org/tsconfig/#types)
- [DefinitelyTyped ↗](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [Announcing TypeScript 6.0 — types now defaults to [] ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/#types-now-defaults-to)
