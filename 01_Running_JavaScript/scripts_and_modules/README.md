# Scripts and modules — one piece of code under three sets of rules

**Level:** 201 · for anyone who has seen code work in one file and fail in another

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The same line prints `object 1 false` as a script and `undefined undefined true` as a module: a module is always strict, its top-level `this` is `undefined`, and its `var` never becomes a property of `globalThis`.

**Keywords:** `--input-type`, `script goal`, `module goal`

## What the finished page will answer

- What does one line print for `typeof this`, `globalThis.v` and a plain function's `this` under `--input-type=commonjs` and under `--input-type=module`?
- Where does a `.cjs` file fit, given that the same line prints `object undefined false` there?
- Which syntax is legal only in a script (an HTML-like `<!--` comment, `await` as a variable name, `with`) and which only in a module (`import`, `export`, top-level `await`)?
- How does Node choose the rules for an `-e` string with no flag, and what changes when the string contains `import` or top-level `await`?

## Examples it will need

- [ ] `scripts_and_modules_same_line_sh.sh` — one line run as a script, as a .cjs file and as a module, printing typeof this, globalThis.v and a plain function's this for each
- [ ] `scripts_and_modules_syntax_sh.sh` — an HTML-like comment, await as a variable name and top-level await, each tried as script and as module, with the output or the SyntaxError

## See also

- [Strict mode](../strict_mode/README.md) — the strict rules every module gets without asking
- [The global object](../../04_Variables_and_Scope/the_global_object/README.md) — which top-level declarations land on `globalThis`
- [ES modules and CommonJS](../../14_Modules/esm_and_commonjs/README.md) — where CommonJS fits between the two
- [`package.json`](../../14_Modules/package_json_type_and_exports/README.md) — how Node picks the rules for a file

## Sources to start from

- [ECMA-262 — Scripts ↗](https://tc39.es/ecma262/#sec-scripts)
- [ECMA-262 — Modules ↗](https://tc39.es/ecma262/#sec-modules)
- [Node.js 24 — Determining module system ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#determining-module-system)
