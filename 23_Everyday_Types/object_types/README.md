# Object types — optional, `readonly` and index signatures

**Level:** 101 · for JavaScript programmers writing their first types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `readonly` on a property stops writes through that type only: assign the object to a variable typed `{ id: number }` and `loose.id = 2` compiles, changes the original, and tsc still rejects `fixed.id = 3` as TS2540.

**Keywords:** `optional property`, `index signature`, `readonly`

## What the finished page will answer

- Why does assigning a `{ readonly id: number }` to a `{ id: number }` variable compile, and what does the original object hold after `loose.id = 2`?
- What is the difference between `label?: string` and `label: string | undefined`, and what does `exactOptionalPropertyTypes` report for `{ label: undefined }` (TS2375)?
- What type does `scores["nobody"]` have under `{ [name: string]: number }`, and what does it print?
- Why does `{ [k: string]: number; name: string }` fail with TS2411, and how do you type a record with one differently typed key?
- Does `readonly` freeze anything at run time, compared with `Object.freeze`?

## Examples it will need

- [ ] `object_types_readonly_alias_sh.sh` — tsc's TS2540 for the direct write and nothing for the write through a mutable alias, then Node printing the changed id
- [ ] `object_types_optional_tserror.ts` — TS2375 for `{ label: undefined }` under `exactOptionalPropertyTypes`, and TS2411 for a named property that breaks an index signature

## See also

- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — the run-time lock that `readonly` is not
- [Type aliases and interfaces](../type_aliases_and_interfaces/README.md) — naming an object type once and reusing it
- [Excess property checks](../../25_Type_Compatibility/excess_property_checks/README.md) — why an object literal with an extra key is refused
- [Index access](../../30_Where_Types_Lie/index_access_and_nouncheckedindexedaccess/README.md) — index signatures that promise a value is present
- [`readonly` and `override`](../../28_Classes_in_TypeScript/readonly_and_override/README.md) — the same modifier on class fields
- [Rust: `Option` fields: modelling what may be absent ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/option_fields/index.html) — how Rust marks a field that may be missing

## Sources to start from

- [TypeScript Handbook — Object Types: property modifiers ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#property-modifiers)
- [TypeScript Handbook — Object Types: index signatures ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
- [TSConfig Reference — exactOptionalPropertyTypes ↗](https://www.typescriptlang.org/tsconfig/#exactOptionalPropertyTypes)
