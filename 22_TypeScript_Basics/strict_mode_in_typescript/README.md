# `strict` — the flags it turns on, one by one

**Level:** 201 · for TypeScript users reading a tsconfig.json

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In TypeScript 7 `strict` is on unless you turn it off, and it stands for eight checks: a file that breaks each once gets eight errors with no flag given and none under `--strict false`, while `--alwaysStrict false` is now error TS5108.

**Keywords:** `strict`, `noImplicitAny`, `strictBindCallApply`, `strictPropertyInitialization`, `useUnknownInCatchVariables`, `strictBuiltinIteratorReturn`

## What the finished page will answer

- Which eight flags does `strict` switch on in TypeScript 7, and which line of code does each one reject?
- Why is `strict` on with no flag in TypeScript 7 when it was off through 5.9, and what must an old project write to keep the old behaviour?
- What happened to `alwaysStrict`, once the ninth flag, and what does `--alwaysStrict false` report now?
- Can one check be switched off under `strict`, as in `"strict": true, "strictPropertyInitialization": false`, and which setting wins?
- What type does `err` have in `catch (err)`, and what must the code check before reading `err.message`?
- Which checks are not part of `strict`: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitReturns`, `noImplicitOverride`?

## Examples it will need

- [ ] `strict_in_typescript_eight_checks_sh.sh` — the eight diagnostics tsc gives, with no flag, a file that breaks each strict check once, then the clean run under `--strict false` and TS5108 for `--alwaysStrict false`
- [ ] `strict_in_typescript_catch_unknown_tserror.ts` — tsc's TS18046 for `err.message` in a catch block
- [ ] `strict_in_typescript_catch_unknown_ts.ts` — the message of a caught SyntaxError, read after an `instanceof Error` check

## See also

- [`tsc` and `tsconfig.json`](../tsc_and_tsconfig/README.md) — where the flag is set, and the other defaults that changed
- [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md) — `strictNullChecks`, the check that changes the most code
- [Variance](../../25_Type_Compatibility/variance/README.md) — `strictFunctionTypes` and the method-syntax exception
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — the language's own strict mode, which `alwaysStrict` used to control
- [Index access](../../30_Where_Types_Lie/index_access_and_nouncheckedindexedaccess/README.md) — a check that `strict` leaves off
- [Rust: Strict clippy: denying the panic, and the arithmetic that comes with it ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/strict_lints/index.html) — the same trade in Rust: stricter settings, more errors, fewer crashes

## Sources to start from

- [TSConfig Reference — strict ↗](https://www.typescriptlang.org/tsconfig/#strict)
- [TypeScript 6.0 release notes — Simple Default Changes ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#simple-default-changes)
- [TypeScript blog — Announcing TypeScript 7.0 ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
