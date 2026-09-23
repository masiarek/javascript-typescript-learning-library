# Lookbehind — JavaScript allows any length

**Level:** 201 · for anyone who has hit Python's fixed-width lookbehind error

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** JavaScript accepts a lookbehind of any length — `(?<=\$\d*)\d` finds every digit of a price — and matches it right to left, so `/(?<=(\d+)(\d+))$/.exec("1053")` captures `"1"` and `"053"`, while the same groups matched forwards give `"105"` and `"3"`.

**Keywords:** `(?<=…)`, `(?<!…)`

## What the finished page will answer

- Which lookbehinds does Node accept that Python's `re` refuses: `(?<=\$\d*)`, `(?<=a|bc)`, `(?<=a{1,3})`?
- Why does `/(?<=(\d+)(\d+))$/.exec("1053")` capture `"1"` and `"053"`, when the same groups outside a lookbehind give `"105"` and `"3"`?
- Inside a lookbehind, must a backreference come before or after the group it refers to?
- What does the negative lookbehind `(?<!-)\d+` match in `"-55 and 7"`, and why does it find a `5`?

## Examples it will need

- [ ] `lookbehind_any_length_js.js` — unbounded and alternation lookbehinds that Node accepts, each with its matches
- [ ] `lookbehind_right_to_left_js.js` — the captures of /(?<=(\d+)(\d+))$/ on 1053 beside the same groups matched forwards
- [ ] `lookbehind_python_refuses_py.py` — Python's re.error for the same variable-width lookbehinds

## See also

- [`match`, `matchAll` and `exec`](../match_matchall_and_exec/README.md) — the methods that return lookbehind matches
- [Named groups and replacements](../named_groups_and_replacements/README.md) — captures, which a lookbehind fills right to left
- [Regex: `(?<=…)` and `(?<!…)` — assert what precedes, and how wide that may be ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/lookbehind/index.html) — lookbehind width rules in eight engines, JavaScript's the loosest
- [Regex: Lookahead and lookbehind ↗](https://masiarek.github.io/regex-learning-library/02_Lookaround/lookahead_and_lookbehind/index.html) — lookaround as a whole, with a JavaScript column

## Sources to start from

- [MDN — Lookbehind assertion: (?<=...), (?<!...) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [v8.dev — RegExp lookbehind assertions ↗](https://v8.dev/blog/regexp-lookbehind-assertions)
- [ECMA-262 — CompileAssertion ↗](https://tc39.es/ecma262/#sec-compileassertion)
