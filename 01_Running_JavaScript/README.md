# 01 — Running JavaScript

**One line:** What a line of JavaScript does depends on how it was run — script or module, strict or sloppy, and on which Node — so the first skill is knowing which of those you are in.

This chapter separates the language from the program that runs it. It starts with what ECMAScript defines and what Node adds, then the ways to run code with `node`. Next come the rules that decide what a line means — script, CommonJS module or ES module, sloppy or strict — and automatic semicolon insertion, which decides where a line ends. It closes with versions: how a feature enters the yearly edition, and how to check that your Node has it before you rely on it.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [The language and the host](the_language_and_the_host/README.md) | 101 | ECMAScript defines `Array`, `JSON` and `Promise` but not `setTimeout`, `process` or `fetch`, which Node adds; a bare `node:vm` context has the first three and none of the others, and the `console` it does have prints nothing. | stub |
| [Running a file with Node](running_a_file_with_node/README.md) | 101 | `node -e '1 + 1'` prints nothing and `node -p '1 + 1'` prints `2`; `node --check` only parses, so it passes a file that calls a function that does not exist, and fails only on a syntax error. | stub |
| [Scripts and modules](scripts_and_modules/README.md) | 201 | The same line prints `object 1 false` as a script and `undefined undefined true` as a module: a module is always strict, its top-level `this` is `undefined`, and its `var` never becomes a property of `globalThis`. | stub |
| [Strict mode](strict_mode/README.md) | 201 | Without `"use strict"`, assigning to a misspelled variable creates a global and writing to a frozen object does nothing; strict mode, which every module and class body gets automatically, turns the first into a `ReferenceError` and the second into a `TypeError`. | stub |
| [Automatic semicolon insertion](semicolons_and_asi/README.md) | 201 | A line break ends a statement only when the next line cannot continue it, but always ends a `return`: `return` followed by a newline returns `undefined`, a line starting with `(` calls the value above it, and one starting with `[` indexes into it. | stub |
| [ECMAScript versions](ecmascript_versions/README.md) | 101 | Since ES2015 an edition comes out every year, named for the year, holding the proposals that reached Stage 4 in time; engines ship in their own order, so Node 25.2.1 has ES2027's `DisposableStack` but not ES2026's `Math.sumPrecise`. | stub |
| [Which features your Node has](which_features_your_node_has/README.md) | 201 | A newer Node is not a superset of an older one: `node --harmony-temporal` gives Node 24 a working `Temporal` but leaves it `undefined` in Node 25.2.1, so test for a feature with `typeof` rather than trusting a version number. | stub |
<!-- /lessons -->

## Boundaries

Module systems, `import` and `package.json` belong to chapter 14; TypeScript's own `strict` flag and running `.ts` files belong to chapter 22.
