# Recursive types — a type for any JSON value

**Level:** 301 · for anyone who has typed data read from a file

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `type Json = … | Json[] | { [key: string]: Json }` names itself and covers JSON at any depth, yet a value typed by an `interface` with the same fields is rejected, because only type aliases get an implicit index signature.

**Keywords:** `recursive type`, `implicit index signature`

## What the finished page will answer

- How can `type Json` mention itself, and how deep a value does it accept?
- Why is a value typed by `interface User` rejected as `Json` when the same fields under `type User` are accepted?
- Why are `new Date()` and `{ a: undefined }` rejected, when `JSON.stringify` handles both?
- Which values does `Json` accept that JSON cannot hold — what does `JSON.stringify(NaN)` produce?
- When does tsc give up on a recursive type with TS2589, 'Type instantiation is excessively deep and possibly infinite'?

## Examples it will need

- [ ] `recursive_types_json_tserror.ts` — the errors for an interface value, a Date and an undefined field assigned to Json
- [ ] `recursive_types_nan_ts.ts` — JSON.stringify of values the Json type accepts, including NaN and Infinity, which come out as null
- [ ] `recursive_types_depth_tserror.ts` — the TS2589 error from a recursive type that counts too deep

## See also

- [JSON](../../06_Objects/json/README.md) — what JSON.stringify drops, changes and refuses
- [Type aliases and interfaces](../../23_Everyday_Types/type_aliases_and_interfaces/README.md) — where aliases and interfaces behave differently
- [External data](../../30_Where_Types_Lie/json_parse_and_external_data/README.md) — what JSON.parse returns instead of Json: any
- [Run-time validation](../../30_Where_Types_Lie/runtime_validation/README.md) — checking at run time that a value really is Json
- [Rust: A generic recursive type ↗](https://masiarek.github.io/rust-learning-library/22_Generics/a_generic_recursive_type/index.html) — in Rust a Box must break the cycle; a type alias needs nothing

## Sources to start from

- [TypeScript 3.7 release notes — More recursive type aliases ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases)
- [TypeScript issue 15300 — Index signature is missing in type (only on interfaces) ↗](https://github.com/microsoft/TypeScript/issues/15300)
