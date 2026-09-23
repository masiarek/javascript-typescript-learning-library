# Property descriptors — writable, enumerable, configurable

**Level:** 301 · for anyone who has wondered why some properties never show up in `Object.keys`

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Every data property carries three flags; assignment sets all three to `true`, but `Object.defineProperty` defaults each to `false`, so the property it creates is hidden from `Object.keys` and `JSON.stringify`, and writing to it throws in a module and silently does nothing in sloppy code.

**Keywords:** `Object.defineProperty`, `Object.getOwnPropertyDescriptor`, `writable`, `enumerable`, `configurable`

## What the finished page will answer

- What does `Object.getOwnPropertyDescriptor` return for a property made by assignment, by `Object.defineProperty` with only a `value`, and by a getter?
- What does a write to a non-writable property do in an ES module, and in a sloppy `.cjs` script?
- Once `configurable` is `false`, which changes are still allowed: the value, `writable` from `true` to `false`, back again, `enumerable`, `delete`?
- Which built-in properties are non-enumerable, and why does `for...in` over an array never list `length`?
- How do `Object.getOwnPropertyDescriptors` and `Object.defineProperties` copy an object with its getters intact, where spread keeps only values?

## Examples it will need

- [ ] `property_descriptors_defaults_js.js` — the descriptor of a property made by assignment beside one made by defineProperty with only a value, and how each shows in Object.keys and JSON.stringify
- [ ] `property_descriptors_strict_write_sh.sh` — a write to a non-writable property run as a module (TypeError, exit status 1) and as a sloppy .cjs script (no error, value unchanged)
- [ ] `property_descriptors_copy_accessors_js.js` — an object with a getter copied by spread and by defineProperties with getOwnPropertyDescriptors, showing which copy still computes

## See also

- [`freeze`, `seal` and `preventExtensions`](../freeze_seal_and_prevent_extensions/README.md) — the three locks built from these flags
- [Getters and setters](../getters_and_setters/README.md) — accessor properties, which have get and set instead of value
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — why a refused write throws in one mode only
- [Own and inherited properties](../../07_Prototypes_and_Classes/own_and_inherited_properties/README.md) — the enumerable flag that for...in obeys

## Sources to start from

- [MDN — Object.defineProperty() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [MDN — Object.getOwnPropertyDescriptor() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
- [ECMA-262 — Property Attributes ↗](https://tc39.es/ecma262/#sec-property-attributes)
