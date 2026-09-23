# TypeScript 7 — the compiler ported to Go

**Level:** 101 · for anyone who installs TypeScript today

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** TypeScript 7 is the compiler ported to Go: `bin/tsc` in the npm package is a two-line Node script that starts a native executable which `go version -m` reports as built by go1.26.4 from `microsoft/typescript-go`, and `require("typescript")` now returns only a version.

**Keywords:** `TypeScript 7`, `typescript-go`, `--checkers`, `--singleThreaded`

## What the finished page will answer

- What does `node_modules/typescript/bin/tsc` contain, and which package holds the executable it starts on Linux x64 and on macOS arm64?
- How long does `tsc` take over this library's examples compared with TypeScript 6's `tsc6` from `@typescript/typescript6`, measured on one machine?
- What do `--checkers`, `--builders` and `--singleThreaded` change, and can the number of checkers change a result?
- Why does `require("typescript")` return only `{ version, versionMajorMinor }`, and what do tools that need the compiler API, such as typescript-eslint, install instead?
- Which TypeScript 6 deprecations are errors in 7.0, and what does `--target es5` report?

## Examples it will need

- [ ] `typescript_7_native_binary_sh.sh` — the two-line Node shim in `bin/tsc`, `tsc --version`, and a check that the executable it starts sits in the `@typescript/typescript-<platform>-<arch>` package for the current machine
- [ ] `typescript_7_no_api_js.js` — the keys of the `typescript` package when imported in 7.0: only the version fields
- [ ] `typescript_7_removed_options_sh.sh` — the TS5108 and TS5102 errors tsc 7.0.2 gives for `--target es5`, `--moduleResolution node`, `--baseUrl` and `--outFile`

## See also

- [`tsc` and `tsconfig.json`](../tsc_and_tsconfig/README.md) — the defaults TypeScript 6 changed and 7 kept
- [Editor setup](../../31_Tooling/editor_setup/README.md) — the TypeScript 7 language server in VS Code and Zed
- [ESLint](../../31_Tooling/linting_with_eslint/README.md) — typescript-eslint, which still needs the TypeScript 6 API
- [Documentation](../../32_Resources/documentation/README.md) — where the announcements and the handbook live
- [Rust: rustup: the `rustc` you run is not the compiler ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/rustup/index.html) — another command on PATH that only stands in for the compiler
- [Rust: Pinning the toolchain: which compiler verified the answer keys? ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/pinning_the_toolchain/index.html) — pinning the compiler that verified the answer keys, in Rust

## Sources to start from

- [TypeScript blog — Announcing TypeScript 7.0 ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
- [TypeScript blog — A 10x Faster TypeScript ↗](https://devblogs.microsoft.com/typescript/typescript-native-port/)
- [GitHub — microsoft/typescript-go ↗](https://github.com/microsoft/typescript-go)
