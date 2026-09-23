# Symbols — unique keys, unless you ask the registry for a shared one

**Level:** 201 · for anyone who has used a string key and worried about clashes

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Every `Symbol()` call makes a new value, even with the same description, so a symbol key cannot collide; `Object.keys`, `for...in` and `JSON.stringify` skip it, but `Reflect.ownKeys` still lists it — hidden from accidents, not from anyone looking.

**Keywords:** `Symbol`, `Symbol.for`, `Symbol.keyFor`, `getOwnPropertySymbols`

## What the finished page will answer

- Is `Symbol("id") === Symbol("id")`, and how does `Symbol.for("id")` differ?
- Which of `Object.keys`, `for...in`, `JSON.stringify`, `Object.assign`, spread and `Reflect.ownKeys` see a symbol-keyed property?
- Why does `"" + Symbol("x")` throw while `String(Symbol("x"))` and `.description` work?
- What does `structuredClone` do with a symbol, and why?

## Examples it will need

- [ ] `symbols_unique_keys_js.js` — two symbols with one description compared, then a symbol-keyed property through six ways of listing keys
- [ ] `symbols_registry_js.js` — Symbol.for and Symbol.keyFor on a registered and an unregistered symbol

## See also

- [Well-known symbols](../../17_Metaprogramming/well_known_symbols/README.md) — the symbols the language itself uses as hooks
- [Property keys](../../06_Objects/property_keys/README.md) — strings and symbols are the only key types
- [JSON](../../06_Objects/json/README.md) — what `JSON.stringify` drops, symbol keys included
- [Eight types](../eight_types/README.md) — symbol as one of the seven primitives

## Sources to start from

- [MDN — Symbol ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [ECMA-262 — The Symbol Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type)
- [ECMA-262 — Symbol Objects ↗](https://tc39.es/ecma262/#sec-symbol-objects)
