# Own and inherited properties — `Object.hasOwn`, `in` and `for...in`

**Level:** 201 · for anyone who has used `hasOwnProperty` without knowing why

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `in` and `for...in` also see inherited properties, while `Object.hasOwn` and `Object.keys` see only the object's own; and an object made with `Object.create(null)` has no `hasOwnProperty` method to call, which is the gap `Object.hasOwn` fills.

**Keywords:** `Object.hasOwn`, `in`, `for...in`, `hasOwnProperty`

## What the finished page will answer

- What do `'x' in obj`, `Object.hasOwn(obj, 'x')` and `obj.x !== undefined` answer for an own property, an inherited one, one whose value is `undefined`, and a missing one?
- Which keys does `for...in` visit on an object whose prototype has enumerable properties, and in what order?
- Why does `obj.hasOwnProperty('x')` throw for an object made with `Object.create(null)`, and what did code write before `Object.hasOwn` arrived in ES2022?
- Which listings see inherited keys: `Object.keys`, `Object.entries`, `Object.getOwnPropertyNames`, spread, `for...in`?
- Why is `'toString' in {}` true while `for...in` over `{}` lists nothing?

## Examples it will need

- [ ] `own_and_inherited_checks_js.js` — a table of in, Object.hasOwn and a !== undefined test against an own, an inherited, an undefined-valued and a missing property
- [ ] `own_and_inherited_for_in_js.js` — for...in beside Object.keys on an object with an enumerable inherited property, then the hasOwnProperty call that throws on Object.create(null) and the Object.hasOwn call that does not

## See also

- [The prototype chain](../the_prototype_chain/README.md) — where inherited properties come from
- [`for...in` and `for...of`](../../11_Control_Flow_and_Iteration/for_in_and_for_of/README.md) — for...in walks keys, for...of walks values
- [Property keys](../../06_Objects/property_keys/README.md) — the order own keys come back in
- [Property descriptors](../../06_Objects/property_descriptors/README.md) — the enumerable flag that for...in obeys
- [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md) — in as a type guard in TypeScript

## Sources to start from

- [MDN — Object.hasOwn() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [MDN — Enumerability and ownership of properties ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- [ECMA-262 — EnumerateObjectProperties ↗](https://tc39.es/ecma262/#sec-enumerate-object-properties)
