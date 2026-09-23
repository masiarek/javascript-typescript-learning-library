# 06 — Objects

**One line:** An object is a set of properties keyed only by strings and symbols, and the everyday tools that copy or lock one — spread, `Object.assign`, `Object.freeze` — stop at the first level, leaving nested objects shared and writable.

The chapter starts with the literal, the way most objects are made, and the keys it accepts, then the order those keys come back in. Next come the flags every property carries and the three locks built from them, then getters and setters, properties that run code. Copying follows, because every copy has to decide what to do with nested objects, flags and getters. `?.` and `??` read through missing values, and JSON closes the chapter as the format that keeps only part of an object.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Object literals](object_literals/README.md) | 101 | An object literal is more than pairs: `{ name }` copies a variable in, `[expr]: v` computes a key at run time, and `__proto__: p` sets the prototype instead of making a key — unless written `["__proto__"]: p`, which makes an ordinary property. | stub |
| [Property keys](property_keys/README.md) | 201 | A property key is always a string or a symbol — `o[1]` and `o["1"]` are the same property, and `o[{}]` is `o["[object Object]"]` — and own keys come back integer-like first in ascending order, then other strings in insertion order, then symbols. | stub |
| [Property descriptors](property_descriptors/README.md) | 301 | Every data property carries three flags; assignment sets all three to `true`, but `Object.defineProperty` defaults each to `false`, so the property it creates is hidden from `Object.keys` and `JSON.stringify`, and writing to it throws in a module and silently does nothing in sloppy code. | stub |
| [`freeze`, `seal` and `preventExtensions`](freeze_seal_and_prevent_extensions/README.md) | 201 | `preventExtensions` blocks new properties, `seal` also blocks deletes, `freeze` also blocks changes — and all three stop at the first level, so a frozen object's nested array still takes `push`; a blocked write throws in a module and is silently ignored in sloppy code. | stub |
| [Getters and setters](getters_and_setters/README.md) | 201 | A getter runs on every read and a setter on every write, but spread, `Object.assign` and `JSON.stringify` call the getter once and keep only the value, so a copied object holds plain data that no longer computes anything. | stub |
| [Copying objects](copying_objects/README.md) | 201 | Spread and `Object.assign` copy one level, so nested objects stay shared with the original; `structuredClone` copies all the way down and keeps `Date`, `Map` and even cycles, but throws on a function and hands back a class instance as a plain object. | stub |
| [`?.` and `??`](optional_chaining_and_nullish_coalescing/README.md) | 101 | `??` falls back only on `null` and `undefined`, so `0 ?? 50` is `0` where <code>0 &#124;&#124; 50</code> is `50`; `?.` stops the whole chain at the first `null` or `undefined` and skips every call and index expression after it. | stub |
| [JSON](json/README.md) | 201 | `JSON.stringify` drops `undefined`, functions and symbols from objects and writes them as `null` in arrays, turns `NaN` and `Infinity` into `null`, a `Date` into a string and a `Map` into `{}`, and throws a `TypeError` on a `BigInt` or a cycle. | stub |
<!-- /lessons -->

## Boundaries

Prototypes, inheritance and classes are in Prototypes and classes; `Map` and `Set`, for keys of any type, are in Arrays and collections; types for object shapes are in Everyday types.
