# 24 — Narrowing

**One line:** After a test that only some members of a union can pass, the checker shrinks the variable's type inside that branch; the chapter is about which tests it understands, which it takes on trust, and how to make it prove no case was forgotten.

Narrowing makes a union usable: the checker reads `typeof`, `in`, `instanceof` and equality tests and shrinks the type in each branch. The chapter starts with those built-in tests and with truthiness, the test that also turns away `0` and `""`. It then builds unions meant to be narrowed, discriminated by a tag, and uses `never` to catch a forgotten case. It ends with the tests you write yourself, type predicates and assertion functions, which the checker trusts without looking, and with `satisfies`, `as` and annotations.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Narrowing](narrowing_by_control_flow/README.md) | 201 | After `if (typeof value === "string") return`, the rest of the function knows `value` is not a string; but `typeof value === "object"` also lets `null` through, so reading `value.tags` in that branch is TS18047, 'value' is possibly 'null'. | stub |
| [Truthiness narrowing](truthiness_narrowing/README.md) | 201 | `if (count)` narrows <code>number &#124; null</code> to `number`, which reads as 'not null', but at run time `0` fails the test too: `label(0)` prints `no count`, and only the type after the `if`, still <code>number &#124; null</code>, hints that a number can arrive there. | stub |
| [Discriminated unions](discriminated_unions/README.md) | 201 | A union narrows on a tag only when each member's tag is a literal type: with `kind: "circle"` and `kind: "square"`, `switch (shape.kind)` gives each case its member, even through `const { kind } = shape`; with `kind: string`, reading `radius` is TS2339. | stub |
| [Exhaustiveness checking](exhaustiveness_with_never/README.md) | 201 | Once every member of a union has its `case`, what reaches `default` is `never`; assign it to a `never` variable there, and adding a `triangle` member later turns the forgotten case into TS2322 on that line, naming the triangle type. | stub |
| [Type predicates](type_predicates_and_assertion_functions/README.md) | 201 | The checker takes a type predicate on trust: `isString(value): value is string` that returns `true` for `42` compiles cleanly, so `input.toUpperCase()` passes the check and throws a TypeError at run time. | stub |
| [`satisfies`, `as` and annotations](satisfies_as_and_annotations/README.md) | 201 | An annotation checks an object and forgets its details, `satisfies` checks it and keeps them, and `as` barely checks: `{ red: [255, 0, 0] } as Palette` compiles without the required `green`, which `satisfies Palette` reports as TS2741. | stub |
<!-- /lessons -->

## Boundaries

Unions and literal types are introduced in Everyday types; the assertions that lie outright, `as` and the postfix `!`, are shown failing in Where types lie.
