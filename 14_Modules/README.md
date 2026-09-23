# 14 — Modules

**One line:** Node runs two module systems side by side, and a file's extension or the nearest `package.json` settles which one it gets before a single line of it runs.

The chapter starts with the two systems and how Node picks one for each file. Then the ES module syntax, in the order a reader meets it: `import` and `export`, the live bindings they create, `import()` and top-level `await`, and `import.meta`. Packages come next, whose `exports` field decides which files outsiders may load, then `require()` of an ES module, the bridge between the systems. Cycles come last, because they make the loading order visible.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [ES modules and CommonJS](esm_and_commonjs/README.md) | 101 | Node settles a file's module system before running it — `.mjs` is ESM, `.cjs` is CommonJS, `.js` follows the nearest `package.json` `"type"` or else its own syntax — and then one line differs: `typeof require` is `"function"` in CommonJS, `"undefined"` in ESM. | stub |
| [`import` and `export`](import_and_export/README.md) | 101 | Imports are linked before any line runs, so importing a name the module does not export fails with a `SyntaxError` before the file's first `console.log`, and a default export is only an export named `default`: `import { default as d }` reads it. | stub |
| [Live bindings](live_bindings/README.md) | 201 | An imported name is a read-only view of the exporter's variable: after the exporter runs `count += 1` the importer reads 1, assigning to the import throws a `TypeError`, and a CommonJS destructured copy still reads 0. | stub |
| [Dynamic `import()` and top-level `await`](dynamic_import_and_top_level_await/README.md) | 201 | `import()` is an expression that returns a promise, so it works even in CommonJS, while top-level `await` is ESM-only and holds up every importer: a module that awaits a timer finishes before its importer's first line runs. | stub |
| [`import.meta`](import_meta/README.md) | 201 | `import.meta.url` is a `file:` URL, not a path — a folder named `meta dir` comes back as `meta%20dir` — and Node adds `filename`, `dirname`, `resolve()` and `main` to the same object, which a `.cjs` file cannot even mention. | stub |
| [`package.json`](package_json_type_and_exports/README.md) | 201 | Once a package has an `"exports"` field, any file it does not list is off limits — `require("greet/internal.cjs")` throws `ERR_PACKAGE_PATH_NOT_EXPORTED` although the file is on disk — and its `import` and `require` conditions can give the two systems different files. | stub |
| [`require` and ES modules](require_and_esm_interop/README.md) | 301 | On Node 24 and 25, `require()` of an ES module returns its namespace object — unless the module uses top-level `await`, which throws `ERR_REQUIRE_ASYNC_MODULE` — and `import` of a CommonJS file gives `module.exports` as the default export. | stub |
| [Module cycles](module_cycles/README.md) | 301 | In a cycle one module runs before the other has finished: an ES module reading the other's `const` at top level throws `ReferenceError` (the binding is still in its temporal dead zone), while CommonJS hands over a half-filled `exports` and reads `undefined`. | stub |
<!-- /lessons -->

## Boundaries

Turning `import.meta.url` into a file path belongs to the Node runtime chapter, and how `tsc` resolves the same specifiers belongs to the module-resolution chapter.
