# Getters and setters — a property that runs code

**Level:** 201 · for anyone who has read a property and had code run

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A getter runs on every read and a setter on every write, but spread, `Object.assign` and `JSON.stringify` call the getter once and keep only the value, so a copied object holds plain data that no longer computes anything.

**Keywords:** `get`, `set`

## What the finished page will answer

- How many times does a getter run when you read the property twice, spread the object, `Object.assign` it and `JSON.stringify` it?
- What does assigning to a getter-only property do in a module, and what does reading a setter-only property return?
- Where does a getter written in a class body live, on the instance or on the prototype, and what does `Object.keys(instance)` show?
- What happens when a setter assigns to its own property name, and how do a backing field or a `#private` field fix it?
- How do you add a getter to an existing object with `Object.defineProperty`, and what does its descriptor look like?

## Examples it will need

- [ ] `getters_and_setters_counting_js.js` — a getter that counts its calls, read directly, spread, assigned and stringified, with the count after each step
- [ ] `getters_and_setters_one_sided_js.js` — a write to a getter-only property and its TypeError, a read of a setter-only property that gives undefined, and a setter that recurses into a RangeError
- [ ] `getters_and_setters_readonly_tserror.ts` — tsc's TS2540 error for assigning to a getter-only property of an object literal

## See also

- [Property descriptors](../property_descriptors/README.md) — an accessor's descriptor has get and set instead of value
- [Copying objects](../copying_objects/README.md) — why a copy keeps the value, not the getter
- [Classes](../../07_Prototypes_and_Classes/classes_are_functions/README.md) — getters in a class body sit on the prototype
- [`Proxy` and `Reflect`](../../17_Metaprogramming/proxy_and_reflect/README.md) — intercepting every property instead of one
- [Rust: Naming conventions ↗](https://masiarek.github.io/rust-learning-library/39_API_Design/naming_conventions/index.html) — how Rust does without properties: a getter is a method, named without get_

## Sources to start from

- [MDN — get ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN — set ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [ECMA-262 — Method Definitions ↗](https://tc39.es/ecma262/#sec-method-definitions)
