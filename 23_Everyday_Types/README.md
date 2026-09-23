# 23 — Everyday types

**One line:** Each everyday type names a set of values, and the surprises follow from that: a union of two object types lets you use fewer members, a `readonly` property guards only one path to the object, and a tuple can still `push`.

This chapter covers the types written in ordinary code, starting with the smallest: primitive and literal types, then arrays and tuples, object types, and the two ways to combine types, `|` and `&`. Once shapes can be written, it compares the two ways to name them, `type` and `interface`, and turns to function types and overloads. The last three pages cover `null` under `strictNullChecks`; `any`, `unknown` and `never`, the types at the edges; and enums, which this library replaces with erasable unions.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Primitive and literal types](primitive_and_literal_types/README.md) | 101 | A literal type has exactly one value: `const alone = "dark"` has the type `"dark"` and passes where <code>"dark" &#124; "light"</code> is expected, but the same string inside `{ mode: "dark" }` widens to `string` and is rejected until you add `as const`. | stub |
| [Arrays and tuples](arrays_and_tuples/README.md) | 101 | A tuple type is an array with a type per position, not a fixed-length array: `pair.push(99)` on a `[string, number]` compiles and makes `length` 3, yet tsc still rejects `pair[2]`; only `readonly [string, number]` refuses the `push`. | stub |
| [Object types](object_types/README.md) | 101 | `readonly` on a property stops writes through that type only: assign the object to a variable typed `{ id: number }` and `loose.id = 2` compiles, changes the original, and tsc still rejects `fixed.id = 3` as TS2540. | stub |
| [Union and intersection types](union_and_intersection_types/README.md) | 101 | <code>&#124;</code> and `&` combine sets of values, not lists of members: on <code>Cat &#124; Dog</code> only the shared `name` is usable and `either.meow()` is TS2339, `Cat & Dog` has every member of both, and `string & number` is `never`. | stub |
| [Type aliases and interfaces](type_aliases_and_interfaces/README.md) | 201 | Declare `interface Box` twice and the two declarations merge into one type; declare `type Crate` twice and it is TS2300, a duplicate. And `extends` reports a conflicting property (TS2430), while `&` accepts it and quietly makes it `never`. | stub |
| [Function types](function_types_and_overloads/README.md) | 201 | Callers see only the overload signatures, never the implementation's: `pad("a", 3)` is rejected although <code>(value: string &#124; number, width?: number)</code> would accept it, and a callback may take fewer parameters than its type declares but not more. | stub |
| [`strictNullChecks`](null_and_undefined_in_types/README.md) | 101 | Under `strictNullChecks`, on by default in TypeScript 7, `names.find(...)` is <code>string &#124; undefined</code> and returning it as a `string` is TS2322; switch the check off and the same file compiles, then fails at run time reading `length` of `undefined`. | stub |
| [`any`, `unknown` and `never`](any_unknown_and_never/README.md) | 201 | `any` and `unknown` both accept every value, but `loose.toFixed(2)` on an `any` compiles while the same call on an `unknown` is TS18046; `never` has no values, and even `any` cannot be assigned to it. | stub |
| [Enums](enums_and_alternatives/README.md) | 201 | A numeric `enum` compiles to an object keyed both ways, so `Object.keys` of a two-member enum gives four keys, `0`, `1`, `Up` and `Down`; Node's type stripping refuses an `enum`, and an `as const` object plus a union type does the same job. | stub |
<!-- /lessons -->

## Boundaries

Taking a union apart again, with `typeof`, tags and predicates, is the Narrowing chapter; which of these types may be assigned to which is Type compatibility.
