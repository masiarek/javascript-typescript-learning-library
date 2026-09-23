# ToPrimitive — how an object becomes a number or a string

**Level:** 301 · for anyone who has wondered why an object prints as [object Object]

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** When an operator needs a primitive from an object it passes a hint — `"number"`, `"string"` or `"default"` — to `Symbol.toPrimitive`, or else tries `valueOf` then `toString` (a string hint reverses the order); `Date` treats `"default"` as string, so `date + 1` concatenates.

**Keywords:** `ToPrimitive`, `Symbol.toPrimitive`, `valueOf`, `toString`

## What the finished page will answer

- Which hint do unary `+`, a template literal, `+` with a string, and `==` pass to `Symbol.toPrimitive`?
- For an object with both `valueOf` and `toString`, what do `obj + 1`, `` `${obj}` `` and `obj * 2` return?
- Why is `typeof (new Date(0) + 1)` `"string"` while `typeof (new Date(0) - 1)` is `"number"`?
- What happens when every conversion method returns an object, and when the object has no prototype at all?

## Examples it will need

- [ ] `toprimitive_hints_js.js` — the hint each operator passes, logged from inside Symbol.toPrimitive
- [ ] `toprimitive_valueof_tostring_js.js` — an object with valueOf and toString through six operators, then a Date through + and -
- [ ] `toprimitive_failure_js.js` — the TypeError for an object whose conversions all return objects, and for Object.create(null)

## See also

- [Well-known symbols](../../17_Metaprogramming/well_known_symbols/README.md) — `Symbol.toPrimitive` among the language's other hooks
- [The `+` operator](../the_plus_operator/README.md) — the operator that passes the default hint
- [`===` and `==`](../strict_and_loose_equality/README.md) — `==` converts an object this way too
- [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md) — wrapper objects converting back to their primitives
- [Rust: Debug and Display ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/debug_vs_display/index.html) — in Rust, two text forms, and only one is generated for you

## Sources to start from

- [MDN — Symbol.toPrimitive ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)
- [ECMA-262 — ToPrimitive ↗](https://tc39.es/ecma262/#sec-toprimitive)
- [ECMA-262 — OrdinaryToPrimitive ↗](https://tc39.es/ecma262/#sec-ordinarytoprimitive)
