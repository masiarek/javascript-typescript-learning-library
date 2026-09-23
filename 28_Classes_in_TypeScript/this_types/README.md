# `this` in types — the `this` parameter and polymorphic `this`

**Level:** 301 · for anyone who has chained method calls

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A method whose return type is `this` returns the subclass, so `new HtmlBuilder().add("x").bold()` type-checks where a `: Builder` return type loses `bold`; a `this:` parameter makes tsc reject a bare `greet()` call.

**Keywords:** `this type`, `polymorphic this`, `this parameter`

## What the finished page will answer

- Why does `new HtmlBuilder().add("x").bold()` type-check when `add` returns `this`, and fail when it returns `Builder`?
- What does a `this:` parameter declare, and what is left of it after Node strips the types?
- What does TS2684 say for a bare `greet()`, and what do `person.greet()` and `greet.call(person)` change?
- Does tsc catch `setTimeout(g.greet, 0)` when `greet` declares `this: Greeter`, and what does Node print when the timer fires?
- How does a method returning `this is Dog` narrow the object it was called on?

## Examples it will need

- [ ] `this_types_builder_tserror.ts` — the TS2339 error when a Builder-typed return loses bold, and the TS2684 error for a bare greet() call
- [ ] `this_types_fluent_ts.ts` — the HTML an HtmlBuilder chain produces, each call returning the subclass
- [ ] `this_types_lost_this_sh.sh` — tsc's silence for setTimeout(g.greet), then what the method prints when Node calls it with the wrong this

## See also

- [`this`](../../05_Functions/this_is_set_by_the_call/README.md) — the run-time rule that a this parameter describes
- [`call`, `apply` and `bind`](../../05_Functions/call_apply_and_bind/README.md) — supplying this explicitly, which satisfies the parameter
- [`extends` and `super`](../../07_Prototypes_and_Classes/inheritance_and_super/README.md) — the subclass that polymorphic this follows
- [Type predicates](../../24_Narrowing/type_predicates_and_assertion_functions/README.md) — x is T, the predicate form this is Dog builds on

## Sources to start from

- [TypeScript Handbook — this types ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types)
- [TypeScript Handbook — this parameters ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-parameters)
