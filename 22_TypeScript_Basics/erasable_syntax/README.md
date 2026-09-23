# Erasable syntax — what Node can strip, and the features it cannot

**Level:** 201 · for TypeScript users running code under Node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node runs TypeScript by overwriting type syntax with spaces and stops with ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX at `enum`, parameter properties, a `namespace` holding values, `import x = require()` and the old `<number>x` assertion; `erasableSyntaxOnly` makes tsc report each as TS1294.

**Keywords:** `erasableSyntaxOnly`, `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`, `--experimental-transform-types`

## What the finished page will answer

- Which five constructs make Node stop with ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX, and what message does it give for each?
- What JavaScript would `tsc` have to write for an `enum` or a parameter property, and why can blanking out characters not produce it?
- What does `erasableSyntaxOnly` report for the same files, and why does this library's `tsconfig.json` turn it on?
- Which look-alikes are still erasable: a `namespace` that holds only types, a `declare enum`, an `abstract` class, a `private readonly` field?
- What does `--experimental-transform-types` change, and what does it write to stderr?
- What erasable replacement exists for each refused construct: an `as const` object for an `enum`, a field and an assignment for a parameter property, `as` for `<T>x`?

## Examples it will need

- [ ] `erasable_syntax_refused_sh.sh` — Node's ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX message for each of five one-line files, then tsc's TS1294 for the same files under `--erasableSyntaxOnly`
- [ ] `erasable_syntax_look_alikes_ts.ts` — output from an abstract class, a `private readonly` field and a namespace that holds only types, all of which Node strips without complaint
- [ ] `erasable_syntax_enum_tserror.ts` — tsc's TS1294 for an `enum` under the library's tsconfig

## See also

- [Types are erased](../types_are_erased/README.md) — how the blanking works for everything Node does accept
- [Enums](../../23_Everyday_Types/enums_and_alternatives/README.md) — the enum, and the erasable object that replaces it
- [Parameter properties](../../28_Classes_in_TypeScript/parameter_properties/README.md) — the constructor shorthand Node cannot strip
- [Type-only imports](../../29_Declaration_Files_and_Module_Resolution/type_only_imports/README.md) — `import type`, the other thing stripping needs spelled out
- [`satisfies`, `as` and annotations](../../24_Narrowing/satisfies_as_and_annotations/README.md) — the `as` form of an assertion, which Node accepts

## Sources to start from

- [Node.js 24 — TypeScript features ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html#typescript-features)
- [TSConfig Reference — erasableSyntaxOnly ↗](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly)
- [Node.js 24 — ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX ↗](https://nodejs.org/docs/latest-v24.x/api/errors.html#err_unsupported_typescript_syntax)
