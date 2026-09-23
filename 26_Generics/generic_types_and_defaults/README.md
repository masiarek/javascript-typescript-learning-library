# Generic types — interfaces, classes and default type arguments

**Level:** 201 · for anyone who has used a generic type such as Promise

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** With nothing to infer from, `new Stack()` becomes `Stack<unknown>` and accepts any push; a default `<T = string>` makes `new Queue()` a `Queue<string>`; and the standard library's `new Map()` is `Map<any, any>`, which checks nothing.

**Keywords:** `generic class`, `generic interface`, `default type argument`

## What the finished page will answer

- What type does `new Stack()` get when nothing is passed and `T` has no default, and what can you then push onto it?
- What does a default `<T = string>` change for `new Queue()`, for `Queue<number>` and for a bare `Queue` annotation?
- Why is `new Map()` a `Map<any, any>` while `new Set()` is a `Set<unknown>`, and how do `new Map<string, number>()` or an annotation fix it?
- Why can a static member of `class Stack<T>` not use `T`, and what does TS2302 say?
- Why must a defaulted type parameter come after the required ones, and what does TS2706 say about `<T = string, U>`?

## Examples it will need

- [ ] `generic_types_no_argument_sh.sh` — the declarations tsc emits for new Stack(), new Queue(), new Map() and new Set(): unknown, the default, any and unknown
- [ ] `generic_types_defaults_tserror.ts` — the TS2302 error for a static member using T and the TS2706 error for a required parameter after a defaulted one
- [ ] `generic_types_stack_ts.ts` — a Stack of numbers and a default Queue in use, with their contents after each push and pop

## See also

- [Type aliases and interfaces](../../23_Everyday_Types/type_aliases_and_interfaces/README.md) — the two ways to name a shape, both of which take parameters
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — the collections whose empty constructors are typed differently
- [`any` is contagious](../../30_Where_Types_Lie/any_is_contagious/README.md) — where the any from new Map() goes next
- [Static members and static blocks](../../07_Prototypes_and_Classes/static_members/README.md) — static members belong to the class, which has no single T
- [Rust: Generic enums ↗](https://masiarek.github.io/rust-learning-library/22_Generics/generic_enums/index.html) — generic enums in Rust, where Option is ordinary library code

## Sources to start from

- [TypeScript Handbook — Generic classes ↗](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes)
- [TypeScript Handbook — Generic parameter defaults ↗](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults)
