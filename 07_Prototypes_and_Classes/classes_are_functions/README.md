# Classes — syntax over prototypes, with a few real differences

**Level:** 201 · for anyone who has written `class` and wondered what it builds

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A class is a function — `typeof` says `"function"` and its methods sit on `prototype` — but unlike a constructor function it throws when called without `new`, cannot be used above its declaration, runs its body in strict mode, and makes its methods non-enumerable.

**Keywords:** `class`

## What the finished page will answer

- What do `typeof Point`, `Point.prototype.constructor === Point` and `Object.getOwnPropertyNames(Point.prototype)` print for a small class?
- What does calling a class without `new` throw, and what does the same call do to an old constructor function in a module and in a sloppy script?
- Why does `new Later()` above `class Later {}` throw a `ReferenceError`, while a function declaration can be called early?
- What does `for...in` over an instance list for a class, and for the same type written as a constructor function?
- Is the code inside a class body strict even in a sloppy `.cjs` file, and how does an assignment to an undeclared name show it?
- What does `tsc` report when a class is called without `new`?

## Examples it will need

- [ ] `classes_are_functions_side_by_side_js.js` — a class and the equivalent constructor function side by side: typeof, prototype methods, enumerability, and what for...in lists for each
- [ ] `classes_are_functions_strict_body_cjs.cjs` — a sloppy CommonJS file where an assignment to an undeclared name works at top level but throws a ReferenceError inside a class method
- [ ] `classes_are_functions_no_new_tserror.ts` — tsc's TS2348 error for calling a class without new: did you mean to include new?

## See also

- [`new`](../constructors_and_new/README.md) — what new does with the function a class is
- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — why a class cannot be used above its declaration
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — the mode every class body runs in
- [The prototype chain](../the_prototype_chain/README.md) — the chain a class sets up
- [Parameter properties](../../28_Classes_in_TypeScript/parameter_properties/README.md) — class syntax TypeScript adds and Node cannot strip
- [Rust: A type is not a constructor ↗](https://masiarek.github.io/rust-learning-library/16_Structs/a_type_is_not_a_constructor/index.html) — how Rust differs: a type is not callable, the class here is
- [Rust: `impl` blocks ↗](https://masiarek.github.io/rust-learning-library/16_Structs/impl_blocks/index.html) — how Rust keeps methods apart from data, in impl blocks

## Sources to start from

- [MDN — Classes ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN — class ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [ECMA-262 — ClassDefinitionEvaluation ↗](https://tc39.es/ecma262/#sec-runtime-semantics-classdefinitionevaluation)
