# `require` and ES modules — loading one system from the other

**Level:** 301 · for anyone mixing old CommonJS code with ES modules

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** On Node 24 and 25, `require()` of an ES module returns its namespace object — unless the module uses top-level `await`, which throws `ERR_REQUIRE_ASYNC_MODULE` — and `import` of a CommonJS file gives `module.exports` as the default export.

**Keywords:** `require`, `createRequire`, `require(esm)`, `ERR_REQUIRE_ASYNC_MODULE`

## What the finished page will answer

- What does `require()` return for an ES module with a named and a default export, and where does the default end up?
- What does `require()` throw for a module with top-level `await`, and why can it not wait?
- What does `import old, { a } from "./old.cjs"` give, and why does a named import fail when the CommonJS file builds `module.exports` with a computed key?
- How does an ES module get a working `require` from `module.createRequire(import.meta.url)`, and what is it still good for?
- Does `require()` of an ES module print a warning on Node 24 and 25, and what does `--trace-require-module` add?

## Examples it will need

- [ ] `require_and_esm_both_ways_sh.sh` — require() of an ES module, of one with top-level await, and import of a CommonJS file, each with what it returned or the error code
- [ ] `require_and_esm_named_exports_sh.sh` — a CommonJS file whose export Node cannot detect, imported by name (SyntaxError) and by default (works)

## See also

- [ES modules and CommonJS](../esm_and_commonjs/README.md) — the two systems, and how Node tells them apart
- [Dynamic `import()` and top-level `await`](../dynamic_import_and_top_level_await/README.md) — the top-level await that makes require() refuse
- [`package.json`](../package_json_type_and_exports/README.md) — conditions that hand require and import different files
- [Module cycles](../module_cycles/README.md) — the cycle error require() raises across the two systems
- [Rust: Two versions of one crate in one binary: what "SemVer compatible" means to Cargo ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/two_versions_of_one_crate/index.html) — the Cargo version of one library loaded twice in one program

## Sources to start from

- [Node.js 24 — Loading ECMAScript modules using require() ↗](https://nodejs.org/docs/latest-v24.x/api/modules.html#loading-ecmascript-modules-using-require)
- [Node.js 24 — ES modules: CommonJS namespaces ↗](https://nodejs.org/docs/latest-v24.x/api/esm.html#commonjs-namespaces)
- [Node.js 24 — module.createRequire() ↗](https://nodejs.org/docs/latest-v24.x/api/module.html#modulecreaterequirefilename)
