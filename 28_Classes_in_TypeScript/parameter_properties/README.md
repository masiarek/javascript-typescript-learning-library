# Parameter properties — shorthand that Node cannot strip

**Level:** 201 · for anyone running TypeScript with Node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `constructor(public x: number)` declares and assigns a field in one go, which means TypeScript has to generate code — so Node's type stripping refuses it with `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`, and `erasableSyntaxOnly` makes tsc refuse it first.

**Keywords:** `parameter property`, `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`

## What the finished page will answer

- What does `constructor(public x: number, private y: number) {}` expand to, field by field?
- What does Node print for a file that uses one, and which line and column does it point at?
- What does `--erasableSyntaxOnly` report for the same file, and why does the library's tsconfig turn it on?
- What does the same class look like with ordinary field declarations, and does Node then run it?
- Does `node --experimental-transform-types` run the original file, and what warning does it print?

## Examples it will need

- [ ] `parameter_properties_node_refuses_sh.sh` — tsc's silence, Node's ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX, and the two TS1294 errors from --erasableSyntaxOnly
- [ ] `parameter_properties_rewritten_ts.ts` — the same Point written with plain fields, and its sum, running under Node's type stripping

## See also

- [Erasable syntax](../../22_TypeScript_Basics/erasable_syntax/README.md) — the full list of syntax Node cannot strip
- [Running TypeScript](../../22_TypeScript_Basics/running_typescript/README.md) — how Node runs a .ts file
- [Enums](../../23_Everyday_Types/enums_and_alternatives/README.md) — enums, the other feature that needs generated code
- [`private` versus `#private`](../private_versus_hash_private/README.md) — what private means once the shorthand is expanded

## Sources to start from

- [Node.js 24 — TypeScript type stripping ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html#type-stripping)
- [TypeScript Handbook — Parameter properties ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties)
- [TSConfig reference — erasableSyntaxOnly ↗](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly)
