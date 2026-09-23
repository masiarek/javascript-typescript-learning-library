# Static members and static blocks — properties of the class itself

**Level:** 201 · for anyone who has written `static create()` and called it on a subclass

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A static member is a property of the class function, not of its instances; `class B extends A` makes `A` the prototype of `B`, so `B` inherits `A`'s statics — and `this.count++` inside an inherited static method creates a separate `count` on `B`.

**Keywords:** `static`, `static {}`

## What the finished page will answer

- Where does a static method live, and why is `new Base().create` `undefined`?
- What is `this` inside a static method called as `Child.create()`, and what does `new this()` build there?
- After `Child.create()` runs `this.count++`, what are `Base.count` and `Child.count`, and how do you keep one shared counter?
- When does a `static { }` block run, in what order relative to static fields, and what private names can it read?
- What does `tsc` report when a static method is called on an instance?

## Examples it will need

- [ ] `static_members_inherited_js.js` — a static counter and factory called on a base class and on a subclass, the prototype link between the two classes, and the two separate counts
- [ ] `static_members_block_order_js.js` — static fields and two static blocks logging as the class is defined, in source order, before any instance exists
- [ ] `static_members_on_instance_tserror.ts` — tsc's TS2576 error for calling a static method on an instance: did you mean to access the static member?

## See also

- [`extends` and `super`](../inheritance_and_super/README.md) — extends links the two classes as well as their instances
- [The prototype chain](../the_prototype_chain/README.md) — why Child.count reads Base.count, then shadows it
- [Classes](../classes_are_functions/README.md) — the function object statics are properties of
- [Private fields](../private_fields/README.md) — static #fields, private to the class
- [Functions are objects](../../05_Functions/functions_are_objects/README.md) — a function holding properties, before classes existed
- [Rust: `impl` blocks ↗](https://masiarek.github.io/rust-learning-library/16_Structs/impl_blocks/index.html) — how Rust spells a static method: an associated function called on the type

## Sources to start from

- [MDN — static ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN — Static initialization blocks ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- [ECMA-262 — ClassStaticBlockDefinitionEvaluation ↗](https://tc39.es/ecma262/#sec-runtime-semantics-classstaticblockdefinitionevaluation)
