# `?.` and `??` — stopping at `null`, and a default that keeps `0`

**Level:** 101 · for anyone who has written `a && a.b && a.b.c`

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `??` falls back only on `null` and `undefined`, so `0 ?? 50` is `0` where `0 || 50` is `50`; `?.` stops the whole chain at the first `null` or `undefined` and skips every call and index expression after it.

**Keywords:** `?.`, `??`, `??=`

## What the finished page will answer

- What do `0 || 50`, `0 ?? 50`, `"" || "Untitled"` and `"" ?? "Untitled"` give, and which one does a volume setting want?
- Where does `a?.b.c` stop when `a` is `null`, and does the `.c` after it still throw?
- Are the side effects in `a?.[i++]` or `a?.f(log())` evaluated when `a` is `null`?
- Why is `a || b ?? c` a `SyntaxError`, and where do the parentheses go?
- When do `??=` and `||=` skip the assignment, and does a setter run when they skip it?
- What does `a?.b = 1` do?

## Examples it will need

- [ ] `optional_chaining_nullish_defaults_js.js` — || beside ?? for 0, the empty string, false, NaN, null and undefined
- [ ] `optional_chaining_short_circuit_js.js` — a?.b.c, a?.[i++] and a?.f() on a null a, with a counter showing that nothing after the ?. ran
- [ ] `optional_chaining_mixing_sh.sh` — a file that mixes || and ?? without parentheses, rejected with a SyntaxError before it runs, and node's exit status

## See also

- [`null` and `undefined`](../../02_Values_and_Types/null_and_undefined/README.md) — the two values both operators test for
- [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md) — the falsy values || replaces and ?? keeps
- [Short-circuit evaluation](../../11_Control_Flow_and_Iteration/short_circuit_evaluation/README.md) — &&, || and ?? return an operand, not a boolean
- [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md) — a default parameter replaces undefined but not null
- [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md) — the undefined tsc adds to an optional chain's type
- [Rust: The `?` operator ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/the_question_mark_operator/index.html) — how Rust's ? stops early: by returning from the whole function
- [Rust: `unwrap_or`: the default you already have ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/unwrap_or/index.html) — how Rust supplies a fallback for a missing value

## Sources to start from

- [MDN — Optional chaining (?.) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN — Nullish coalescing operator (??) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [ECMA-262 — Optional Chains ↗](https://tc39.es/ecma262/#sec-optional-chains)
