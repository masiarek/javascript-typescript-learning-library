# Declaration merging — adding to an interface, a module or the global scope

**Level:** 301 · for anyone who has extended a library's types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Two `interface User` declarations merge into one type that needs both fields, while two `type` aliases with one name are an error; merging into the global `Array` interface adds a type, not code — `[1, 2, 3].last()` type-checks, then throws `TypeError`.

**Keywords:** `declaration merging`, `declare global`, `declare module`, `module augmentation`

## What the finished page will answer

- What type do two `interface User` declarations produce, and what error do two `type Point` aliases give?
- What does `declare global { interface Array<T> { last(): T | undefined } }` change, and what happens when `[1, 2, 3].last()` runs?
- How do you add a property to a third-party module's type with `declare module "..."`, and why must the augmenting file be a module?
- When two merged interfaces declare the same method, in which order do the overloads end up?
- Which declarations merge — interfaces, namespaces, a class with an interface of the same name — and which are duplicates?

## Examples it will need

- [ ] `declaration_merging_interfaces_tserror.ts` — the missing-property error that shows two interfaces merged, and TS2300 for two type aliases
- [ ] `declaration_merging_global_array_sh.sh` — tsc's silence for [1, 2, 3].last(), Node's TypeError, then the same call after the method is really added to Array.prototype

## See also

- [Declaration files](../declaration_files/README.md) — the declare keyword augmentation relies on
- [Type aliases and interfaces](../../23_Everyday_Types/type_aliases_and_interfaces/README.md) — the difference between interfaces and aliases that matters here
- [The global object](../../04_Variables_and_Scope/the_global_object/README.md) — the global scope declare global describes
- [The prototype chain](../../07_Prototypes_and_Classes/the_prototype_chain/README.md) — the prototype where a real last() method would have to go
- [Rust: Extension traits ↗](https://masiarek.github.io/rust-learning-library/12_Traits/extension_traits/index.html) — the Rust way to add a method to a foreign type, with code behind it

## Sources to start from

- [TypeScript Handbook — Declaration merging ↗](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
- [TypeScript Handbook — Global augmentation ↗](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation)
