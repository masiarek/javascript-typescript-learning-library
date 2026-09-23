# `keyof` and `typeof` in types — types from keys and values

**Level:** 201 · for anyone who has written a type annotation

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In a type, `typeof config` reads a value's type and `keyof` lists its keys, so `keyof typeof config` is `"host" | "port"`. But `keyof` of a string index signature is `string | number`, because JavaScript turns number keys into strings.

**Keywords:** `keyof`, `keyof typeof`

## What the finished page will answer

- What is `typeof config` in a type position, and how does it differ from the `typeof` operator that runs?
- What is `keyof typeof config` for `{ host: "localhost", port: 8080 }`, and what does adding `as const` change about `typeof config` but not its keys?
- Why is `keyof { [key: string]: boolean }` `string | number`, and what is `keyof` of a tuple?
- Why does `Object.keys(config)` return `string[]` rather than `(keyof typeof config)[]`?
- Which expressions may follow `typeof` in a type, and why is `typeof fn()` a syntax error?

## Examples it will need

- [ ] `keyof_and_typeof_config_tserror.ts` — the errors that reveal keyof typeof config and keyof of a string index signature
- [ ] `keyof_and_typeof_object_keys_ts.ts` — Object.keys of a value that has one key more than its declared type, showing why the result is string[]

## See also

- [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md) — the run-time typeof, a different operator with the same name
- [Indexed access types](../indexed_access_types/README.md) — looking up the property types that keyof names
- [Property keys](../../06_Objects/property_keys/README.md) — why number keys become strings
- [Structural typing](../../25_Type_Compatibility/structural_typing/README.md) — why an object can carry keys its type does not list

## Sources to start from

- [TypeScript Handbook — Keyof type operator ↗](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [TypeScript Handbook — Typeof type operator ↗](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
