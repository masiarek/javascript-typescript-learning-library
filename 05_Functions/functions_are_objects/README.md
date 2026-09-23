# Functions are objects — properties, `length`, `name`, and passing them around

**Level:** 101 · for anyone who has passed a function as an argument

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A function is an object: it takes new properties, and its own `length` stops counting at the first default parameter — `(a, b = 1, c) => {}` has length `1` — while `name` is inferred from the variable an anonymous function is assigned to.

**Keywords:** `fn.length`, `fn.name`

## What the finished page will answer

- What is `length` for `(a, b)`, `(a, b = 1, c)`, `(...all)` and `({ a, b })`?
- Where does an anonymous function's `name` come from, and what `name` do a bound function, a getter and a class get?
- What happens when you assign to `fn.name` in a module, and how does `Object.defineProperty` change it anyway?
- Can a function keep a call count in a property of itself, and how does that compare with keeping it in a closure?

## Examples it will need

- [ ] `functions_are_objects_length_name_js.js` — length and name for a dozen function shapes: plain, defaults, rest, destructured, anonymous, arrow, method, getter, bound, class
- [ ] `functions_are_objects_readonly_name_js.js` — an assignment to fn.name that throws a TypeError in a module, then the same rename done with Object.defineProperty
- [ ] `functions_are_objects_expando_ts.ts` — a call counter stored as a property of its own function, which tsc accepts as an expando declaration, and the count after two calls

## See also

- [Higher-order functions](../higher_order_functions/README.md) — passing a function to another function as a value
- [Parameters](../parameters_defaults_and_rest/README.md) — the defaults and rest parameters length stops at
- [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md) — why typeof says function for this one kind of object
- [Property descriptors](../../06_Objects/property_descriptors/README.md) — why name and length refuse a plain assignment
- [Rust: Function pointers ↗](https://masiarek.github.io/rust-learning-library/23_Closures/function_pointers/index.html) — how Rust holds a function: eight bytes of code address, no properties

## Sources to start from

- [MDN — Function: length ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
- [MDN — Function: name ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
- [ECMA-262 — SetFunctionName ↗](https://tc39.es/ecma262/#sec-setfunctionname)
