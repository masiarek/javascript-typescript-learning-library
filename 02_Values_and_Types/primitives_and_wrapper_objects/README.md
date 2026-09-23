# Primitives and wrappers — why `"abc".length` works and `new String` is a trap

**Level:** 201 · for anyone who has called a method on a string and wondered where it came from

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `"abc".length` works because the lookup wraps the string in a temporary `String` object; `new String("abc")` keeps the wrapper, so `typeof` says `"object"`, two equal ones are not `===`, and `new Boolean(false)` is truthy.

**Keywords:** `new String`, `new Number`, `new Boolean`, `wrapper object`

## What the finished page will answer

- What do `typeof "abc"` and `typeof new String("abc")` return, and is `new String("a") === new String("a")`?
- What happens to `s.note = 1` on a string primitive in sloppy mode, and in strict mode?
- Inside a method added to `String.prototype`, is `this` the primitive or a wrapper, and does strict mode change the answer?
- Why do `Symbol` and `BigInt` refuse `new`, and how does `Object()` give you their wrappers anyway?
- What do `new Boolean(false) ? 1 : 2` and `"abc" instanceof String` return, and why?

## Examples it will need

- [ ] `primitives_and_wrappers_typeof_js.js` — typeof, ===, truthiness and instanceof for three primitives beside their wrapper objects
- [ ] `primitives_and_wrappers_this_cjs.cjs` — typeof this inside a String.prototype method, in sloppy and in strict mode, and a property set on a primitive

## See also

- [Eight types](../eight_types/README.md) — which primitives have wrappers at all
- [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md) — why a wrapper around `false` is truthy
- [ToPrimitive](../../03_Equality_and_Coercion/toprimitive/README.md) — how a wrapper turns back into its primitive
- [String methods](../../09_Strings_and_Unicode/string_methods/README.md) — the methods a string borrows from `String.prototype`
- [Ruby text: `String.new` is binary; `""` is not ↗](https://masiarek.github.io/ruby-text-learning-library/01_Strings_Carry_an_Encoding/string_new_is_binary/index.html) — in Ruby too, a constructor and a literal make different strings

## Sources to start from

- [MDN — Primitive ↗](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [MDN — String primitives and String objects ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects)
- [ECMA-262 — ToObject ↗](https://tc39.es/ecma262/#sec-toobject)
