# `import` and `export` — named, default and namespace imports

**Level:** 101 · for anyone splitting a program into two files

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Imports are linked before any line runs, so importing a name the module does not export fails with a `SyntaxError` before the file's first `console.log`, and a default export is only an export named `default`: `import { default as d }` reads it.

**Keywords:** `import`, `export`, `export default`, `import * as`

## What the finished page will answer

- What does importing a misspelled name do, and why does the importing file's first line never run?
- Is a default export anything more than an export named `default`, and what does `import { default as d }` give?
- What is the namespace object from `import * as ns`: why does `Object.getOwnPropertyDescriptor` call its properties writable when assigning to one throws a `TypeError`?
- Can an `import` declaration sit inside an `if` block, or below other statements, and when does it take effect?
- What do `export { x as y }`, `export * from` and `export * as ns from` add to a module's list of exports?

## Examples it will need

- [ ] `import_and_export_forms_sh.sh` — default, named, renamed and namespace imports of one module, with the namespace object's keys and its toStringTag
- [ ] `import_and_export_missing_name_sh.sh` — the SyntaxError for a name the module does not export, the exit status, and no output from the importer's first line

## See also

- [Live bindings](../live_bindings/README.md) — what an imported name refers to after the import
- [Dynamic `import()` and top-level `await`](../dynamic_import_and_top_level_await/README.md) — import as an expression, resolved while the program runs
- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — imports are hoisted too, and linked before the first line
- [Built-in error types](../../12_Errors/error_types/README.md) — the SyntaxError a missing export raises
- [Rust: Bringing names in with `use` ↗](https://masiarek.github.io/rust-learning-library/27_Modules/the_use_declaration/index.html) — the Rust counterpart: use binds a name, checked at compile time
- [Rust: Modules and visibility ↗](https://masiarek.github.io/rust-learning-library/27_Modules/modules_and_visibility/index.html) — the Rust default: nothing leaves a module unless marked pub

## Sources to start from

- [MDN — import ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN — export ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [ECMA-262 — Module Namespace Exotic Objects ↗](https://tc39.es/ecma262/#sec-module-namespace-exotic-objects)
