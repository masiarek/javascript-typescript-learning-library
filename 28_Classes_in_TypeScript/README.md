# 28 — Classes in TypeScript

**One line:** Almost everything TypeScript adds to a class is checked by tsc and then erased, so each modifier is a compile-time promise, not a run-time wall.

JavaScript classes already have fields, `#` private names, static members and inheritance; this chapter covers what TypeScript layers on top. It starts with `private` against `#private`, the clearest case of a check that exists only at compile time, then parameter properties, the class feature Node's type stripping refuses. `abstract` and `implements` come next, then the `readonly` and `override` modifiers, and finally the two uses of `this` in types: the `this` parameter and the polymorphic `this` return type.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`private` versus `#private`](private_versus_hash_private/README.md) | 201 | `private` is a compile-time check that Node erases: `acct["pin"]` type-checks and prints `1234`, and `JSON.stringify` and `Object.keys` both show the field. A `#balance` field is enforced by the JavaScript engine and shows up in neither. | stub |
| [Parameter properties](parameter_properties/README.md) | 201 | `constructor(public x: number)` declares and assigns a field in one go, which means TypeScript has to generate code — so Node's type stripping refuses it with `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`, and `erasableSyntaxOnly` makes tsc refuse it first. | stub |
| [`abstract` and `implements`](abstract_classes_and_implements/README.md) | 201 | `implements` checks a class against an interface but types nothing inside it — `check(s)` in a class implementing `check(name: string)` is still an implicit-`any` error — and `abstract` makes `new Shape()` and a subclass missing `area()` compile errors. | stub |
| [`readonly` and `override`](readonly_and_override/README.md) | 201 | `readonly` blocks `this.port = 0` inside the class but not a write through a `{ port: number }` alias of the same object; `override` catches a misspelt method, but leaving it off is an error only under `noImplicitOverride`, which `strict` leaves out. | stub |
| [`this` in types](this_types/README.md) | 301 | A method whose return type is `this` returns the subclass, so `new HtmlBuilder().add("x").bold()` type-checks where a `: Builder` return type loses `bold`; a `this:` parameter makes tsc reject a bare `greet()` call. | stub |
<!-- /lessons -->

## Boundaries

Classes as JavaScript defines them — prototypes, `#` fields, `super` and `static` — are in Prototypes and classes.
