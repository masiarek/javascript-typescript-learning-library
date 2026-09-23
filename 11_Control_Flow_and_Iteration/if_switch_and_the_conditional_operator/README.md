# `if`, `switch` and `? :` — `switch` compares with `===`

**Level:** 101 · for anyone who has written an if statement in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `switch` matches its cases with `===`, so `"1"` never reaches `case 1` and `NaN` never reaches `case NaN` — and a `case` without `break` falls through into the next one.

**Keywords:** `if...else`, `switch`, `case`, `? :`

## What the finished page will answer

- Why does `switch ("1")` skip `case 1:`, and why can no `case` ever match `NaN`?
- What runs when a matching `case` has no `break`, and how does `switch (true)` turn the cases into a chain of conditions?
- Does `default` have to come last, and what runs when it comes first and nothing else matches?
- Why is the same `let` name declared in two `case` clauses a `SyntaxError`, and how do braces around each clause fix it?
- Where may `? :` appear that `if` may not, and how does `a ? b : c ? d : e` group?

## Examples it will need

- [ ] `if_switch_strict_match_js.js` — which case `1`, `"1"` and `NaN` land in, which cases a missing `break` falls through, and where a leading `default` goes
- [ ] `if_switch_case_scope_sh.sh` — the SyntaxError for one `let` name in two `case` clauses, the braced version running, and the SyntaxError for `const x = if (...)`

## See also

- [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md) — the `===` every `case` label is compared with
- [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md) — the values that send `if` to its `else`
- [Short-circuit evaluation](../short_circuit_evaluation/README.md) — `&&` and `||` as a one-line `if`
- [Exhaustiveness checking](../../24_Narrowing/exhaustiveness_with_never/README.md) — how TypeScript proves a `switch` handles every case
- [Rust: `match` expressions ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/match_expressions/index.html) — the Rust `match`, which must cover every case and never falls through
- [Rust: `if` expressions ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/if_expressions/index.html) — in Rust `if` is an expression, so there is no `? :`

## Sources to start from

- [MDN — switch ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN — Conditional (ternary) operator ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [ECMA-262 — The switch Statement ↗](https://tc39.es/ecma262/#sec-switch-statement)
