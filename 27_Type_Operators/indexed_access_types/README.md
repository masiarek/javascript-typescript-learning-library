# Indexed access types — `T["key"]` and `T[number]`

**Level:** 201 · for anyone who has written a type annotation

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Person["age"]` looks a property's type up by name and `T[number]` asks for any element's type, so `(typeof roles)[number]` turns an `as const` array into a union of its strings. The index must be a type: `Person[key]` with a `const key` fails.

**Keywords:** `indexed access type`, `T[number]`, `T[K]`

## What the finished page will answer

- What is `Person["name" | "age"]`, and what happens with a key the type does not have?
- How does `(typeof roles)[number]` turn `["admin", "editor", "viewer"] as const` into a union, and what does it give without `as const`?
- Why is `Person[key]` an error when `key` is a `const`, and what does `Person[typeof key]` give?
- What are `T[0]`, `T[number]` and `T["length"]` for the tuple `[string, number]`?
- What does `Record<string, number>["missing"]` give, and why is `undefined` not part of it?

## Examples it will need

- [ ] `indexed_access_roles_ts.ts` — every role in an as-const array, passed to a function whose parameter type is (typeof roles)[number]
- [ ] `indexed_access_errors_tserror.ts` — the errors for a missing key, a value used as an index and a string outside the Role union

## See also

- [`keyof` and `typeof` in types](../keyof_and_typeof/README.md) — keyof produces the keys this operator looks up
- [`satisfies`, `as` and annotations](../../24_Narrowing/satisfies_as_and_annotations/README.md) — as const, which keeps the array's literals
- [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md) — tuples, whose positions T[0] and T[number] read
- [Index access](../../30_Where_Types_Lie/index_access_and_nouncheckedindexedaccess/README.md) — indexing a value, where the type claims the element exists

## Sources to start from

- [TypeScript Handbook — Indexed access types ↗](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
