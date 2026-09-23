# `object`, `Object` and `{}` — three types that sound alike

**Level:** 201 · for TypeScript users reading types like {} and object

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `{}` does not mean an empty object: it accepts every value except `null` and `undefined`, so `42` and `"text"` pass; `object` accepts only non-primitives and rejects `42`, and `Object` is `{}` plus a check against `Object.prototype`'s members, which rejects `{ toString: 1 }`.

**Keywords:** `object`, `Object`, `{}`

## What the finished page will answer

- Which of `42`, `"text"`, `null`, `undefined`, `[1, 2]` and `() => 1` can be assigned to `{}`, to `Object` and to `object`?
- Why does `Object` reject `{ toString: 1 }` when `{}` accepts it?
- What does `NonNullable<string | null>` compute to, and why is `NonNullable<T>` defined as `T & {}`?
- Which type should a parameter have to mean any non-primitive value, and which to mean anything but `null` or `undefined`?

## Examples it will need

- [ ] `empty_object_types_three_alike_tserror.ts` — one TS2322 per rejected assignment across `{}`, `Object` and `object`, so the accepted values are the lines without errors
- [ ] `empty_object_types_nonnullable_tserror.ts` — the type `NonNullable<string | null>` resolves to, printed through a deliberate TS2322

## See also

- [Eight types](../../02_Values_and_Types/eight_types/README.md) — primitives versus objects, the line `object` draws
- [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md) — why a primitive can satisfy `{}` and `Object`
- [`any`, `unknown` and `never`](../../23_Everyday_Types/any_unknown_and_never/README.md) — the `unknown` type, which also accepts `null` and `undefined`
- [Utility types](../../27_Type_Operators/utility_types/README.md) — the `NonNullable` utility, defined with `{}`

## Sources to start from

- [TypeScript Handbook — More on Functions: object ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
- [TypeScript Handbook — Type Compatibility: assignability table ↗](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
