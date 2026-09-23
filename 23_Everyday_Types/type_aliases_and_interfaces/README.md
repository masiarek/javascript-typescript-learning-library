# Type aliases and interfaces — two ways to name a shape

**Level:** 201 · for TypeScript users choosing between type and interface

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Declare `interface Box` twice and the two declarations merge into one type; declare `type Crate` twice and it is TS2300, a duplicate. And `extends` reports a conflicting property (TS2430), while `&` accepts it and quietly makes it `never`.

**Keywords:** `type alias`, `interface`

## What the finished page will answer

- What happens when `interface Box` is declared twice, and when `type Crate` is declared twice?
- Why does `interface Numbered extends Labeled { id: number }` fail with TS2430, while `{ id: string } & { id: number }` compiles until a method is called on `id`?
- Which types can only a `type` alias name: a union, a tuple, a primitive, a mapped type?
- Can a class `implements` an object type alias as well as an interface, and does either leave anything at run time?
- Is a type alias a new type or only a second name: is a `type Meters = number` value assignable to and from `number`?

## Examples it will need

- [ ] `type_aliases_and_interfaces_merge_tserror.ts` — TS2300 twice for a type alias declared twice, while the interface declared twice merges without error
- [ ] `type_aliases_and_interfaces_conflict_tserror.ts` — TS2430 for `extends` with a conflicting `id`, then TS2339 showing that the intersection made `id` `never`

## See also

- [Declaration merging](../../29_Declaration_Files_and_Module_Resolution/declaration_merging_and_augmentation/README.md) — interface merging used on purpose, to extend a library's types
- [Union and intersection types](../union_and_intersection_types/README.md) — what `&` does to two object types
- [Branded types](../../25_Type_Compatibility/branded_types/README.md) — making a real new type where an alias is only a name
- [`abstract` and `implements`](../../28_Classes_in_TypeScript/abstract_classes_and_implements/README.md) — the `implements` clause, which takes an interface or an object type alias
- [Rust: A type alias is not a new type ↗](https://masiarek.github.io/rust-learning-library/16_Structs/type_aliases/index.html) — in Rust too, `type` gives a second name, not a new type
- [Rust: What a trait is ↗](https://masiarek.github.io/rust-learning-library/12_Traits/what_a_trait_is/index.html) — a Rust trait names behaviour where an interface names a shape

## Sources to start from

- [TypeScript Handbook — Everyday Types: type aliases and interfaces ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
- [TypeScript Handbook — Object Types: extension versus intersection ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#interface-extension-vs-intersection)
- [TypeScript Handbook — Declaration Merging: merging interfaces ↗](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces)
