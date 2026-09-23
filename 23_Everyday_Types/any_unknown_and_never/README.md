# `any`, `unknown` and `never` — checking switched off, the top type, and the bottom type

**Level:** 201 · for TypeScript users handling values of uncertain type

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `any` and `unknown` both accept every value, but `loose.toFixed(2)` on an `any` compiles while the same call on an `unknown` is TS18046; `never` has no values, and even `any` cannot be assigned to it.

**Keywords:** `any`, `unknown`, `never`

## What the finished page will answer

- Why does `loose.toFixed(2)` compile when `loose` is `any` and holds a string, and what happens when it runs?
- Which tests make an `unknown` usable, `typeof`, `instanceof` or a type predicate, and what does TS18046 say before them?
- Why is `any` assignable to `number` but not to `never` (TS2322), and `unknown` assignable to neither?
- What is the return type of a function that always throws, and why can its result be assigned to a `string`?
- Where does `never` appear without being written: in `string & number`, in a union narrowed to nothing, in an exhausted `switch`?

## Examples it will need

- [ ] `any_unknown_never_assignability_tserror.ts` — TS18046 for a method call on `unknown`, TS2322 for `unknown` to `number` and for `any` to `never`, and no error on the other `any` lines
- [ ] `any_unknown_never_runtime_sh.sh` — a clean tsc check of `loose.toFixed(2)` on an `any` that holds a string, then Node's TypeError

## See also

- [`any` is contagious](../../30_Where_Types_Lie/any_is_contagious/README.md) — how one `any` switches checking off downstream
- [External data](../../30_Where_Types_Lie/json_parse_and_external_data/README.md) — `JSON.parse`, where most `any` comes from
- [Exhaustiveness checking](../../24_Narrowing/exhaustiveness_with_never/README.md) — `never` put to work catching a forgotten case
- [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md) — the tests that turn an `unknown` into something usable
- [Rust: The never type `!` ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/the_never_type/index.html) — the Rust type of an expression that never finishes

## Sources to start from

- [TypeScript Handbook — More on Functions: unknown ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)
- [TypeScript Handbook — Type Compatibility: any, unknown and never ↗](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
