# Well-known symbols — `Symbol.iterator`, `toPrimitive`, `toStringTag`

**Level:** 301 · for anyone who has used Symbol.iterator and wants the rest

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node lists 15 well-known symbols, each a hook the language calls on your objects: a static `[Symbol.hasInstance]` makes `2 instanceof Even` answer `true`, and `[Symbol.toStringTag]` makes `Object.prototype.toString` report `[object Array]` for an object that is no array.

**Keywords:** `Symbol.toStringTag`, `Symbol.hasInstance`, `Symbol.isConcatSpreadable`, `well-known symbols`

## What the finished page will answer

- Which 15 well-known symbols does Node list on `Symbol`, and which two arrived with `using`?
- What do `2 instanceof Even` and `3 instanceof Even` print when `Even` has a static `[Symbol.hasInstance]`?
- How does `[Symbol.toStringTag]` change `Object.prototype.toString`, and why does that make `"[object Array]"` a weaker array test than `Array.isArray`?
- What does `[Symbol.isConcatSpreadable]` change about `[].concat(x)`?
- Which hint does `[Symbol.toPrimitive]` receive for `+obj`, `` `${obj}` `` and `obj + ""`?

## Examples it will need

- [ ] `well_known_symbols_list_js.js` — each well-known symbol on Symbol, one per line
- [ ] `well_known_symbols_hooks_js.js` — one object with toStringTag, hasInstance, isConcatSpreadable and toPrimitive, and what each operator then answers

## See also

- [Symbols](../../02_Values_and_Types/symbols/README.md) — what a symbol is, before the well-known ones
- [ToPrimitive](../../03_Equality_and_Coercion/toprimitive/README.md) — the full story of Symbol.toPrimitive
- [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md) — the full story of Symbol.iterator
- [`instanceof`](../../07_Prototypes_and_Classes/instanceof/README.md) — the lookup that Symbol.hasInstance replaces
- [`using` and `Symbol.dispose`](../explicit_resource_management/README.md) — the newest well-known symbol, Symbol.dispose, at work
- [Rust: Implementing `Iterator` ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/implementing_iterator/index.html) — the Rust counterpart of Symbol.iterator: the Iterator trait

## Sources to start from

- [ECMA-262 — Well-Known Symbols ↗](https://tc39.es/ecma262/#sec-well-known-symbols)
- [MDN — Symbol: well-known symbols ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)
- [MDN — Symbol.toStringTag ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
