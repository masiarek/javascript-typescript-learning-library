# `new` — the steps a constructor call performs

**Level:** 201 · for anyone who has written `new` without asking what it does

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `new F()` makes an object whose prototype is `F.prototype`, runs `F` with `this` set to it, and returns it — unless `F` returns an object, which replaces it; a returned primitive is ignored, and `new.target` tells `F` whether `new` was used.

**Keywords:** `new`, `new.target`

## What the finished page will answer

- What are the steps of `new F(1)`, and does a hand-written `construct(F, 1)` built from `Object.create` and `F.apply` give the same result?
- What does `new` return when the constructor returns an object, a primitive, or nothing?
- How does `new.target` let one function behave differently with and without `new`, and what is `new.target` inside a base class when a subclass is constructed?
- Which functions refuse `new` (arrows, methods, async functions, generators) and which accept it (bound functions), and what does each refusal throw?

## Examples it will need

- [ ] `constructors_and_new_by_hand_js.js` — new F(1) beside a hand-written construct(F, 1) built from Object.create and apply, with the prototype and fields of both results
- [ ] `constructors_and_new_return_js.js` — constructors that return an object, a primitive and nothing, with what new gave back each time and new.target inside each call
- [ ] `constructors_and_new_plain_function_tserror.ts` — tsc's TS7009 error for new on a plain function, whose result it would have to type as any

## See also

- [Classes](../classes_are_functions/README.md) — a class is the constructor new calls
- [`this`](../../05_Functions/this_is_set_by_the_call/README.md) — new is one more way a call chooses this
- [Arrow functions](../../05_Functions/arrow_functions_and_this/README.md) — the functions new refuses
- [`extends` and `super`](../inheritance_and_super/README.md) — who creates this in a subclass
- [`call`, `apply` and `bind`](../../05_Functions/call_apply_and_bind/README.md) — why new ignores a bound this
- [Rust: A type is not a constructor ↗](https://masiarek.github.io/rust-learning-library/16_Structs/a_type_is_not_a_constructor/index.html) — how Rust builds values without new: Type::new is an ordinary function

## Sources to start from

- [MDN — new ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN — new.target ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
- [ECMA-262 — [[Construct]] ↗](https://tc39.es/ecma262/#sec-ecmascript-function-objects-construct-argumentslist-newtarget)
