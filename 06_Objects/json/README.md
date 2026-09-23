# JSON — what `JSON.stringify` drops, changes and refuses

**Level:** 201 · for anyone who has saved an object with `JSON.stringify` and read it back

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `JSON.stringify` drops `undefined`, functions and symbols from objects and writes them as `null` in arrays, turns `NaN` and `Infinity` into `null`, a `Date` into a string and a `Map` into `{}`, and throws a `TypeError` on a `BigInt` or a cycle.

**Keywords:** `JSON.stringify`, `JSON.parse`, `toJSON`

## What the finished page will answer

- What does `JSON.stringify` write for `undefined`, a function, a symbol, `NaN`, `-Infinity`, a `Date` and a `Map`, inside an object and inside an array?
- What does it throw for a `BigInt` and for a cycle, and how do a replacer function and a `toJSON` method get around each?
- What does `JSON.parse(JSON.stringify(x))` give back for a `Date`, and how does a reviver turn it back into one?
- What does `JSON.stringify(undefined)` return, and what does `JSON.stringify` write for a string holding a lone surrogate such as U+D800?
- What does `JSON.parse` do with duplicate keys and with a `"__proto__"` key?
- How does `JSON.rawJSON` write a `BigInt` larger than 2^53 as a bare number, and which Node versions have it?

## Examples it will need

- [ ] `json_stringify_drops_js.js` — one object holding undefined, a function, a symbol, NaN, -Infinity, a Date and a Map, stringified, then the same values inside an array
- [ ] `json_stringify_refuses_js.js` — the TypeError for a BigInt and for a cycle, then the BigInt written through a replacer, toJSON and JSON.rawJSON
- [ ] `json_round_trip_dates_js.js` — a Date that comes back from JSON.parse as a string, then as a Date again through a reviver

## See also

- [Copying objects](../copying_objects/README.md) — structuredClone keeps what JSON drops
- [BigInt](../../02_Values_and_Types/bigint/README.md) — the type JSON.stringify refuses
- [External data](../../30_Where_Types_Lie/json_parse_and_external_data/README.md) — the any that JSON.parse returns
- [Strings and bytes](../../09_Strings_and_Unicode/strings_and_bytes/README.md) — lone surrogates, which stringify escapes
- [Formatting dates](../../16_Dates_and_Time/formatting_dates_with_intl/README.md) — toISOString, which a Date's toJSON calls
- [Rust: The round trip ↗](https://masiarek.github.io/rust-learning-library/06_Data/json_round_trip/index.html) — the round-trip test that catches what serialization drops
- [Encodings: UTF-16 and surrogates ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/utf16_and_surrogates/index.html) — where the lone surrogates that stringify escapes come from

## Sources to start from

- [MDN — JSON.stringify() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [ECMA-262 — SerializeJSONProperty ↗](https://tc39.es/ecma262/#sec-serializejsonproperty)
- [V8 — Well-formed JSON.stringify ↗](https://v8.dev/features/well-formed-json-stringify)
