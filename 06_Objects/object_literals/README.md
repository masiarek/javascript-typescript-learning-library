# Object literals — shorthand, computed keys and methods

**Level:** 101 · for anyone who has written `{ key: value }`

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An object literal is more than pairs: `{ name }` copies a variable in, `[expr]: v` computes a key at run time, and `__proto__: p` sets the prototype instead of making a key — unless written `["__proto__"]: p`, which makes an ordinary property.

**Keywords:** `object literal`, `shorthand property`, `computed property name`, `__proto__`

## What the finished page will answer

- What does `{ name, [field + "Max"]: 10, greet() {} }` produce, and when is the computed key evaluated?
- What is the difference between `__proto__: p`, `"__proto__": p` and `["__proto__"]: p` in a literal?
- What happens when a literal repeats a key, and why is repeating `__proto__:` a `SyntaxError` before the program runs?
- How does a method written `greet() {}` differ from `greet: function () {}`: can you call `new` on it, and can it use `super`?
- Can a value in a literal refer to the object being built, as in `const o = { a: 1, b: o.a }`?

## Examples it will need

- [ ] `object_literals_shorthand_js.js` — a literal using a shorthand property, a computed key and a method, then Object.keys and the value of each part
- [ ] `object_literals_proto_key_js.js` — the three spellings of __proto__ in a literal, with the prototype and the own keys each one produces
- [ ] `object_literals_duplicate_proto_sh.sh` — a literal that repeats __proto__, rejected with a SyntaxError before its first line runs, and node's exit status

## See also

- [Property keys](../property_keys/README.md) — what a computed key is converted to
- [The prototype chain](../../07_Prototypes_and_Classes/the_prototype_chain/README.md) — what the __proto__ entry links the object to
- [Getters and setters](../getters_and_setters/README.md) — get and set, two more forms a literal accepts
- [Destructuring](../../04_Variables_and_Scope/destructuring/README.md) — the same shorthand, read in the other direction
- [Object types](../../23_Everyday_Types/object_types/README.md) — the type tsc infers for a literal
- [Rust: A type is not a constructor ↗](https://masiarek.github.io/rust-learning-library/16_Structs/a_type_is_not_a_constructor/index.html) — how Rust's struct literal differs: it names a declared type

## Sources to start from

- [MDN — Object initializer ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN — Method definitions ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [ECMA-262 — Object Initializer ↗](https://tc39.es/ecma262/#sec-object-initializer)
