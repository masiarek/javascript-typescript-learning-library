# Copying objects — spread, `Object.assign` and `structuredClone`

**Level:** 201 · for anyone who has changed a copy and seen the original change

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Spread and `Object.assign` copy one level, so nested objects stay shared with the original; `structuredClone` copies all the way down and keeps `Date`, `Map` and even cycles, but throws on a function and hands back a class instance as a plain object.

**Keywords:** `structuredClone`, `Object.assign`

## What the finished page will answer

- After `const copy = { ...original }`, which changes to `copy` show up in `original`: a top-level number, a nested array, a nested object?
- How do spread and `Object.assign` differ: which one runs setters on the target, and do either copy symbol keys or non-enumerable properties?
- What does `structuredClone` keep that `JSON.parse(JSON.stringify(x))` loses: `Date`, `Map`, `Set`, `undefined`, `NaN`, a cycle?
- What does `structuredClone` throw on, and what happens to a class instance's prototype, methods and `#private` fields?
- Why does `tsc` type `structuredClone(new Point(-3))` as a `Point`, and what happens when you call one of its methods?

## Examples it will need

- [ ] `copying_objects_shallow_js.js` — a nested object copied by spread, Object.assign and structuredClone, then changed through the original, showing which copies change with it
- [ ] `copying_objects_clone_limits_js.js` — what structuredClone keeps (Date, Map, a cycle), what it throws on (a function, DataCloneError) and what it drops (a class instance's prototype)
- [ ] `copying_objects_clone_type_ts.ts` — structuredClone of a class instance, which tsc types as the class, and the TypeError caught when the copy's method is called

## See also

- [Values and references](../../02_Values_and_Types/values_and_references/README.md) — what plain assignment copies: the reference
- [JSON](../json/README.md) — the older deep copy, and what it loses
- [`postMessage`](../../20_Workers_and_Parallelism/message_passing_and_structured_clone/README.md) — the same algorithm, copying every postMessage
- [Getters and setters](../getters_and_setters/README.md) — a copy keeps a getter's value, not the getter
- [Rust: `Copy` vs `Clone` ↗](https://masiarek.github.io/rust-learning-library/16_Structs/copy_vs_clone/index.html) — how Rust makes copy versus clone a property of the type
- [Rust: What a clone costs ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/what_a_clone_costs/index.html) — what a deep copy costs, counted in allocations, in Rust

## Sources to start from

- [MDN — The structured clone algorithm ↗](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [MDN — Object.assign() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Node.js 24 — structuredClone ↗](https://nodejs.org/docs/latest-v24.x/api/globals.html#structuredclonevalue-options)
