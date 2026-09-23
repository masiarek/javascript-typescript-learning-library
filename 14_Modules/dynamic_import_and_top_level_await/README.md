# Dynamic `import()` and top-level `await` — loading a module when you need it

**Level:** 201 · for anyone who wants to load a module only when it is needed

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `import()` is an expression that returns a promise, so it works even in CommonJS, while top-level `await` is ESM-only and holds up every importer: a module that awaits a timer finishes before its importer's first line runs.

**Keywords:** `import()`, `top-level await`

## What the finished page will answer

- In what order do lines print when `main.mjs` imports a module that awaits a 50 ms timer at its top level?
- What does `import()` return, and what does it give a `.cjs` file that cannot use `import` declarations?
- What does `await` at the top level of a `.cjs` file do?
- Does calling `import()` twice for the same file run the module twice?
- How does a computed specifier such as ``import(`./locale/${lang}.mjs`)`` fail when the file is missing, and how do you catch it?

## Examples it will need

- [ ] `dynamic_import_tla_order_sh.sh` — the order of lines when main.mjs imports a module that awaits a 50 ms timer at top level
- [ ] `dynamic_import_from_commonjs_sh.sh` — import() from a .cjs file, the rejection for a computed specifier that does not exist, and the SyntaxError for top-level await in a .cjs file

## See also

- [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md) — the await that top-level await brings to module scope
- [Promises](../../13_Async_and_the_Event_Loop/promises/README.md) — what import() hands back
- [`require` and ES modules](../require_and_esm_interop/README.md) — why require() refuses a module with top-level await
- [`import` and `export`](../import_and_export/README.md) — the static form, linked before any code runs
- [Rust: Conditional compilation ↗](https://masiarek.github.io/rust-learning-library/27_Modules/conditional_compilation/index.html) — the compile-time alternative: Rust decides which code exists before it runs

## Sources to start from

- [MDN — import() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [ECMA-262 — Import Calls ↗](https://tc39.es/ecma262/#sec-import-calls)
- [MDN — await: top level await ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await)
