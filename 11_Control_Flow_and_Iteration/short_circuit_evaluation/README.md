# Short-circuit evaluation — `&&`, `||` and `??` return an operand, not a boolean

**Level:** 101 · for anyone who has used the logical operators only on booleans

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `a || b`, `a && b` and `a ?? b` hand back one of their operands, not `true` or `false` — `0 ?? 5` is `0` and `"a" && "b"` is `"b"` — and the right side never runs once the left side decides.

**Keywords:** `&&`, `||`, `??`, `||=`, `&&=`, `??=`

## What the finished page will answer

- What do `"" || "default"`, `0 || 5`, `0 ?? 5` and `"a" && "b"` evaluate to, and why is none of them a boolean?
- Which of `||` and `??` replaces `0`, `""` and `false`, and which replaces only `null` and `undefined`?
- How can a program show that the right side was never evaluated — for a function call, and for a getter?
- Why is `a || b ?? c` a `SyntaxError`, and what do the parentheses change?
- Does `obj.count ??= 0` call the setter when `count` is already `0`, and does `x ||= f()` call `f` when `x` is truthy?
- When does `value || false` give a different answer from `Boolean(value)`?

## Examples it will need

- [ ] `short_circuit_operands_js.js` — the operand each of `||`, `&&` and `??` returns for a table of left and right values
- [ ] `short_circuit_logical_assignment_js.js` — how often `||=`, `&&=` and `??=` call a getter, a setter and the right side, counted
- [ ] `short_circuit_mixing_sh.sh` — the SyntaxError for `a || b ?? c`, then the parenthesized version's result

## See also

- [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md) — the values `||` treats as missing
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — `?.` and `??` together on property chains
- [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md) — default parameters, which fire only on `undefined`
- [Truthiness narrowing](../../24_Narrowing/truthiness_narrowing/README.md) — how TypeScript narrows through `x && x.y`
- [Rust: Meet the `bool` ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/meet_the_bool/index.html) — in Rust `&&` and `||` take and return only `bool`

## Sources to start from

- [MDN — Logical OR (||) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN — Nullish coalescing operator (??) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [ECMA-262 — Binary Logical Operators ↗](https://tc39.es/ecma262/#sec-binary-logical-operators)
