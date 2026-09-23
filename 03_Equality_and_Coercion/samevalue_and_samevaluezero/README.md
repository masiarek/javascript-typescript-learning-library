# `Object.is`, `NaN` and `-0` — four equality algorithms

**Level:** 201 · for anyone who has tried to find NaN in an array

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The three equality checks that never convert types disagree only on `NaN` and `-0`: `===` says `NaN !== NaN` and `0 === -0`, `Object.is` says the opposite of both, and `includes`, `Map` and `Set` match `NaN` but treat `0` and `-0` as one.

**Keywords:** `Object.is`, `SameValue`, `SameValueZero`

## What the finished page will answer

- What do `[NaN].indexOf(NaN)` and `[NaN].includes(NaN)` return, and which algorithm does each use?
- How many entries does `new Set([0, -0, NaN, NaN])` keep, and what does a `Map` hand back from `keys()` after `set(-0, x)`?
- Where does a `-0` come from in ordinary code, and how do you see it when `String(-0)` prints `"0"`?
- Which built-ins use each of the four algorithms: `==`, `===`, SameValue and SameValueZero?

## Examples it will need

- [ ] `samevalue_four_algorithms_js.js` — NaN, 0 and -0 compared with ==, ===, Object.is and includes, one row per pair
- [ ] `samevalue_in_collections_js.js` — indexOf, includes, findIndex, Set and Map each looking for NaN and for -0

## See also

- [`===` and `==`](../strict_and_loose_equality/README.md) — the two equality operators you write
- [`NaN`, `Infinity` and `-0`](../../10_Numbers_and_Math/nan_infinity_and_negative_zero/README.md) — where `NaN` and `-0` come from
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — `Map` and `Set` keys use SameValueZero
- [Python: Float equality and NaN ↗](https://masiarek.github.io/python-learning-library/03_Numbers/float_equality_and_nan/index.html) — in Python, containers also find NaN, by checking identity first

## Sources to start from

- [MDN — Object.is() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [ECMA-262 — SameValue ↗](https://tc39.es/ecma262/#sec-samevalue)
- [ECMA-262 — SameValueZero ↗](https://tc39.es/ecma262/#sec-samevaluezero)
