# The prototype chain — where a missing property is looked up next

**Level:** 201 · for anyone who has wondered where `toString` comes from

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Reading a property an object lacks walks up its prototype chain until `null`; writing one does not walk: it creates an own property that shadows the inherited one — unless the inherited property is a setter, which runs, or read-only, which makes the write fail.

**Keywords:** `Object.create`, `Object.getPrototypeOf`, `Object.setPrototypeOf`, `__proto__`

## What the finished page will answer

- Which objects does a lookup of `dog.describe` visit, in order, and how do you print that chain?
- What happens to the prototype when you assign `dog.legs = 3`, and what happens instead when the inherited `legs` is a setter or read-only?
- What is missing from an object made with `Object.create(null)`, and what does putting it in a template literal throw?
- What is the difference between `Object.getPrototypeOf(x)`, `x.__proto__` and `F.prototype`?
- How long is the chain of a plain object, an array, a function and a class instance?

## Examples it will need

- [ ] `prototype_chain_walk_js.js` — the chain of a plain object, an array, a function, a class instance and Object.create(null), one arrow-separated line each, ending in null
- [ ] `prototype_chain_shadowing_js.js` — an assignment that shadows an inherited property, one that runs an inherited setter, and one refused by a read-only prototype property with its TypeError
- [ ] `prototype_chain_create_any_ts.ts` — Object.create, which tsc types as any, so a misspelled property type-checks and the TypeError appears only when Node runs it

## See also

- [Own and inherited properties](../own_and_inherited_properties/README.md) — telling own properties from inherited ones
- [Classes](../classes_are_functions/README.md) — the chain a class builds for you
- [Getters and setters](../../06_Objects/getters_and_setters/README.md) — why an inherited setter runs instead of being shadowed
- [Property descriptors](../../06_Objects/property_descriptors/README.md) — the writable flag that blocks shadowing
- [`instanceof`](../instanceof/README.md) — the operator that walks this chain
- [Rust: Method resolution ↗](https://masiarek.github.io/rust-learning-library/12_Traits/method_resolution/index.html) — how Rust's dot searches instead: at compile time, through derefs

## Sources to start from

- [MDN — Inheritance and the prototype chain ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [ECMA-262 — OrdinaryGet ↗](https://tc39.es/ecma262/#sec-ordinaryget)
- [ECMA-262 — OrdinarySetWithOwnDescriptor ↗](https://tc39.es/ecma262/#sec-ordinarysetwithowndescriptor)
