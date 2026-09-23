# Eight types — seven primitives and the object

**Level:** 101 · for anyone who has written a line of JavaScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Every value has one of eight types: seven primitives (undefined, null, boolean, number, bigint, string, symbol) and Object; arrays, functions, dates and regular expressions are not types of their own but kinds of object.

**Keywords:** `primitive`, `data types`

## What the finished page will answer

- Which of `undefined`, `null`, `true`, `1`, `1n`, `"s"`, `Symbol()`, `{}`, `[]`, a function, a `Date` and a regex are primitives, and how does `Object(v) === v` tell them apart?
- What can an object do that a primitive cannot — hold properties of its own, change in place, be compared by identity — and what happens when you try each on a string?
- Why does JavaScript have two numeric types, `number` and `bigint`, and what does `typeof` say for each?
- Why can you not add a ninth type, and what does `typeof` say about the `class` you write instead?

## Examples it will need

- [ ] `eight_types_classify_js.js` — twelve sample values split into primitives and objects, with the type each belongs to
- [ ] `eight_types_immutable_primitives_js.js` — attempts to change a string in place and to add a property to it, beside the same on an object

## See also

- [`typeof`](../the_typeof_operator/README.md) — the operator that names the types, with one wrong answer
- [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) — how a primitive gets methods it does not have
- [Values and references](../values_and_references/README.md) — what assignment copies for each kind of value
- [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md) — the same primitives as TypeScript types
- [Rust: The integer types ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/the_integer_types/index.html) — twelve integer types in Rust, where JavaScript has two numeric types
- [Encodings: The shell has no string type ↗](https://masiarek.github.io/encodings-learning-library/11_Tools/sh/index.html) — the shell has one type where JavaScript has eight

## Sources to start from

- [MDN — JavaScript data types and data structures ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures)
- [ECMA-262 — ECMAScript Language Types ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types)
