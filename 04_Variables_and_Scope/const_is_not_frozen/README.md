# `const` is not frozen — the binding is fixed, the object is not

**Level:** 101 · for anyone who has pushed to a const array and been surprised it worked

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `const` fixes the binding, not the value: `const list = [1]` still lets you `push`, only `list = []` throws, and even `Object.freeze` stops at the first level, so a frozen object's array property still takes new items.

**Keywords:** `const`, `immutable binding`

## What the finished page will answer

- What does `list.push(2)` do to a `const` array, and what does `list = []` do?
- Which error does assigning to a property of a frozen object give in a module, and what happens in sloppy mode?
- Why can you still push to an array inside a frozen object, and what would a deep freeze have to do?
- What do TypeScript's `as const` and `Readonly<T>` catch at compile time, and does any of it remain at run time?

## Examples it will need

- [ ] `const_is_not_frozen_mutation_js.js` — a const array and a const object changed in place, then the TypeError from reassigning the binding
- [ ] `const_is_not_frozen_shallow_freeze_js.js` — a frozen object whose nested array still grows, then a recursive deep freeze that stops it
- [ ] `const_is_not_frozen_readonly_tserror.ts` — tsc's diagnostics for push on an as const array (TS2339) and assignment to a Readonly property (TS2540)

## See also

- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — the three locks, and why all of them are shallow
- [Values and references](../../02_Values_and_Types/values_and_references/README.md) — why a `const` reference sees every change
- [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md) — `readonly` arrays, the compile-time version
- [`var`, `let` and `const`](../var_let_and_const/README.md) — the three declarations side by side
- [Rust: Interior mutability ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/interior_mutability/index.html) — a Rust binding without `mut` freezes the value, except through interior mutability
- [Ruby text: String literals are chilled, not frozen ↗](https://masiarek.github.io/ruby-text-learning-library/05_Literals/literals_are_chilled/index.html) — frozen, chilled and mutable strings in Ruby
- [Concurrency: Immutability ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/safety_in_languages/immutability/index.html) — why data that truly cannot change is safe to share

## Sources to start from

- [MDN — const ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN — Object.freeze() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
