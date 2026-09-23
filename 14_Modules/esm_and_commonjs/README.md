# ES modules and CommonJS — two module systems in one runtime

**Level:** 101 · for anyone who has met both require and import

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node settles a file's module system before running it — `.mjs` is ESM, `.cjs` is CommonJS, `.js` follows the nearest `package.json` `"type"` or else its own syntax — and then one line differs: `typeof require` is `"function"` in CommonJS, `"undefined"` in ESM.

**Keywords:** `module.exports`, `.mjs`, `.cjs`, `CommonJS`

## What the finished page will answer

- What do `typeof require`, `typeof __filename` and a top-level `this` print in a `.cjs` file, and in a `.mjs` file with the same line?
- Which system does Node choose for `.mjs`, for `.cjs`, and for a `.js` file with and without `"type": "module"` in the nearest `package.json`?
- What happens to a `.js` file that has no `"type"` to follow but uses `import`, and what does the `MODULE_TYPELESS_PACKAGE_JSON` warning say?
- Why does assigning to an undeclared variable create a global in a `.cjs` file but throw a `ReferenceError` in a `.mjs` file?
- What stands in for `__filename`, `__dirname`, `require` and `module.exports` once a file is an ES module?

## Examples it will need

- [ ] `esm_and_commonjs_same_line_sh.sh` — the same line run as same.cjs, same.mjs and same.js, then as same.js again after a package.json with "type": "module" appears
- [ ] `esm_and_commonjs_detection_sh.sh` — a .js file that uses import, run with no package.json and then beside one without "type", with the warning Node writes to stderr

## See also

- [Scripts and modules](../../01_Running_JavaScript/scripts_and_modules/README.md) — the same code under script rules and under module rules
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — the rules every ES module runs under, whether it asks or not
- [`package.json`](../package_json_type_and_exports/README.md) — the type field, and the rest of what package.json decides
- [`require` and ES modules](../require_and_esm_interop/README.md) — loading one system from the other
- [Rust: Packages and crates ↗](https://masiarek.github.io/rust-learning-library/27_Modules/packages_and_crates/index.html) — the unit Rust builds: a Cargo package and its crates, not a file
- [Rust: One module per file ↗](https://masiarek.github.io/rust-learning-library/27_Modules/one_module_per_file/index.html) — how Rust maps files to modules, with a single system

## Sources to start from

- [Node.js 24 — Packages: determining module system ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#determining-module-system)
- [Node.js 24 — Modules: CommonJS modules ↗](https://nodejs.org/docs/latest-v24.x/api/modules.html)
- [MDN — JavaScript modules ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
