# Primitive and literal types — `string` versus `"red"`

**Level:** 101 · for JavaScript programmers writing their first types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A literal type has exactly one value: `const alone = "dark"` has the type `"dark"` and passes where `"dark" | "light"` is expected, but the same string inside `{ mode: "dark" }` widens to `string` and is rejected until you add `as const`.

**Keywords:** `literal type`, `as const`, `widening`

## What the finished page will answer

- Why does `const alone = "dark"` pass as a `Mode` while `settings.mode` from `{ mode: "dark" }` is rejected as a `string` (TS2345)?
- What do `let c = "red"`, `const c = "red"` and `let c = "red" as const` each infer, and why does `let` widen?
- What does `as const` do to an object literal besides keeping its literal types: can its properties still be assigned?
- Why does `const s: string = new String("a")` fail, and what is the difference between `string` and `String`?
- Is `boolean` a primitive type or the union `true | false`, and what does a variable declared `let done = false` accept?

## Examples it will need

- [ ] `literal_types_widening_tserror.ts` — tsc's TS2345 for a property that widened to `string`, beside the calls that pass with a `const` and with `as const`
- [ ] `literal_types_wrapper_tserror.ts` — TS2322 for `new String("a")` assigned to `string`, with tsc's note that `String` is a wrapper object

## See also

- [Eight types](../../02_Values_and_Types/eight_types/README.md) — the run-time types that the primitive type names describe
- [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md) — the wrapper objects behind `String` and `Number`
- [Union and intersection types](../union_and_intersection_types/README.md) — joining literal types into a set of allowed values
- [`const` type parameters](../../26_Generics/const_type_parameters/README.md) — keeping literal types through a generic call
- [Template literal types](../../27_Type_Operators/template_literal_types/README.md) — literal types built from string patterns

## Sources to start from

- [TypeScript Handbook — Everyday Types: literal types ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [TypeScript Handbook — Everyday Types: the primitives ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
