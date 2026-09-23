# Mutating and copying methods — `sort` versus `toSorted`

**Level:** 101 · for anyone who has called sort on an array

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `sort`, `reverse` and `splice` change the array they are called on, and `sort` returns that same array, so `const b = a.sort()` sorts `a` too; ES2023's `toSorted`, `toReversed`, `toSpliced` and `with` return a new array, a shallow copy that shares its objects.

**Keywords:** `toSorted`, `toReversed`, `toSpliced`, `Array.prototype.with`, `splice`, `reverse`

## What the finished page will answer

- Which array methods change the array they are called on (`sort`, `reverse`, `splice`, `fill`, `push`, `shift`...), and what does each return?
- Why does `const b = a.sort()` sort `a` as well, and how do you sort a copy?
- What do `toSorted`, `toReversed`, `toSpliced` and `with` return, and why does changing an object in the copy change the original's object?
- What does `with` do with an index past the end, compared with `a[i] = x`?
- What happens when you call `sort` and `toSorted` on a frozen array, and `sort` on a TypeScript `readonly number[]`?

## Examples it will need

- [ ] `mutating_and_copying_methods_pairs_js.js` — each mutating method beside its copying twin (`sort`/`toSorted`, `reverse`/`toReversed`, `splice`/`toSpliced`, index assignment/`with`): the result, the original afterwards, and whether they are the same array
- [ ] `mutating_and_copying_methods_readonly_tserror.ts` — tsc's TS2339 diagnostic for calling `sort()` on a `readonly number[]`, next to a `toSorted()` call that type-checks

## See also

- [`sort()` compares strings](../sort_compares_strings/README.md) — what `sort` does without a comparator
- [Copying objects](../../06_Objects/copying_objects/README.md) — shallow and deep copies, and `structuredClone`
- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — a frozen array makes `sort` throw and leaves `toSorted` working
- [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md) — `readonly` arrays, whose type has no mutating methods
- [Rust: `slice::sort` ↗](https://masiarek.github.io/rust-learning-library/26_Collections/slice_methods/slice_sort/index.html) — in Rust, `sort` also works in place, and returns nothing

## Sources to start from

- [MDN — Array.prototype.toSorted() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [ECMA-262 — Array.prototype.toSorted ↗](https://tc39.es/ecma262/#sec-array.prototype.tosorted)
- [TC39 proposal — Change Array by copy ↗](https://github.com/tc39/proposal-change-array-by-copy)
