# Errors around values and types — each message Node and `tsc` print, and its fix

**Level:** 201 · for anyone staring at a TypeError about a value

**One line:** Seventeen messages, each printed by a run on this page — thirteen by Node while a program ran, four by `tsc` before one could — and under each, the program behind it, what that program assumed, and a fix that runs.

Each heading below is a message exactly as the terminal printed it, so you can search this page for the text on your screen. Under it come the program that printed it, **The mistake** (what the program assumed), and **The fix**, a program that runs, with its output. Each entry links the lesson that explains the rule behind it rather than teaching it again.

## Find the error

| # | The message | From | The mistake, briefly | Lesson |
|---|---|---|---|---|
| 1 | [`ReferenceError: window is not defined`](#referenceerror-window-is-not-defined) | Node | comparing a name nobody declared with `undefined` | [`typeof`](../the_typeof_operator/README.md) |
| 2 | [`TypeError: Cannot read properties of undefined (reading 'city')`](#typeerror-cannot-read-properties-of-undefined-reading-city) | Node | reading on through a property the object does not have | [`null` and `undefined`](../null_and_undefined/README.md) |
| 3 | [`TypeError: Cannot read properties of null (reading '0')`](#typeerror-cannot-read-properties-of-null-reading-0) | Node | indexing the `null` that `match` returns when nothing matches | [`null` and `undefined`](../null_and_undefined/README.md) |
| 4 | [`TypeError: Assignment to constant variable.`](#typeerror-assignment-to-constant-variable) | Node | pointing a `const` at a new object | [Values and references](../values_and_references/README.md) |
| 5 | [`ReferenceError: Cannot access 'taxRate' before initialization`](#referenceerror-cannot-access-taxrate-before-initialization) | Node | `typeof` on a `let` declared further down | [`typeof`](../the_typeof_operator/README.md) |
| 6 | [`TypeError: Cannot assign to read only property '0' of string 'ada'`](#typeerror-cannot-assign-to-read-only-property-0-of-string-ada) | Node | changing a character of a string | [Eight types](../eight_types/README.md) |
| 7 | [`TypeError: Cannot create property 'discontinued' on string 'A-1999'`](#typeerror-cannot-create-property-discontinued-on-string-a-1999) | Node | setting a property on a string | [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) |
| 8 | [`TypeError: Cannot mix BigInt and other types, use explicit conversions`](#typeerror-cannot-mix-bigint-and-other-types-use-explicit-conversions) | Node | adding a Number to a BigInt | [BigInt](../bigint/README.md) |
| 9 | [`TypeError: Do not know how to serialize a BigInt`](#typeerror-do-not-know-how-to-serialize-a-bigint) | Node | handing a BigInt to `JSON.stringify` | [BigInt](../bigint/README.md) |
| 10 | [`RangeError: The number 1998.9999999999998 cannot be converted to a BigInt because it is not an integer`](#rangeerror-the-number-19989999999999998-cannot-be-converted-to-a-bigint-because-it-is-not-an-integer) | Node | `BigInt()` on a product that came out with a fraction | [BigInt](../bigint/README.md) |
| 11 | [`TypeError: BigInt is not a constructor`](#typeerror-bigint-is-not-a-constructor) | Node | `new BigInt(...)` | [BigInt](../bigint/README.md) |
| 12 | [`TypeError: Symbol is not a constructor`](#typeerror-symbol-is-not-a-constructor) | Node | `new Symbol(...)` | [Symbols](../symbols/README.md) |
| 13 | [`TypeError: Cannot convert a Symbol value to a string`](#typeerror-cannot-convert-a-symbol-value-to-a-string) | Node | putting a symbol into text with `+` or a template literal | [Symbols](../symbols/README.md) |
| 14 | [`error TS18047: 'found' is possibly 'null'.`](#error-ts18047-found-is-possibly-null) | `tsc` | indexing what `match` returned without ruling out `null` | [`null` and `undefined`](../null_and_undefined/README.md) |
| 15 | [`error TS2322: Type 'String' is not assignable to type 'string'.`](#error-ts2322-type-string-is-not-assignable-to-type-string) | `tsc` | typing a parameter `String`, the wrapper object's type | [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) |
| 16 | [`error TS2365: Operator '+' cannot be applied to types 'bigint' and 'number'.`](#error-ts2365-operator-cannot-be-applied-to-types-bigint-and-number) | `tsc` | adding a `number` to a `bigint` | [BigInt](../bigint/README.md) |
| 17 | [`error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.`](#error-ts7009-new-expression-whose-target-lacks-a-construct-signature-implicitly-has-an-any-type) | `tsc` | `new BigInt(...)` and `new Symbol(...)` | [BigInt](../bigint/README.md), [Symbols](../symbols/README.md) |

## How the programs were run

Entries 1 to 13 are Node's. For each, a bash driver writes the broken program to a temporary folder, shows it with `cat`, runs it with `node`, and prints the error line and the exit status. The stack trace under the message is left out: it names paths on the machine that ran it. The programs are `.mjs` files, which Node always loads as ES modules ([Node docs ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#determining-module-system)), as it loads every `.js` example in this library ([Contributing](../../CONTRIBUTING.md#the-programs)). Module code is always strict mode code ([MDN ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_for_modules)); entries 6 and 7 run their program as CommonJS as well, to show what that changes.

<details markdown="1">
<summary>The driver behind entry 1, in full</summary>

<!-- source:values_types_errors_undeclared_sh -->
*[`values_types_errors_undeclared_sh.sh`](examples/values_types_errors_undeclared_sh.sh) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```bash
#!/usr/bin/env bash
# ReferenceError: window is not defined
#
# A program that compares a name nobody declared with undefined. The driver
# writes it to a temporary folder, shows it, runs it with node, and prints the
# error line and the exit status -- not the stack trace, which names paths.
dir=$(mktemp -d)
trap 'rm -rf "$dir"' EXIT
cd "$dir" || exit 1

show() { echo "\$ cat $1"; cat "$1"; }
run() {
  echo "\$ node $1"
  node "$1" 2> stderr.txt
  local status=$?
  grep -E '^[A-Za-z]*Error' stderr.txt
  echo "exit status: $status"
}

cat > save_setting.mjs <<'EOF'
// The same file runs in a web page and in Node: where should a setting go?
const store = window === undefined ? "a file" : "localStorage";
console.log(`saving to ${store}`);
EOF

show save_setting.mjs
run save_setting.mjs
```
<!-- /source -->

</details>

Every driver has this shape and differs only in the programs it writes and runs. Entries 14 to 17 are `tsc`'s: each is a `_tserror.ts` file, checked on its own with the library's `tsconfig.json`, which turns `strict` on, and its block is what `tsc` printed ([How a page is checked](../../00_Start_Here/how_a_page_is_checked/README.md)). The keys were recorded with Node 25.2.1, and CI checks them with Node 24, so both versions print these messages word for word. Firefox and Safari word many of them differently: the MDN error pages under [Sources](#sources) list their wording beside V8's, which is what Node prints.

## `ReferenceError: window is not defined`

<!-- output:values_types_errors_undeclared_sh -->
*Verified output of [`values_types_errors_undeclared_sh.sh`](examples/values_types_errors_undeclared_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat save_setting.mjs
// The same file runs in a web page and in Node: where should a setting go?
const store = window === undefined ? "a file" : "localStorage";
console.log(`saving to ${store}`);
$ node save_setting.mjs
ReferenceError: window is not defined
exit status: 1
```
<!-- /output -->

**The mistake.** The program compares `window` with `undefined`, but Node declares no `window`, and reading a name that no declaration created throws before the comparison can happen ([ECMA-262: GetValue ↗](https://tc39.es/ecma262/#sec-getvalue)). `undefined` is what a name holds when it exists and has no value; it does not stand in for a name that does not exist.

**The fix.** Ask with `typeof`, which answers `"undefined"` for a name that no declaration created, where a plain read throws.

<!-- source:values_types_errors_undeclared_fix_js -->
*[`values_types_errors_undeclared_fix_js.js`](examples/values_types_errors_undeclared_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// typeof answers for a name nobody declared, where reading the name throws.
const store = typeof window === "undefined" ? "a file" : "localStorage";
console.log(`typeof window: ${typeof window}`);
console.log(`saving to ${store}`);
```
<!-- /source -->

<!-- output:values_types_errors_undeclared_fix_js -->
*Verified output of [`values_types_errors_undeclared_fix_js.js`](examples/values_types_errors_undeclared_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
typeof window: undefined
saving to a file
```
<!-- /output -->

Why `typeof` gets this exception, and the one place it throws after all (entry 5), is the subject of [`typeof`](../the_typeof_operator/README.md).

## `TypeError: Cannot read properties of undefined (reading 'city')`

<!-- output:values_types_errors_read_undefined_sh -->
*Verified output of [`values_types_errors_read_undefined_sh.sh`](examples/values_types_errors_read_undefined_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat ship_order.mjs
// An order saved before anyone entered a delivery address.
const order = { id: 7, totalCents: 1999 };
console.log(`ship to ${order.customer.city}`);
$ node ship_order.mjs
TypeError: Cannot read properties of undefined (reading 'city')
exit status: 1
```
<!-- /output -->

**The mistake.** The program assumed every order has a `customer`. This one does not, so `order.customer` reads as `undefined` without complaint, and the error comes one step later: `undefined` has no properties, so reading `.city` from it throws. The message names the property it was reading, `city`, not the one that was missing.

**The fix.** Where a value may be missing, `?.` stops at `undefined` or `null` instead of reading on, and `??` puts a default in its place.

<!-- source:values_types_errors_read_undefined_fix_js -->
*[`values_types_errors_read_undefined_fix_js.js`](examples/values_types_errors_read_undefined_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// ?. stops at undefined or null instead of reading on; ?? supplies a default.
const orders = [
  { id: 7, totalCents: 1999 },
  { id: 8, totalCents: 250, customer: null },
  { id: 9, totalCents: 500, customer: { city: "Oslo" } },
];
console.log(`order 7's customer: ${orders[0].customer}`);
for (const order of orders) {
  const city = order.customer?.city ?? "no address yet";
  console.log(`order ${order.id}: ${city}`);
}
```
<!-- /source -->

<!-- output:values_types_errors_read_undefined_fix_js -->
*Verified output of [`values_types_errors_read_undefined_fix_js.js`](examples/values_types_errors_read_undefined_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
order 7's customer: undefined
order 7: no address yet
order 8: no address yet
order 9: Oslo
```
<!-- /output -->

The first line is the missing property on its own: `undefined`, and no error. Order 7 has no `customer` and order 8 has `customer: null`, and `?.` stops at both. Which operations produce `undefined` is in [`null` and `undefined`](../null_and_undefined/README.md); the two operators have a page of their own, [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md).

## `TypeError: Cannot read properties of null (reading '0')`

<!-- output:values_types_errors_read_null_sh -->
*Verified output of [`values_types_errors_read_null_sh.sh`](examples/values_types_errors_read_null_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat order_number.mjs
// Take the number out of an order label; this one has not been numbered yet.
const label = "order #pending";
const orderNumber = label.match(/\d+/)[0];
console.log(`order number ${orderNumber}`);
$ node order_number.mjs
TypeError: Cannot read properties of null (reading '0')
exit status: 1
```
<!-- /output -->

**The mistake.** The program assumed the label always contains a number. `match` returns `null` when the pattern finds nothing, and `null`, like the `undefined` in the entry above, has no properties, so `[0]` throws. Here the empty value is not a missing property: it is the answer `match` gives on purpose.

**The fix.** Check for `null` before indexing.

<!-- source:values_types_errors_read_null_fix_js -->
*[`values_types_errors_read_null_fix_js.js`](examples/values_types_errors_read_null_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// match returns null when nothing matches: check for it before indexing.
for (const label of ["order #7", "order #pending"]) {
  const found = label.match(/\d+/);
  if (found === null) {
    console.log(`${label}: match gave ${found}, no number yet`);
  } else {
    console.log(`${label}: number ${found[0]}`);
  }
}
```
<!-- /source -->

<!-- output:values_types_errors_read_null_fix_js -->
*Verified output of [`values_types_errors_read_null_fix_js.js`](examples/values_types_errors_read_null_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
order #7: number 7
order #pending: match gave null, no number yet
```
<!-- /output -->

The second line prints the `null` itself. Which built-ins return `null` rather than `undefined` is in [`null` and `undefined`](../null_and_undefined/README.md), and entry 14 shows `tsc` refusing this `[0]` before the program can run.

## `TypeError: Assignment to constant variable.`

<!-- output:values_types_errors_const_assign_sh -->
*Verified output of [`values_types_errors_const_assign_sh.sh`](examples/values_types_errors_const_assign_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat add_item.mjs
// Add a third item to the cart.
const cart = { items: 2, totalCents: 1999 };
cart = { ...cart, items: 3 };
console.log(JSON.stringify(cart));
$ node add_item.mjs
TypeError: Assignment to constant variable.
exit status: 1
```
<!-- /output -->

**The mistake.** The program declared `cart` with `const` and then gave the name a new value, a new object: the one thing `const` forbids. What `const` does not do is freeze the object the name refers to.

**The fix.** Change the object through the name, which `const` allows, or declare the name with `let` if it really has to refer to a new object.

<!-- source:values_types_errors_const_assign_fix_js -->
*[`values_types_errors_const_assign_fix_js.js`](examples/values_types_errors_const_assign_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// const fixes which object the name refers to, not what is inside it.
const cart = { items: 2, totalCents: 1999 };
cart.items = 3;
console.log(`const, changed in place: ${JSON.stringify(cart)}`);

// let, when the name has to refer to a new object.
let order = { items: 2, totalCents: 1999 };
order = { ...order, items: 3 };
console.log(`let, given a new object:  ${JSON.stringify(order)}`);
```
<!-- /source -->

<!-- output:values_types_errors_const_assign_fix_js -->
*Verified output of [`values_types_errors_const_assign_fix_js.js`](examples/values_types_errors_const_assign_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
const, changed in place: {"items":3,"totalCents":1999}
let, given a new object:  {"items":3,"totalCents":1999}
```
<!-- /output -->

Both lines reach the same contents two ways: the `const` object was changed in place, and the `let` name was given a new object. What a variable holds when it holds an object is the subject of [Values and references](../values_and_references/README.md), and the rest of `const` is in [`const` is not frozen](../../04_Variables_and_Scope/const_is_not_frozen/README.md).

## `ReferenceError: Cannot access 'taxRate' before initialization`

<!-- output:values_types_errors_tdz_sh -->
*Verified output of [`values_types_errors_tdz_sh.sh`](examples/values_types_errors_tdz_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat tax_rate.mjs
// Use a default until a tax rate has been set.
if (typeof taxRate === "undefined") {
  console.log("no tax rate yet: using 0");
}
let taxRate = 0.2;
console.log(`tax rate ${taxRate}`);
$ node tax_rate.mjs
ReferenceError: Cannot access 'taxRate' before initialization
exit status: 1
```
<!-- /output -->

**The mistake.** The program leaned on what entry 1's fix showed: `typeof` does not throw for a name that no declaration created. But `taxRate` has a declaration, the `let` further down, and from the start of the module until that line runs, the name exists without a value; any use of it there, `typeof` included, throws. That stretch is the temporal dead zone ([MDN ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)).

**The fix.** Declare the variable above the first line that reads it. A `let` with no value holds `undefined`, so the test can be a plain comparison.

<!-- source:values_types_errors_tdz_fix_js -->
*[`values_types_errors_tdz_fix_js.js`](examples/values_types_errors_tdz_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Declare the variable before the first line that reads it: a let with no
// value holds undefined.
let taxRate;
if (taxRate === undefined) {
  console.log("no tax rate yet: using 0");
}
taxRate = 0.2;
console.log(`tax rate ${taxRate}`);
```
<!-- /source -->

<!-- output:values_types_errors_tdz_fix_js -->
*Verified output of [`values_types_errors_tdz_fix_js.js`](examples/values_types_errors_tdz_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
no tax rate yet: using 0
tax rate 0.2
```
<!-- /output -->

When `typeof` throws and when it does not is in [`typeof`](../the_typeof_operator/README.md); the dead zone itself is in [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md).

## `TypeError: Cannot assign to read only property '0' of string 'ada'`

<!-- output:values_types_errors_string_index_sh -->
*Verified output of [`values_types_errors_string_index_sh.sh`](examples/values_types_errors_string_index_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat capitalize.mjs
// Capitalize a customer's first name in place.
let firstName = "ada";
firstName[0] = firstName[0].toUpperCase();
console.log(firstName);
$ node capitalize.mjs
TypeError: Cannot assign to read only property '0' of string 'ada'
exit status: 1
$ cp capitalize.mjs capitalize.cjs
$ node capitalize.cjs
ada
exit status: 0
```
<!-- /output -->

**The mistake.** The program treated the string as a row of characters it could change. A string is a primitive, and a primitive never changes: `firstName[0]` reads a character, but the characters are read-only. As an ES module the program is strict mode code, and the failed assignment throws. As CommonJS, which is sloppy mode unless the file opens with `"use strict"` ([MDN ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode)), the same assignment fails without a word and the program prints `ada` unchanged: the worse outcome, because nothing points at the line.

**The fix.** Build a new string and assign it to the variable.

<!-- source:values_types_errors_string_index_fix_js -->
*[`values_types_errors_string_index_fix_js.js`](examples/values_types_errors_string_index_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// A string never changes: build a new one and assign that to the variable.
let firstName = "ada";
firstName = firstName[0].toUpperCase() + firstName.slice(1);
console.log(firstName);
```
<!-- /source -->

<!-- output:values_types_errors_string_index_fix_js -->
*Verified output of [`values_types_errors_string_index_fix_js.js`](examples/values_types_errors_string_index_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
Ada
```
<!-- /output -->

What a primitive cannot do that an object can is the subject of [Eight types](../eight_types/README.md); the mistakes strict mode turns into errors are in [Strict mode](../../01_Running_JavaScript/strict_mode/README.md).

## `TypeError: Cannot create property 'discontinued' on string 'A-1999'`

<!-- output:values_types_errors_string_property_sh -->
*Verified output of [`values_types_errors_string_property_sh.sh`](examples/values_types_errors_string_property_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat discontinue.mjs
// Mark a product code as discontinued.
const sku = "A-1999";
sku.discontinued = true;
console.log(sku.discontinued);
$ node discontinue.mjs
TypeError: Cannot create property 'discontinued' on string 'A-1999'
exit status: 1
$ cp discontinue.mjs discontinue.cjs
$ node discontinue.cjs
undefined
exit status: 0
```
<!-- /output -->

**The mistake.** The program treated the string as an object it could attach a flag to. A primitive cannot hold a property: reading one works, through the temporary `String` object that [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) describes, but an assignment has nowhere to keep its value ([ECMA-262: PutValue ↗](https://tc39.es/ecma262/#sec-putvalue)). Strict mode code throws. The CommonJS run drops the write, and reading the property back gives `undefined`.

**The fix.** Keep the flag in an object, next to the string it describes.

<!-- source:values_types_errors_string_property_fix_js -->
*[`values_types_errors_string_property_fix_js.js`](examples/values_types_errors_string_property_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// A primitive cannot hold a property: keep the flag in an object beside it.
const product = { sku: "A-1999", discontinued: false };
product.discontinued = true;
console.log(`${product.sku} discontinued: ${product.discontinued}`);
```
<!-- /source -->

<!-- output:values_types_errors_string_property_fix_js -->
*Verified output of [`values_types_errors_string_property_fix_js.js`](examples/values_types_errors_string_property_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
A-1999 discontinued: true
```
<!-- /output -->

## `TypeError: Cannot mix BigInt and other types, use explicit conversions`

<!-- output:values_types_errors_bigint_mix_sh -->
*Verified output of [`values_types_errors_bigint_mix_sh.sh`](examples/values_types_errors_bigint_mix_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat add_fee.mjs
// A balance past 2**53, kept exact as a BigInt, plus a fee in cents.
const balanceCents = 9007199254740993n;
const feeCents = 250;
console.log(`${balanceCents + feeCents}n`);
$ node add_fee.mjs
TypeError: Cannot mix BigInt and other types, use explicit conversions
exit status: 1
```
<!-- /output -->

**The mistake.** The program expected `+` to convert one side, the way it converts a number that meets a string ([The `+` operator](../../03_Equality_and_Coercion/the_plus_operator/README.md)). Between a BigInt and a Number it converts neither: `+` and every other arithmetic operator throw unless both operands have the same numeric type ([ECMA-262 ↗](https://tc39.es/ecma262/#sec-applystringornumericbinaryoperator)).

**The fix.** Convert the Number to a BigInt with `BigInt(feeCents)`. Converting the other way throws nothing, and that is its danger:

<!-- source:values_types_errors_bigint_mix_fix_js -->
*[`values_types_errors_bigint_mix_fix_js.js`](examples/values_types_errors_bigint_mix_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Convert the Number to a BigInt, not the BigInt to a Number.
const balanceCents = 9007199254740993n;
const feeCents = 250;
console.log(`convert the fee:     ${balanceCents + BigInt(feeCents)}n`);
console.log(`convert the balance: ${Number(balanceCents) + feeCents}`);
console.log(`Number(balanceCents) is ${Number(balanceCents)}`);
```
<!-- /source -->

<!-- output:values_types_errors_bigint_mix_fix_js -->
*Verified output of [`values_types_errors_bigint_mix_fix_js.js`](examples/values_types_errors_bigint_mix_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
convert the fee:     9007199254741243n
convert the balance: 9007199254741242
Number(balanceCents) is 9007199254740992
```
<!-- /output -->

The first line is exact. The second is one cent short, and the third says why: `Number(balanceCents)` is `9007199254740992`, one less than the balance, because past 2^53 a Number cannot hold every integer ([Safe integers](../../10_Numbers_and_Math/safe_integers/README.md)). Which operations mix a BigInt with a Number and which refuse is in [BigInt](../bigint/README.md).

## `TypeError: Do not know how to serialize a BigInt`

<!-- output:values_types_errors_bigint_json_sh -->
*Verified output of [`values_types_errors_bigint_json_sh.sh`](examples/values_types_errors_bigint_json_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat payment_json.mjs
// Send a payment as JSON; its amount is a BigInt.
const payment = { id: 7, amountCents: 9007199254740993n };
console.log(JSON.stringify(payment));
$ node payment_json.mjs
TypeError: Do not know how to serialize a BigInt
exit status: 1
```
<!-- /output -->

**The mistake.** The program assumed `JSON.stringify` writes any value it is given. It throws on a BigInt ([ECMA-262: SerializeJSONProperty ↗](https://tc39.es/ecma262/#sec-serializejsonproperty)) unless something first turns the BigInt into a value JSON can hold.

**The fix.** Pass a replacer that writes each BigInt as a string, and turn the string back with `BigInt()` after parsing.

<!-- source:values_types_errors_bigint_json_fix_js -->
*[`values_types_errors_bigint_json_fix_js.js`](examples/values_types_errors_bigint_json_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// A replacer writes each BigInt as a string; BigInt() reads it back.
const payment = { id: 7, amountCents: 9007199254740993n };
const json = JSON.stringify(payment, (key, value) =>
  typeof value === "bigint" ? String(value) : value,
);
console.log(json);
const amountCents = BigInt(JSON.parse(json).amountCents);
console.log(`read back: ${amountCents}n`);
```
<!-- /source -->

<!-- output:values_types_errors_bigint_json_fix_js -->
*Verified output of [`values_types_errors_bigint_json_fix_js.js`](examples/values_types_errors_bigint_json_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
{"id":7,"amountCents":"9007199254740993"}
read back: 9007199254740993n
```
<!-- /output -->

All sixteen digits survive the round trip, which they would not as a Number (the last line of entry 8's fix). MDN's [use within JSON ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json) shows the other way, a `toJSON` method; what else `JSON.stringify` refuses or drops is in [JSON](../../06_Objects/json/README.md).

## `RangeError: The number 1998.9999999999998 cannot be converted to a BigInt because it is not an integer`

<!-- output:values_types_errors_bigint_fraction_sh -->
*Verified output of [`values_types_errors_bigint_fraction_sh.sh`](examples/values_types_errors_bigint_fraction_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat price_to_cents.mjs
// A price in dollars, turned into exact integer cents.
const priceDollars = 19.99;
const cents = BigInt(priceDollars * 100);
console.log(`${cents}n`);
$ node price_to_cents.mjs
RangeError: The number 1998.9999999999998 cannot be converted to a BigInt because it is not an integer
exit status: 1
```
<!-- /output -->

**The mistake.** The program assumed `19.99 * 100` is `1999`. A Number cannot hold 19.99 exactly, so the product is `1998.9999999999998`, the number the message names, and `BigInt()` accepts a Number only if it is an integer: it throws rather than round ([ECMA-262: NumberToBigInt ↗](https://tc39.es/ecma262/#sec-numbertobigint)).

**The fix.** Round to a whole number of cents with `Math.round` before converting.

<!-- source:values_types_errors_bigint_fraction_fix_js -->
*[`values_types_errors_bigint_fraction_fix_js.js`](examples/values_types_errors_bigint_fraction_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Round to a whole number of cents first: BigInt() takes only an integer.
const priceDollars = 19.99;
console.log(`priceDollars * 100 = ${priceDollars * 100}`);
const cents = BigInt(Math.round(priceDollars * 100));
console.log(`${cents}n`);
```
<!-- /source -->

<!-- output:values_types_errors_bigint_fraction_fix_js -->
*Verified output of [`values_types_errors_bigint_fraction_fix_js.js`](examples/values_types_errors_bigint_fraction_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
priceDollars * 100 = 1998.9999999999998
1999n
```
<!-- /output -->

Why `19.99` is not exact is in [Every number is a double](../../10_Numbers_and_Math/every_number_is_a_double/README.md); keeping money in integer cents from the start is in [Money](../../10_Numbers_and_Math/money_and_decimals/README.md).

## `TypeError: BigInt is not a constructor`

<!-- output:values_types_errors_bigint_new_sh -->
*Verified output of [`values_types_errors_bigint_new_sh.sh`](examples/values_types_errors_bigint_new_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat order_id.mjs
// An order number too big for a Number, read from text.
const orderId = new BigInt("9007199254740993");
console.log(`${orderId}n`);
$ node order_id.mjs
TypeError: BigInt is not a constructor
exit status: 1
```
<!-- /output -->

**The mistake.** The program treated `BigInt` as a class. It is a function you call, like `Number("5")`, and what it returns is a primitive; called with `new`, it throws, as the specification requires ([ECMA-262 ↗](https://tc39.es/ecma262/#sec-bigint-constructor-number-value)).

**The fix.** Call it without `new`.

<!-- source:values_types_errors_bigint_new_fix_js -->
*[`values_types_errors_bigint_new_fix_js.js`](examples/values_types_errors_bigint_new_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// BigInt is called, never constructed, and the call returns a primitive.
const orderId = BigInt("9007199254740993");
console.log(`${typeof orderId}: ${orderId}n`);
```
<!-- /source -->

<!-- output:values_types_errors_bigint_new_fix_js -->
*Verified output of [`values_types_errors_bigint_new_fix_js.js`](examples/values_types_errors_bigint_new_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
bigint: 9007199254740993n
```
<!-- /output -->

`typeof` says `bigint`: a primitive, not an object. Why `BigInt` and `Symbol` refuse `new` when `Number` and `String` accept it is in [Primitives and wrappers](../primitives_and_wrapper_objects/README.md).

## `TypeError: Symbol is not a constructor`

<!-- output:values_types_errors_symbol_new_sh -->
*Verified output of [`values_types_errors_symbol_new_sh.sh`](examples/values_types_errors_symbol_new_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat session_key.mjs
// A key for a cache entry that no string key can collide with.
const sessionKey = new Symbol("session");
console.log(String(sessionKey));
$ node session_key.mjs
TypeError: Symbol is not a constructor
exit status: 1
```
<!-- /output -->

**The mistake.** The same as in the entry above, with `Symbol`: it is a function you call, it returns a primitive, and `new` throws ([ECMA-262 ↗](https://tc39.es/ecma262/#sec-symbol-description)).

**The fix.** Call it without `new`.

<!-- source:values_types_errors_symbol_new_fix_js -->
*[`values_types_errors_symbol_new_fix_js.js`](examples/values_types_errors_symbol_new_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Symbol is called, never constructed, and the call returns a primitive.
const sessionKey = Symbol("session");
console.log(`${typeof sessionKey}: ${String(sessionKey)}`);
```
<!-- /source -->

<!-- output:values_types_errors_symbol_new_fix_js -->
*Verified output of [`values_types_errors_symbol_new_fix_js.js`](examples/values_types_errors_symbol_new_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
symbol: Symbol(session)
```
<!-- /output -->

What a symbol is for, and why two made with one description are still different, is in [Symbols](../symbols/README.md).

## `TypeError: Cannot convert a Symbol value to a string`

<!-- output:values_types_errors_symbol_to_string_sh -->
*Verified output of [`values_types_errors_symbol_to_string_sh.sh`](examples/values_types_errors_symbol_to_string_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ cat log_key_plus.mjs
// Log the key a cache entry is stored under.
const sessionKey = Symbol("session");
console.log("stored under " + sessionKey);
$ node log_key_plus.mjs
TypeError: Cannot convert a Symbol value to a string
exit status: 1
$ cat log_key_template.mjs
// The same, with a template literal.
const sessionKey = Symbol("session");
console.log(`stored under ${sessionKey}`);
$ node log_key_template.mjs
TypeError: Cannot convert a Symbol value to a string
exit status: 1
```
<!-- /output -->

**The mistake.** The program expected a symbol to turn into text like any other value. `+` next to a string and a template literal both convert the other value to a string on their own, and a symbol refuses that conversion ([ECMA-262: ToString ↗](https://tc39.es/ecma262/#sec-tostring)): both forms fail with the same message.

**The fix.** Ask for the text by name: `String(sessionKey)` gives `Symbol(session)`, and `.description` gives the description alone.

<!-- source:values_types_errors_symbol_to_string_fix_js -->
*[`values_types_errors_symbol_to_string_fix_js.js`](examples/values_types_errors_symbol_to_string_fix_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// A symbol becomes text only when asked by name.
const sessionKey = Symbol("session");
console.log("stored under " + String(sessionKey));
console.log(`description: ${sessionKey.description}`);
```
<!-- /source -->

<!-- output:values_types_errors_symbol_to_string_fix_js -->
*Verified output of [`values_types_errors_symbol_to_string_fix_js.js`](examples/values_types_errors_symbol_to_string_fix_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
stored under Symbol(session)
description: session
```
<!-- /output -->

Why the implicit conversion throws while `String()` works is in [Symbols](../symbols/README.md) and in MDN's [symbol type conversions ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbol_type_conversions).

## `error TS18047: 'found' is possibly 'null'.`

<!-- source:values_types_errors_possibly_null_tserror -->
*[`values_types_errors_possibly_null_tserror.ts`](examples/values_types_errors_possibly_null_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The order-number program, in TypeScript: match may find nothing.
const label = "order #pending";
const found = label.match(/\d+/);
console.log(`order number ${found[0]}`);
```
<!-- /source -->

<!-- output:values_types_errors_possibly_null_tserror -->
*What `tsc` says about [`values_types_errors_possibly_null_tserror.ts`](examples/values_types_errors_possibly_null_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_types_errors_possibly_null_tserror.ts:4:29 - error TS18047: 'found' is possibly 'null'.

4 console.log(`order number ${found[0]}`);
                              ~~~~~


Found 1 error in values_types_errors_possibly_null_tserror.ts:4
```
<!-- /output -->

**The mistake.** Entry 3's assumption, in TypeScript: that `match` always finds something. `tsc` knows that `match` can return `null`, and with `strict` on, which includes `strictNullChecks` ([TSConfig ↗](https://www.typescriptlang.org/tsconfig/#strictNullChecks)), it refuses `found[0]` until the code has ruled `null` out. This file is never run.

**The fix.** Test for `null`. In the other branch `tsc` narrows `found` to the match, and `found[0]` type-checks.

<!-- source:values_types_errors_possibly_null_fix_ts -->
*[`values_types_errors_possibly_null_fix_ts.ts`](examples/values_types_errors_possibly_null_fix_ts.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// After the null check, tsc knows found is not null in the else branch.
for (const label of ["order #7", "order #pending"]) {
  const found = label.match(/\d+/);
  if (found === null) {
    console.log(`${label}: no number yet`);
  } else {
    console.log(`${label}: number ${found[0]}`);
  }
}
```
<!-- /source -->

<!-- output:values_types_errors_possibly_null_fix_ts -->
*Verified output of [`values_types_errors_possibly_null_fix_ts.ts`](examples/values_types_errors_possibly_null_fix_ts.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
order #7: number 7
order #pending: no number yet
```
<!-- /output -->

How a test narrows a type is in [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md), and what `strictNullChecks` changes is in [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md).

## `error TS2322: Type 'String' is not assignable to type 'string'.`

<!-- source:values_types_errors_string_wrapper_tserror -->
*[`values_types_errors_string_wrapper_tserror.ts`](examples/values_types_errors_string_wrapper_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// A parameter typed String, with a capital S.
function productLabel(sku: String): string {
  return sku;
}
console.log(productLabel("A-1999"));
```
<!-- /source -->

<!-- output:values_types_errors_string_wrapper_tserror -->
*What `tsc` says about [`values_types_errors_string_wrapper_tserror.ts`](examples/values_types_errors_string_wrapper_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_types_errors_string_wrapper_tserror.ts:3:3 - error TS2322: Type 'String' is not assignable to type 'string'.
  'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.

3   return sku;
    ~~~~~~


Found 1 error in values_types_errors_string_wrapper_tserror.ts:3
```
<!-- /output -->

**The mistake.** The parameter is typed `String`, with a capital S: the type of the wrapper object that `new String(...)` makes, where `string` is the primitive. `tsc` accepts the call on line 5, because a primitive string fits the wrapper's type, but not the `return`: a value typed `String` may be a wrapper object, and the function promised a `string`. The second line of the message says so.

**The fix.** Write the type in lower case. At run time the value is a primitive, as `typeof` shows.

<!-- source:values_types_errors_string_wrapper_fix_ts -->
*[`values_types_errors_string_wrapper_fix_ts.ts`](examples/values_types_errors_string_wrapper_fix_ts.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// string, lower case, is the primitive type.
function productLabel(sku: string): string {
  return `${sku} (${typeof sku})`;
}
console.log(productLabel("A-1999"));
```
<!-- /source -->

<!-- output:values_types_errors_string_wrapper_fix_ts -->
*Verified output of [`values_types_errors_string_wrapper_fix_ts.ts`](examples/values_types_errors_string_wrapper_fix_ts.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
A-1999 (string)
```
<!-- /output -->

What a wrapper object is, and why `new String` is a trap in plain JavaScript too, is in [Primitives and wrappers](../primitives_and_wrapper_objects/README.md); the handbook's advice is the same, lower case always ([Everyday Types ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)).

## `error TS2365: Operator '+' cannot be applied to types 'bigint' and 'number'.`

<!-- source:values_types_errors_bigint_operator_tserror -->
*[`values_types_errors_bigint_operator_tserror.ts`](examples/values_types_errors_bigint_operator_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The fee program, with types: tsc sees a bigint and a number.
function addFee(balanceCents: bigint, feeCents: number): bigint {
  return balanceCents + feeCents;
}
console.log(`${addFee(9007199254740993n, 250)}n`);
```
<!-- /source -->

<!-- output:values_types_errors_bigint_operator_tserror -->
*What `tsc` says about [`values_types_errors_bigint_operator_tserror.ts`](examples/values_types_errors_bigint_operator_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_types_errors_bigint_operator_tserror.ts:3:10 - error TS2365: Operator '+' cannot be applied to types 'bigint' and 'number'.

3   return balanceCents + feeCents;
           ~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in values_types_errors_bigint_operator_tserror.ts:3
```
<!-- /output -->

**The mistake.** Entry 8's program, with its types written down. `tsc` knows one operand is a `bigint` and the other a `number`, and refuses the `+` that Node throws on, before anything runs.

**The fix.** Convert the `number` with `BigInt()`: both operands are then `bigint`, and so is the sum.

<!-- source:values_types_errors_bigint_operator_fix_ts -->
*[`values_types_errors_bigint_operator_fix_ts.ts`](examples/values_types_errors_bigint_operator_fix_ts.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// Convert the number to a bigint, and both sides of + have one type.
function addFee(balanceCents: bigint, feeCents: number): bigint {
  return balanceCents + BigInt(feeCents);
}
console.log(`${addFee(9007199254740993n, 250)}n`);
```
<!-- /source -->

<!-- output:values_types_errors_bigint_operator_fix_ts -->
*Verified output of [`values_types_errors_bigint_operator_fix_ts.ts`](examples/values_types_errors_bigint_operator_fix_ts.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
9007199254741243n
```
<!-- /output -->

## `error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.`

<!-- source:values_types_errors_new_any_tserror -->
*[`values_types_errors_new_any_tserror.ts`](examples/values_types_errors_new_any_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// BigInt and Symbol written with new, as if they were classes.
const orderId = new BigInt("9007199254740993");
const sessionKey = new Symbol("session");
```
<!-- /source -->

<!-- output:values_types_errors_new_any_tserror -->
*What `tsc` says about [`values_types_errors_new_any_tserror.ts`](examples/values_types_errors_new_any_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_types_errors_new_any_tserror.ts:2:17 - error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.

2 const orderId = new BigInt("9007199254740993");
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

values_types_errors_new_any_tserror.ts:3:20 - error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.

3 const sessionKey = new Symbol("session");
                     ~~~~~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: values_types_errors_new_any_tserror.ts:2
```
<!-- /output -->

**The mistake.** Entries 11 and 12, in TypeScript, where the message never says "not a constructor". The types TypeScript gives `BigInt` and `Symbol` describe functions to call, with no construct signature (no `new` form), so a `new` expression on them has only the type `any`, and `strict` refuses an `any` that nobody wrote: it includes `noImplicitAny` ([TSConfig ↗](https://www.typescriptlang.org/tsconfig/#noImplicitAny)).

**The fix.** Call both without `new`. The annotations `bigint` and `symbol` type-check, so `tsc` agrees with what `typeof` prints at run time.

<!-- source:values_types_errors_new_any_fix_ts -->
*[`values_types_errors_new_any_fix_ts.ts`](examples/values_types_errors_new_any_fix_ts.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// Called without new, each returns a primitive, and tsc types it as one.
const orderId: bigint = BigInt("9007199254740993");
const sessionKey: symbol = Symbol("session");
console.log(`${typeof orderId}: ${orderId}n`);
console.log(`${typeof sessionKey}: ${String(sessionKey)}`);
```
<!-- /source -->

<!-- output:values_types_errors_new_any_fix_ts -->
*Verified output of [`values_types_errors_new_any_fix_ts.ts`](examples/values_types_errors_new_any_fix_ts.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
bigint: 9007199254740993n
symbol: Symbol(session)
```
<!-- /output -->

## What to do

- When `Cannot read properties of undefined` or `of null` names a property, look one step to its left: the value before `.city` or `[0]` is the empty one.
- Test for a global that may not exist with `typeof name === "undefined"`, and declare every `let` and `const` above the first line that uses it.
- Where a value may be missing, use `?.` and `??`; where a built-in returns `null` for "nothing found", check for `null` before using the result.
- Never assign to a string's characters or properties: build a new string, or keep the extra data in an object. Write ES modules, so that the mistake throws instead of passing in silence.
- Keep BigInt and Number apart in arithmetic: convert the Number with `BigInt(n)`, after `Math.round` if it may have a fraction, and give `JSON.stringify` a replacer for BigInts.
- Call `BigInt(...)` and `Symbol(...)` without `new`, and turn a symbol into text only with `String(sym)` or `sym.description`.
- In TypeScript, write `string`, `number`, `bigint` and `symbol` in lower case, and keep `strict` on: it includes `strictNullChecks`, behind entry 14, and `noImplicitAny`, behind entry 17 ([TSConfig ↗](https://www.typescriptlang.org/tsconfig/#strict)).

## In other languages

- [Rust: `Some` and `None`: reading an `Option` ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/some_and_none/index.html) — in Rust a value that may be missing has the type `Option`, and a `match` that leaves out the `None` case does not compile (`E0004`): the check `tsc` makes in entry 14, made by the compiler on every such value.
- [Rust: `unwrap` is a TODO you forgot to remove ↗](https://masiarek.github.io/rust-learning-library/02_Errors/unwrap_is_a_todo/index.html) — Rust's way to skip that check is `unwrap()`, which panics on `None` at run time, much as entry 3's `[0]` throws on `null`.

## Sources

- [MDN — JavaScript error reference ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors) — a page per message, with the wording of V8, Firefox and Safari. The pages for the entries here:
    - [ReferenceError: "x" is not defined ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) — entry 1
    - [TypeError: "x" is (not) "y" ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type) — entries 2 and 3
    - [TypeError: invalid assignment to const "x" ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment) — entry 4
    - [ReferenceError: can't access lexical declaration 'X' before initialization ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) — entry 5
    - [TypeError: "x" is read-only ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Read-only) — entry 6
    - [TypeError: can't assign to property "x" on "y": not an object ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_assign_to_property) — entry 7
    - [TypeError: can't convert BigInt to number ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_convert_BigInt_to_number) — entry 8
    - [TypeError: BigInt value can't be serialized in JSON ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/BigInt_not_serializable) — entry 9
    - [RangeError: x can't be converted to BigInt because it isn't an integer ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer) — entry 10
    - [TypeError: "x" is not a constructor ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor) — entries 11 and 12
- [MDN — Symbol: symbol type conversions ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbol_type_conversions) — entry 13, which has no error page of its own
- [MDN — Strict mode ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) — module code is always strict; entries 6 and 7
- [Node 24 docs — Determining module system ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#determining-module-system) — `.mjs` is always an ES module, `.cjs` always CommonJS
- ECMA-262, the steps that throw: [GetValue ↗](https://tc39.es/ecma262/#sec-getvalue) (entry 1), [The typeof Operator ↗](https://tc39.es/ecma262/#sec-typeof-operator) (its answer for an undeclared name), [Let and Const Declarations ↗](https://tc39.es/ecma262/#sec-let-and-const-declarations) (entry 5), [PutValue ↗](https://tc39.es/ecma262/#sec-putvalue) (entries 6 and 7), [ApplyStringOrNumericBinaryOperator ↗](https://tc39.es/ecma262/#sec-applystringornumericbinaryoperator) (entry 8), [SerializeJSONProperty ↗](https://tc39.es/ecma262/#sec-serializejsonproperty) (entry 9), [NumberToBigInt ↗](https://tc39.es/ecma262/#sec-numbertobigint) (entry 10), [the BigInt constructor ↗](https://tc39.es/ecma262/#sec-bigint-constructor-number-value) (entry 11), [the Symbol constructor ↗](https://tc39.es/ecma262/#sec-symbol-description) (entry 12), [ToString ↗](https://tc39.es/ecma262/#sec-tostring) (entry 13)
- [TypeScript handbook — Everyday Types: the primitives ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) — `string`, not `String` (entry 15)
- [TypeScript handbook — Everyday Types: `null` and `undefined` ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined) — what `strictNullChecks` changes (entry 14)
- [TypeScript handbook — Narrowing: equality narrowing ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing) — the `=== null` test in entry 14's fix
- [TSConfig reference — `strict` ↗](https://www.typescriptlang.org/tsconfig/#strict), [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig/#strictNullChecks), [`noImplicitAny` ↗](https://www.typescriptlang.org/tsconfig/#noImplicitAny) — entries 14 and 17

## See also

- [Eight types](../eight_types/README.md) — entry 6: what a primitive cannot do that an object can
- [`typeof`](../the_typeof_operator/README.md) — entries 1 and 5
- [`null` and `undefined`](../null_and_undefined/README.md) — entries 2, 3 and 14
- [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) — entries 7, 11 and 15
- [Symbols](../symbols/README.md) — entries 12, 13 and 17
- [BigInt](../bigint/README.md) — entries 8 to 11, 16 and 17
- [Values and references](../values_and_references/README.md) — entry 4
- [Lints around values and types](../values_and_types_lints/README.md) — the ESLint rules and `tsc` checks for this chapter's mistakes
- [Resources for values and types](../values_and_types_resources/README.md) — books, documentation and videos for the chapter
- [Built-in error types](../../12_Errors/error_types/README.md) — `TypeError`, `RangeError` and the rest, and when each appears
- [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md) — what Node does with an uncaught exception, including the exit status 1 above
- [How a page is checked](../../00_Start_Here/how_a_page_is_checked/README.md) — how a `_tserror` file's diagnostics become its answer key
