# The `g` flag and `lastIndex` — why `test()` alternates true and false

**Level:** 201 · for anyone whose regex test passed once and failed the second time

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A regex with `g` or `y` remembers where its last match ended in `lastIndex`, so three `test("a")` calls on one `/a/g` answer `true`, `false`, `true`, and a shared `/c/g` filtering `["cat", "car", "cow"]` drops `"car"`.

**Keywords:** `lastIndex`, `test`

## What the finished page will answer

- Why do three calls of `re.test("a")` on one `/a/g` answer `true`, `false`, `true`, and what is `lastIndex` after each?
- Why does a shared `/c/g` inside `filter` drop `"car"` from `["cat", "car", "cow"]`, and what are the two fixes?
- How does `exec` in a `while` loop walk every match, and why does an empty match such as `/a*/g` need a guard?
- Which methods read `lastIndex`, and which reset it to 0 or leave it alone (`match`, `replace`, `search`, `split`)?
- How does `y` differ from `g`: what does `/a/y` answer on `"ba"` with `lastIndex` 0, and with 1?

## Examples it will need

- [ ] `the_g_flag_lastindex_test_js.js` — three test() calls on one /a/g with lastIndex after each, and the filter that drops car
- [ ] `the_g_flag_exec_loop_js.js` — an exec loop printing each match, its index and lastIndex, and the guard an empty match needs

## See also

- [`match`, `matchAll` and `exec`](../match_matchall_and_exec/README.md) — the search methods that read or reset lastIndex
- [Regex literals and flags](../regex_literals_and_flags/README.md) — all eight flags, including y
- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — filter, where a shared g regex skips items
- [Perl: `/g` in list and scalar context ↗](https://masiarek.github.io/perl-learning-library/03_Regex/match_g_in_list_and_scalar_context/index.html) — the same trap in Perl, where /g keeps its place in pos()
- [Regex: `\G` — where the last match ended ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/continue_anchor/index.html) — \G, how other engines continue where the last match ended

## Sources to start from

- [MDN — RegExp: lastIndex ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)
- [MDN — RegExp.prototype.test() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [ECMA-262 — RegExpBuiltinExec ↗](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
