# Decorators — two kinds that `tsc` compiles and Node cannot run

**Level:** 301 · for anyone who has seen @Component or @Injectable and wants to know what runs

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Decorators are still a TC39 proposal, so Node 25.2.1 cannot run them — a `.ts` file with `@logged` fails with `SyntaxError` once its types are stripped — while TypeScript 7.0.2 type-checks the standard form and compiles it to JavaScript that Node runs.

**Keywords:** `decorators`, `experimentalDecorators`, `ClassMethodDecoratorContext`

## What the finished page will answer

- What does Node 25.2.1 do with `@logged` in a `.ts` file, and why does type stripping not help?
- What does tsc 7.0.2 compile a standard method decorator to, and does the output run on Node 24?
- What arguments does a standard decorator receive, and what does `context.kind` say for a method, a field and a class?
- How do `experimentalDecorators` decorators differ, and why does each style fail to type-check under the other (TS1241)?
- Does `node --js-decorators` or `--experimental-transform-types` get Node 25.2.1 to accept the syntax?

## Examples it will need

- [ ] `decorators_compile_then_run_sh.sh` — node's SyntaxError for a .ts file with @logged, tsc's clean check, then the compiled JavaScript running
- [ ] `decorators_legacy_style_tserror.ts` — tsc's TS1241 for a three-argument legacy decorator checked under the standard rules
- [ ] `decorators_context_kinds_sh.sh` — context.kind and context.name for class, method, field and accessor decorators, compiled by tsc and run

## See also

- [Erasable syntax](../../22_TypeScript_Basics/erasable_syntax/README.md) — what Node can strip, and why a decorator is not type syntax
- [Running TypeScript](../../22_TypeScript_Basics/running_typescript/README.md) — what Node strips, and what only tsc can compile
- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — a method decorator is a function that wraps a function
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — experimentalDecorators and the options around it
- [Rust: A `#[retry]` attribute ↗](https://masiarek.github.io/rust-learning-library/37_Procedural_Macros/a_retry_attribute/index.html) — an attribute macro that wraps a function, Rust's nearest decorator
- [Rust: What an attribute is ↗](https://masiarek.github.io/rust-learning-library/27_Modules/what_an_attribute_is/index.html) — attribute syntax in Rust, expanded at compile time

## Sources to start from

- [TC39 — Decorators proposal ↗](https://github.com/tc39/proposal-decorators)
- [TypeScript 5.0 release notes — Decorators ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#decorators)
- [Node.js 24 — TypeScript: type stripping ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html#type-stripping)
