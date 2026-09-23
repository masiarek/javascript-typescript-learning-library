# Mapped types — building one object type from another

**Level:** 301 · for anyone who has used Partial or Readonly

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `{ [K in keyof T]: T[K] }` copies each property's `readonly` and `?` along with its type, while the same loop over a plain union of key names copies neither; `-readonly` and `-?` strip them.

**Keywords:** `mapped type`, `key remapping`, `-readonly`, `-?`

## What the finished page will answer

- Why does `{ [K in keyof T]: T[K] }` keep `readonly` and `?`, while `{ [K in "x" | "y"]: Point[K] }` drops both?
- What do `-readonly` and `-?` remove, and what does `+?` add?
- How does `as` rename keys, as in `` `get${Capitalize<string & K>}` ``, and how does `as never` drop a key?
- What does a mapped type do to an array or a tuple — is `Stringify<[number, boolean]>` a tuple or an object?
- How deep does a mapped type go — is `Readonly<T>` readonly all the way down?

## Examples it will need

- [ ] `mapped_types_modifiers_tserror.ts` — the errors that show which mapped types kept readonly and ? and which dropped them
- [ ] `mapped_types_getters_ts.ts` — an object of getX and getY functions built to a key-remapped type, and what each returns

## See also

- [Utility types](../utility_types/README.md) — the standard library's mapped types
- [`keyof` and `typeof` in types](../keyof_and_typeof/README.md) — keyof T, the key set a mapped type walks
- [Template literal types](../template_literal_types/README.md) — building new key names with as
- [Object types](../../23_Everyday_Types/object_types/README.md) — the readonly and optional modifiers being copied

## Sources to start from

- [TypeScript Handbook — Mapped types ↗](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [TypeScript 4.1 release notes — Key remapping in mapped types ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)
