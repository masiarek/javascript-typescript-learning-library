# Named groups and replacements — `$<name>`, `$&` and a replacer function

**Level:** 201 · for anyone rewriting dates, names or paths with a regex

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The replacement string is a small language of its own: `"$<d>.$<m>.$<y>"` reorders named groups and `$&` inserts the whole match, so user text `"$& off"` turns `"price"` into `"price off"`, while a replacer function's return value goes in literally.

**Keywords:** `(?<name>…)`, `$<name>`, `$&`, `replace`

## What the finished page will answer

- How do `$<name>`, `$1`, `$&`, `` $` ``, `$'` and `$$` each expand in a replacement string?
- Why does replacing with the user text `"$& off"` repeat the match, and how does a replacer function avoid it?
- What arguments does a replacer function receive, and where in the list does the `groups` object come?
- What does `replace` with a string pattern change, every occurrence or only the first, and what does `replaceAll` demand of a regex?
- Can two alternatives share a group name, as in `(?<y>\d{4})-\d{2}|\d{2}-(?<y>\d{4})`, and what does `groups.y` hold for each input?

## Examples it will need

- [ ] `named_groups_replacement_tokens_js.js` — one line per replacement token ($<name>, $1, $&, $`, $', $$) and the text it inserted
- [ ] `named_groups_replacer_function_js.js` — the arguments a replacer function receives, and user text containing $& inserted literally

## See also

- [`match`, `matchAll` and `exec`](../match_matchall_and_exec/README.md) — where match.groups comes from
- [String methods](../../09_Strings_and_Unicode/string_methods/README.md) — replaceAll and the other string methods
- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — a function passed in as the replacement
- [Regex: `$1`, `\1`, `${name}`, `$&` ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/replacement_references/index.html) — the replacement language in eight engines
- [Regex: `(?<name>…)`, `(?P<name>…)`, `(?'name'…)` ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/named_group/index.html) — named-group syntax across engines, and the spellings JavaScript refuses

## Sources to start from

- [MDN — String.prototype.replace(): specifying a string as the replacement ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement)
- [MDN — Named capturing group ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [ECMA-262 — GetSubstitution ↗](https://tc39.es/ecma262/#sec-getsubstitution)
