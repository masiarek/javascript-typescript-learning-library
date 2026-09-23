# `extends` and `super` — inheriting, and the `this` you cannot touch before `super()`

**Level:** 201 · for anyone who has written `extends` and a constructor

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In a subclass constructor `this` does not exist until `super()` returns — touching it earlier throws a `ReferenceError` — and the subclass's fields are set only after that, so a base constructor that calls an overridden method sees those fields as `undefined`.

**Keywords:** `extends`, `super`

## What the finished page will answer

- What does touching `this` before `super()` throw, and what does a derived constructor that never calls `super()` throw?
- In what order do the base fields, the base constructor, the subclass fields and the rest of the subclass constructor run?
- Why does a base constructor that calls an overridden method see the subclass's fields as `undefined`?
- What does `super.greet()` call from inside an overriding `greet`, and what `this` does that call get?
- What does `class Stack extends Array` get that `Object.create(Array.prototype)` does not: a working `length`, `Array.isArray`, and `map` returning a `Stack`?
- What does `tsc` report for `this` before `super()` and for a derived constructor with no `super()` call?

## Examples it will need

- [ ] `inheritance_and_super_order_js.js` — a base and a subclass that log every step of construction, including the overridden method call that sees undefined
- [ ] `inheritance_and_super_errors_js.js` — the ReferenceError for this before super(), the ReferenceError for a constructor with no super(), and super.greet() called from an override
- [ ] `inheritance_and_super_rules_tserror.ts` — tsc's TS17009 for this before super() and TS2377 for a derived constructor with no super() call

## See also

- [`new`](../constructors_and_new/README.md) — the steps new performs, which super() takes over
- [Static members and static blocks](../static_members/README.md) — statics are inherited through extends too
- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — the same ReferenceError, for this instead of a variable
- [`readonly` and `override`](../../28_Classes_in_TypeScript/readonly_and_override/README.md) — override, which makes tsc check a method really replaces one
- [Custom errors and `cause`](../../12_Errors/custom_errors_and_cause/README.md) — extends Error, the first subclass most people write
- [Rust: Supertraits ↗](https://masiarek.github.io/rust-learning-library/12_Traits/supertraits/index.html) — how Rust does without inheritance: a supertrait is a requirement, not a parent
- [Rust: What a trait is ↗](https://masiarek.github.io/rust-learning-library/12_Traits/what_a_trait_is/index.html) — how Rust shares behaviour between types with traits

## Sources to start from

- [MDN — extends ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN — super ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [ECMA-262 — The super Keyword ↗](https://tc39.es/ecma262/#sec-super-keyword)
