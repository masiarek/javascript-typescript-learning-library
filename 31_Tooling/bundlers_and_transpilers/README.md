# Bundlers and transpilers — esbuild, Vite, and what they do to your code

**Level:** 201 · for readers who have shipped JavaScript to a browser

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A transpiler rewrites syntax for older engines — `tsc --target es2019` turns `env.PORT ?? "8080"` into a `!== null && !== void 0` test — and a bundler joins the modules an entry imports into one file; esbuild and Vite do both, without checking types.

**Keywords:** `esbuild`, `Vite`, `bundler`, `transpiler`, `source map`

## What the finished page will answer

- What does `tsc` emit for `??` and `?.` with `--target es2020`, and what with `--target es2019`?
- What does TypeScript 7's `tsc` say to `--target es5`?
- What does `esbuild --bundle` produce from an entry that imports two modules, and what happens to an export nobody imports?
- Does esbuild report a type error in its input, and what does Vite's documentation tell you to run instead?
- What does a source map let a stack trace show, and what does `node --enable-source-maps` change?

## Examples it will need

- [ ] `bundlers_tsc_target_downlevel_sh.sh` — the JavaScript tsc emits for ?? and ?. at --target es2020 and es2019, and the TS5108 error for --target es5
- [ ] `bundlers_esbuild_bundle_sh.sh` — an entry and two modules joined by esbuild --bundle, an unused export dropped, and a type error esbuild does not report
- [ ] `bundlers_source_maps_sh.sh` — a stack trace from compiled output with and without --enable-source-maps

## See also

- [Erasable syntax](../../22_TypeScript_Basics/erasable_syntax/README.md) — what stripping types can do, and what needs a transform
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — `target`, the option that picks the syntax level
- [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md) — the year each piece of syntax arrived
- [`import` and `export`](../../14_Modules/import_and_export/README.md) — the imports a bundler follows
- [Loading scripts](../../21_The_Browser/script_loading/README.md) — the script tag that loads a bundle
- [Rust: A build system is not a compiler ↗](https://masiarek.github.io/rust-learning-library/20_Compilers/build_systems_are_not_compilers/index.html) — a build system is not a compiler
- [Rust: What a compiler does before your program runs ↗](https://masiarek.github.io/rust-learning-library/20_Compilers/what_a_compiler_does/index.html) — what a compiler does before your program runs

## Sources to start from

- [esbuild — TypeScript caveats ↗](https://esbuild.github.io/content-types/#typescript-caveats)
- [Vite — Features: transpile only ↗](https://vite.dev/guide/features#transpile-only)
- [esbuild — API: target ↗](https://esbuild.github.io/api/#target)
