# 27 — Type operators

**One line:** Types can be computed from values and from other types, so one definition can produce the rest instead of being copied by hand and drifting.

This chapter covers the operators that make types out of other types. It starts with `keyof` and `typeof`, which read keys and a value's type, and indexed access, which looks a property's type up. The utility types come next, as the everyday face of what follows: mapped types walk keys, conditional types with `infer` ask questions, and template literal types build strings. It ends with recursive types, a type that refers to itself, using a JSON value as the example.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`keyof` and `typeof` in types](keyof_and_typeof/README.md) | 201 | In a type, `typeof config` reads a value's type and `keyof` lists its keys, so `keyof typeof config` is <code>"host" &#124; "port"</code>. But `keyof` of a string index signature is <code>string &#124; number</code>, because JavaScript turns number keys into strings. | stub |
| [Indexed access types](indexed_access_types/README.md) | 201 | `Person["age"]` looks a property's type up by name and `T[number]` asks for any element's type, so `(typeof roles)[number]` turns an `as const` array into a union of its strings. The index must be a type: `Person[key]` with a `const key` fails. | stub |
| [Utility types](utility_types/README.md) | 201 | `Pick<User, "nmae">` is an error, but `Omit<User, "nmae">` is accepted and removes nothing: `Omit` takes any string as a key, so a misspelt key passes silently and surfaces later as a missing-property error. | stub |
| [Mapped types](mapped_types/README.md) | 301 | `{ [K in keyof T]: T[K] }` copies each property's `readonly` and `?` along with its type, while the same loop over a plain union of key names copies neither; `-readonly` and `-?` strip them. | stub |
| [Conditional types](conditional_types_and_infer/README.md) | 301 | A conditional type on a bare type parameter runs once per union member: <code>ToArray&lt;string &#124; number&gt;</code> is <code>string[] &#124; number[]</code>, not <code>(string &#124; number)[]</code>, and `ToArray<never>` is `never`. Wrapping both sides in `[ ]` turns the distribution off. | stub |
| [Template literal types](template_literal_types/README.md) | 301 | A template literal type multiplies its unions — `` `${Size}-${Tone}` `` with 2 and 3 members is 6 strings — and `` `${number}px` `` accepts any non-empty text that `Number()` reads as a finite number, so `"1e3px"`, `"0x1Fpx"` and `" 12px"` all pass. | stub |
| [Recursive types](recursive_types/README.md) | 301 | <code>type Json = … &#124; Json[] &#124; { [key: string]: Json }</code> names itself and covers JSON at any depth, yet a value typed by an `interface` with the same fields is rejected, because only type aliases get an implicit index signature. | stub |
<!-- /lessons -->

## Boundaries

Generic functions and constraints are in Generics; the run-time `typeof` operator is in Values and types.
