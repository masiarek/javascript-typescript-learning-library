# 25 — Type compatibility

**One line:** TypeScript decides assignability by shape, not by name: a value fits a type when it has the members the type asks for, and each page here is either a rule that follows from that or a way around it.

This chapter explains when one type may stand in for another. It starts with structural typing, the rule that shape, not name, decides, and with the check for extra properties, which applies only to fresh object literals. It then untangles `object`, `Object` and `{}`, three types that accept different values. The last two pages go past shape: branded types fake nominal typing when two shapes must stay apart, and variance explains which way arrays and function types may be substituted, including where TypeScript knowingly accepts unsound code.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Structural typing](structural_typing/README.md) | 201 | TypeScript compares shapes, not names: a plain object literal passes as a `Dog` and `fake instanceof Dog` prints `false`; a class with a `#private` field is the exception, since no object literal can have one (TS2741). | stub |
| [Excess property checks](excess_property_checks/README.md) | 201 | `const direct: Point = { x: 1, y: 2, z: 3 }` is TS2353, but put the same object in a variable and `const later: Point = staged` passes: the extra-property check runs only on an object literal written where the type is expected. | stub |
| [`object`, `Object` and `{}`](object_and_empty_object_types/README.md) | 201 | `{}` does not mean an empty object: it accepts every value except `null` and `undefined`, so `42` and `"text"` pass; `object` accepts only non-primitives and rejects `42`, and `Object` is `{}` plus a check against `Object.prototype`'s members, which rejects `{ toString: 1 }`. | stub |
| [Branded types](branded_types/README.md) | 301 | Intersect `string` with a property no string has, `{ readonly __brand: "UserId" }`, and a plain `"u-42"` is rejected where a `UserId` is expected (TS2345); at run time the brand does not exist, and the value is an ordinary string. | stub |
| [Variance](variance/README.md) | 301 | A `Dog[]` passes as an `Animal[]` because arrays are compared covariantly; parameters are compared the other way, so `onlyDogs(d: Dog)` is rejected for an `(a: Animal) => void` property (TS2322) but accepted for the same member written as a method, where it throws a TypeError. | stub |
<!-- /lessons -->

## Boundaries

Type parameters and their constraints are the Generics chapter; the unsound corners, such as array covariance, are run until they break in Where types lie.
