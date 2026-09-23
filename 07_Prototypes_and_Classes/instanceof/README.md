# `instanceof` — a walk up the prototype chain, and where it fails

**Level:** 301 · for anyone who has used `instanceof` to check a type

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `x instanceof C` only asks whether `C.prototype` is on `x`'s prototype chain, so it is `false` for a primitive and for an array made in another realm, changes when `C.prototype` is replaced, and `Symbol.hasInstance` lets `C` answer anything.

**Keywords:** `instanceof`, `Symbol.hasInstance`

## What the finished page will answer

- What do `'text' instanceof String` and `new String('text') instanceof String` print, and what should you use for primitives instead?
- Why is an array made by `vm.runInNewContext('[]')` not `instanceof Array`, and what does `Array.isArray` say about it?
- What happens to `obj instanceof F` after `F.prototype` is replaced, and why does assigning to a class's `prototype` throw?
- What does `Object.create(null) instanceof Object` print, and why?
- How does a static `[Symbol.hasInstance]` method change the answer, and what does `Function.prototype[Symbol.hasInstance]` do by default?
- What does `tsc` report for a primitive on the left of `instanceof`?

## Examples it will need

- [ ] `instanceof_chain_walk_js.js` — instanceof for a primitive, a wrapper object, Object.create(null), and an instance whose constructor's prototype was replaced afterwards
- [ ] `instanceof_other_realm_js.js` — an array and an Error made in a node:vm context, tested with instanceof, Array.isArray and Error.isError
- [ ] `instanceof_primitive_tserror.ts` — tsc's TS2358 error for a primitive on the left of instanceof

## See also

- [The prototype chain](../the_prototype_chain/README.md) — the chain instanceof walks
- [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md) — the check for primitives that instanceof cannot make
- [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md) — instanceof as a type guard in TypeScript
- [Well-known symbols](../../17_Metaprogramming/well_known_symbols/README.md) — the other hooks that sit beside Symbol.hasInstance
- [Arrays](../../08_Arrays_and_Collections/array_basics/README.md) — the array test that works across realms

## Sources to start from

- [MDN — instanceof ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [ECMA-262 — InstanceofOperator ↗](https://tc39.es/ecma262/#sec-instanceofoperator)
- [Node.js 24 — vm.runInNewContext ↗](https://nodejs.org/docs/latest-v24.x/api/vm.html#vmruninnewcontextcode-contextobject-options)
