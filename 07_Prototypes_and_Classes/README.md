# 07 — Prototypes and classes

**One line:** Every object inherits through a chain of prototypes, and a class is a constructor function that builds that chain for you, with a few rules of its own: `new` is required, the body is strict, and `this` waits for `super()`.

The chapter starts below the class keyword, with the prototype chain a property lookup walks and the difference between own and inherited properties, because everything later is built from them. Then it shows what `class` makes — a function, a prototype object and a few stricter rules — and the steps `new` performs. Private fields, static members, and `extends` with `super` follow, each compared with the older pattern it replaced. It ends with `instanceof`, which walks the chain and misleads in a few known places.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [The prototype chain](the_prototype_chain/README.md) | 201 | Reading a property an object lacks walks up its prototype chain until `null`; writing one does not walk: it creates an own property that shadows the inherited one — unless the inherited property is a setter, which runs, or read-only, which makes the write fail. | stub |
| [Own and inherited properties](own_and_inherited_properties/README.md) | 201 | `in` and `for...in` also see inherited properties, while `Object.hasOwn` and `Object.keys` see only the object's own; and an object made with `Object.create(null)` has no `hasOwnProperty` method to call, which is the gap `Object.hasOwn` fills. | stub |
| [Classes](classes_are_functions/README.md) | 201 | A class is a function — `typeof` says `"function"` and its methods sit on `prototype` — but unlike a constructor function it throws when called without `new`, cannot be used above its declaration, runs its body in strict mode, and makes its methods non-enumerable. | stub |
| [`new`](constructors_and_new/README.md) | 201 | `new F()` makes an object whose prototype is `F.prototype`, runs `F` with `this` set to it, and returns it — unless `F` returns an object, which replaces it; a returned primitive is ignored, and `new.target` tells `F` whether `new` was used. | stub |
| [Private fields](private_fields/README.md) | 201 | A `#name` field is not a property: `Object.keys`, `Reflect.ownKeys` and `JSON.stringify` never see it, code outside the class body that names it fails to parse, and reading it from an object that lacks it — even a `Proxy` of an instance — throws a `TypeError`. | stub |
| [Static members and static blocks](static_members/README.md) | 201 | A static member is a property of the class function, not of its instances; `class B extends A` makes `A` the prototype of `B`, so `B` inherits `A`'s statics — and `this.count++` inside an inherited static method creates a separate `count` on `B`. | stub |
| [`extends` and `super`](inheritance_and_super/README.md) | 201 | In a subclass constructor `this` does not exist until `super()` returns — touching it earlier throws a `ReferenceError` — and the subclass's fields are set only after that, so a base constructor that calls an overridden method sees those fields as `undefined`. | stub |
| [`instanceof`](instanceof/README.md) | 301 | `x instanceof C` only asks whether `C.prototype` is on `x`'s prototype chain, so it is `false` for a primitive and for an array made in another realm, changes when `C.prototype` is replaced, and `Symbol.hasInstance` lets `C` answer anything. | stub |
<!-- /lessons -->

## Boundaries

Objects and their property flags are in Objects; TypeScript's class modifiers (`private`, `readonly`, `abstract`, parameter properties) are in Classes in TypeScript.
