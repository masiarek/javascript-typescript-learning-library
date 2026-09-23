# String methods — `slice`, `padStart`, `at`, `replaceAll` and the rest

**Level:** 101 · for anyone who has written a line of JavaScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `"hello".slice(-3)` is `"llo"` but `substring(-3)` is the whole string, because `substring` treats negatives as 0 and swaps reversed ends; and a replacement string still has special patterns: `"a.b".replaceAll(".", "$&$&")` is `"a..b"`, since `$&` means the matched text.

**Keywords:** `slice`, `substring`, `padStart`, `at`, `replaceAll`, `split`

## What the finished page will answer

- What do `slice`, `substring` and `at` return for negative and for reversed arguments?
- Why does `"a.b".replaceAll(".", "$&$&")` return `"a..b"`, and how do `$$`, `$1` and a replacer function change the result?
- Why does `replaceAll` throw on a regex without the `g` flag, and `includes` on any regex?
- What does `padStart` do with a pad string longer than needed, and with an emoji?
- Which characters does `trim` remove: a no-break space, a BOM, an ideographic space?
- What do `"".split(",")` and `"".split("")` return?

## Examples it will need

- [ ] `string_methods_slicing_js.js` — `slice`, `substring` and `at` with positive, negative and reversed arguments, one row per call
- [ ] `string_methods_replace_js.js` — `replace` and `replaceAll` with string and regex patterns, the `$&`, `$$` and `$1` replacement patterns, a replacer function, and the `TypeError` for a non-global regex
- [ ] `string_methods_pad_trim_split_js.js` — `padStart`, `padEnd`, `trim` and `split` on edge cases (a long pad string, an emoji, a no-break space, a BOM, an empty string), each result through `JSON.stringify`

## See also

- [Strings are UTF-16](../strings_are_utf16/README.md) — why every index these methods take is a code-unit index
- [Named groups and replacements](../../15_Regular_Expressions/named_groups_and_replacements/README.md) — `$<name>`, the other replacement patterns and replacer functions
- [`RegExp.escape`](../../15_Regular_Expressions/regexp_escape/README.md) — matching user text literally when the pattern must be a regex
- [Arrays](../../08_Arrays_and_Collections/array_basics/README.md) — `at` and negative indexes behave the same on arrays
- [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md) — strings are immutable, so every method returns a new one
- [Python: `strip` is a set, not a prefix ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/strip_is_a_set/index.html) — in Python, `strip` takes a set of characters, not a prefix
- [Java text: Reverse and substring cut characters in half ↗](https://masiarek.github.io/java-text-learning-library/01_Char_and_String/reverse_and_substring/index.html) — in Java, `substring` cuts surrogate pairs the same way
- [Python: Slicing is not indexing ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/slicing_is_not_indexing/index.html) — in Python, slices forgive bad bounds where indexes do not

## Sources to start from

- [MDN — String ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN — String.prototype.replace(): specifying a string as the replacement ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement)
- [ECMA-262 — GetSubstitution ↗](https://tc39.es/ecma262/#sec-getsubstitution)
