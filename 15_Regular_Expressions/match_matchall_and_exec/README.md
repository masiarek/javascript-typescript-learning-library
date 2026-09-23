# `match`, `matchAll` and `exec` — three ways to find, three shapes of answer

**Level:** 201 · for anyone pulling several matches out of one string

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `"a1 b2".match(/([a-z])(\d)/g)` returns only `["a1", "b2"]` — with `g`, `match` drops the groups — while `matchAll` keeps them but throws a `TypeError` without `g`, and a failed `match` returns `null`, not an empty array.

**Keywords:** `match`, `matchAll`, `exec`

## What the finished page will answer

- What does `"a1 b2".match(re)` return with `g` and without it, and which of the two carries `index` and the groups?
- Why does `matchAll` throw a `TypeError` for a regex without `g`, and what does each item it yields contain?
- What do `match` and `exec` return when nothing matches, and what happens when code reads `.length` on that result?
- What does the `d` flag add to a match array, and which methods return it?
- Does the iterator from `matchAll` notice a change to the original regex's `lastIndex` made after it was created?

## Examples it will need

- [ ] `match_matchall_exec_shapes_js.js` — match with and without g, matchAll spread into an array, and exec, on one string, then all three on a miss

## See also

- [The `g` flag and `lastIndex`](../the_g_flag_and_lastindex/README.md) — why exec in a loop moves forward
- [Named groups and replacements](../named_groups_and_replacements/README.md) — groups by name, in the result and in replacements
- [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md) — the iterator that matchAll returns
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — handling the null a failed match returns
- [Python: Four ways to find it, and four ways to fail ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/finding_a_substring/index.html) — four ways to find a substring in Python, and how each fails
- [Regex: Extracting fields ↗](https://masiarek.github.io/regex-learning-library/11_Topics/extracting_fields/index.html) — capturing groups for extraction, in every engine

## Sources to start from

- [MDN — String.prototype.match() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [MDN — String.prototype.matchAll() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
- [MDN — RegExp.prototype.exec() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
