# `freeze`, `seal` and `preventExtensions` — three locks, all shallow

**Level:** 201 · for anyone who has frozen an object and then changed it anyway

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `preventExtensions` blocks new properties, `seal` also blocks deletes, `freeze` also blocks changes — and all three stop at the first level, so a frozen object's nested array still takes `push`; a blocked write throws in a module and is silently ignored in sloppy code.

**Keywords:** `Object.freeze`, `Object.seal`, `Object.preventExtensions`, `Object.isFrozen`

## What the finished page will answer

- Which of add, delete and change does each lock block, and what do `Object.isExtensible`, `Object.isSealed` and `Object.isFrozen` report after each?
- Why can you still `push` onto an array inside a frozen object, and how does a recursive deep freeze work?
- What does a blocked write do in an ES module and in a sloppy `.cjs` script, and why does the script version hide bugs?
- What does `Object.isFrozen` say about an empty object after `preventExtensions`, and about the number `1`?
- What does `Object.freeze` change in the TypeScript type, and which write does `tsc` still let through?

## Examples it will need

- [ ] `freeze_seal_prevent_table_js.js` — a table of add, delete and change against each lock, with the error name where a write is refused, and the nested array that still grows
- [ ] `freeze_seal_sloppy_script_sh.sh` — the same write to a frozen object run as a module (TypeError, exit status 1) and as a sloppy .cjs script (ignored, value unchanged)
- [ ] `freeze_seal_readonly_tserror.ts` — tsc's TS2540 error for assigning to a property of a frozen object, while the push onto its nested array type-checks

## See also

- [Property descriptors](../property_descriptors/README.md) — the writable and configurable flags each lock sets
- [`const` is not frozen](../../04_Variables_and_Scope/const_is_not_frozen/README.md) — const fixes the name, freeze fixes the object
- [`readonly` and `override`](../../28_Classes_in_TypeScript/readonly_and_override/README.md) — readonly, a lock that exists only for tsc
- [Copying objects](../copying_objects/README.md) — a deep freeze walks the same tree a deep copy does
- [Concurrency: Immutability ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/safety_in_languages/immutability/index.html) — why data nobody can change is safe to share between threads
- [Ruby text: String literals are chilled, not frozen ↗](https://masiarek.github.io/ruby-text-learning-library/05_Literals/literals_are_chilled/index.html) — how Ruby freezes strings, and the FrozenError a write raises

## Sources to start from

- [MDN — Object.freeze() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [MDN — Object.seal() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
- [ECMA-262 — SetIntegrityLevel ↗](https://tc39.es/ecma262/#sec-setintegritylevel)
