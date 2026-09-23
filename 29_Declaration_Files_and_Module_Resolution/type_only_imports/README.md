# Type-only imports — `import type` and `verbatimModuleSyntax`

**Level:** 201 · for anyone running TypeScript with Node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node needs every name in a plain `import { ... }` to exist at run time, so importing an interface without `type` passes tsc and then fails in Node with `SyntaxError: ... does not provide an export named 'Shape'`; `verbatimModuleSyntax` makes tsc catch it first.

**Keywords:** `import type`, `export type`, `verbatimModuleSyntax`

## What the finished page will answer

- Why does `import { Shape, area } from "./shape.ts"` pass tsc and fail in Node when `Shape` is an interface?
- What do `import type { Shape }` and `import { type Shape, area }` leave behind after Node strips the types?
- What does TS1484 say under `verbatimModuleSyntax`, and why does the library's tsconfig turn it on?
- Does the imported module's top-level code run for `import type { Shape }`, and for `import { type Shape }`?
- What does `export type { Shape }` do in a re-export, and what breaks without it?

## Examples it will need

- [ ] `type_only_imports_crash_sh.sh` — tsc's silence, Node's SyntaxError for the missing export, and TS1484 once verbatimModuleSyntax is on
- [ ] `type_only_imports_side_effects_sh.sh` — whether the imported module's top-level console.log runs for import type, import { type X } and a plain import

## See also

- [`import` and `export`](../../14_Modules/import_and_export/README.md) — named imports, which Node checks when it links modules
- [Erasable syntax](../../22_TypeScript_Basics/erasable_syntax/README.md) — what Node's type stripping can remove
- [Module resolution](../module_resolution/README.md) — the ./shape.ts specifier these imports use
- [Running TypeScript](../../22_TypeScript_Basics/running_typescript/README.md) — how Node runs a .ts file directly

## Sources to start from

- [TSConfig reference — verbatimModuleSyntax ↗](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax)
- [TypeScript 3.8 release notes — Type-only imports and exports ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)
- [Node.js 24 — TypeScript type stripping ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html#type-stripping)
