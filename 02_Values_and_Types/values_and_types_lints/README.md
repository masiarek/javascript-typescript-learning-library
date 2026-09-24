# Lints around values and types — bad and good, run through ESLint and `tsc`

**Level:** 201 · for anyone deciding which checks to switch on

**One line:** Twelve core ESLint rules each flag a mistake from this chapter — nine of the bad programs print a wrong answer, two throw, one is only untidy — and pass the fixed program with no report; `tsc --strict` refuses seven of those mistakes on its own and accepts five, and six more mistakes pass both tools and still print a wrong answer.

**Keywords:** `use-isnan`, `no-compare-neg-zero`, `valid-typeof`, `eqeqeq`, `no-undef-init`, `no-shadow-restricted-names`, `no-new-wrappers`, `no-extend-native`, `no-new-native-nonconstructor`, `no-implicit-coercion`, `no-loss-of-precision`, `no-constant-binary-expression`

Each entry has a bad program, a good program and a driver. The driver runs each program with `node`, so you see what it prints, then lints it with ESLint 10.11.0 with only that entry's rule switched on, so you see the report or the silence. These are ESLint's core rules: the library pins no plugins, because typescript-eslint needs a TypeScript compiler API and TypeScript 7 ships none ([The programs](../../CONTRIBUTING.md#the-programs)). What `tsc` checks by itself has [its own section](#typescript-what-tsc-refuses-on-its-own), and [what no lint catches](#what-no-lint-catches) comes after both.

## Find the rule

| Rule | Flags | Guards | Recommended | `tsc --strict` alone |
|---|---|---|---|---|
| [`use-isnan`](#use-isnan) | `reading === NaN` | [Eight types](../eight_types/README.md) | yes | TS2845 |
| [`no-compare-neg-zero`](#no-compare-neg-zero) | `reading === -0` | [Eight types](../eight_types/README.md) | yes | accepts it |
| [`valid-typeof`](#valid-typeof) | `typeof reading === "strnig"` | [`typeof`](../the_typeof_operator/README.md) | yes | TS2367 |
| [`eqeqeq`](#eqeqeq) | `stock == 0`, and `stock == null` unless told not to | [`null` and `undefined`](../null_and_undefined/README.md) | no | TS2367, when the types do not overlap |
| [`no-undef-init`](#no-undef-init) | `let discount = undefined` | [`null` and `undefined`](../null_and_undefined/README.md) | no | accepts it |
| [`no-shadow-restricted-names`](#no-shadow-restricted-names) | a parameter named `undefined` | [`null` and `undefined`](../null_and_undefined/README.md) | yes | accepts it |
| [`no-new-wrappers`](#no-new-wrappers) | `new Boolean(0)`, `new String("EUR")` | [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) | no | TS2322, where a type asks for `string` |
| [`no-extend-native`](#no-extend-native) | `String.prototype.at = ...` | [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) | no | accepts it |
| [`no-new-native-nonconstructor`](#no-new-native-nonconstructor) | `new Symbol("order")`, `new BigInt(10)` | [Symbols](../symbols/README.md), [BigInt](../bigint/README.md) | yes | TS7009 |
| [`no-implicit-coercion`](#no-implicit-coercion) | `"" + orderKey`, `+itemCount` | [Symbols](../symbols/README.md), [BigInt](../bigint/README.md) | no | TS2469, TS2736 |
| [`no-loss-of-precision`](#no-loss-of-precision) | `BigInt(9007199254740993)` | [BigInt](../bigint/README.md) | yes | accepts it |
| [`no-constant-binary-expression`](#no-constant-binary-expression) | `order.items === []` | [Values and references](../values_and_references/README.md) | yes | TS2839 |

**Recommended** is what each rule's page on eslint.org says (the documentation for ESLint 10.11.0, checked 2026-09-23): a rule marked recommended there is one that `js.configs.recommended` switches on. The last column is what the [TypeScript section](#typescript-what-tsc-refuses-on-its-own) shows `tsc` doing with the same mistake, written with types.

## How each entry was run

This is the first entry's driver. The others differ only in the rule and the file names, except `eqeqeq`'s, which runs its rule with two sets of options.

<!-- source:values_lints_use_isnan_sh -->
*[`values_lints_use_isnan_sh.sh`](examples/values_lints_use_isnan_sh.sh) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```bash
#!/usr/bin/env bash
# use-isnan: run the bad program and the good one, and lint each with only this
# rule switched on (--no-config-lookup: no eslint.config.js is read). ESLint
# prints each file's absolute path above its report; sed strips this folder's
# part of it, so the output is the same on every machine.
rule='{"use-isnan": "error"}'
here=$(pwd -P)
for program in values_lints_use_isnan_bad_js.js values_lints_use_isnan_good_js.js; do
  echo "\$ node $program"
  node "$program"
  echo "\$ eslint --no-config-lookup --rule '$rule' $program"
  eslint --no-config-lookup --rule "$rule" "$program" | sed "s|$here/||"
  echo "exit status: ${PIPESTATUS[0]}"
done
```
<!-- /source -->

- `--no-config-lookup` tells ESLint not to look for an `eslint.config.js`, so the rule named by `--rule` is the only one switched on ([ESLint — command line ↗](https://eslint.org/docs/latest/use/command-line-interface)).
- ESLint prints each file's absolute path above its report; `sed` removes this folder's part of it, so the report is the same on every machine.
- `exit status: 1` means ESLint reported at least one error, and `0` that it reported nothing ([ESLint — exit codes ↗](https://eslint.org/docs/latest/use/command-line-interface#exit-codes)). Every good program below gets a bare `exit status: 0`, with no report above it.

## `NaN` and `-0` slip past `===`

### `use-isnan`

Flags a comparison with `NaN`. Guards [Eight types](../eight_types/README.md), whose number type includes `NaN`; [`NaN`, `Infinity` and `-0`](../../10_Numbers_and_Math/nan_infinity_and_negative_zero/README.md) has the whole story. Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/use-isnan)

<!-- source:values_lints_use_isnan_bad_js -->
*[`values_lints_use_isnan_bad_js.js`](examples/values_lints_use_isnan_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Counts the readings that failed to parse, by comparing each one with NaN.
const readings = ["21.5", "n/a", "19.0", "--"].map(Number);
const failed = readings.filter((reading) => reading === NaN);
console.log(`failed readings: ${failed.length} of ${readings.length}`);
```
<!-- /source -->

<!-- source:values_lints_use_isnan_good_js -->
*[`values_lints_use_isnan_good_js.js`](examples/values_lints_use_isnan_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Counts the readings that failed to parse, with Number.isNaN.
const readings = ["21.5", "n/a", "19.0", "--"].map(Number);
const failed = readings.filter((reading) => Number.isNaN(reading));
console.log(`failed readings: ${failed.length} of ${readings.length}`);
```
<!-- /source -->

<!-- output:values_lints_use_isnan_sh -->
*Verified output of [`values_lints_use_isnan_sh.sh`](examples/values_lints_use_isnan_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_use_isnan_bad_js.js
failed readings: 0 of 4
$ eslint --no-config-lookup --rule '{"use-isnan": "error"}' values_lints_use_isnan_bad_js.js

values_lints_use_isnan_bad_js.js
  3:45  error  Use the isNaN function to compare with NaN  use-isnan

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_use_isnan_good_js.js
failed readings: 2 of 4
$ eslint --no-config-lookup --rule '{"use-isnan": "error"}' values_lints_use_isnan_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right. Two of the four readings are `NaN` — the good program finds them — yet the bad program counts none, because `NaN` compares unequal to every value, another `NaN` included ([MDN — `NaN` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)). The report names the global `isNaN`, which converts its argument to a number before it tests; `Number.isNaN`, which the good program uses, does not ([MDN — `Number.isNaN()` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)). The rule also flags `case NaN` in a `switch`, and `indexOf(NaN)` once its `enforceForIndexOf` option is on.

### `no-compare-neg-zero`

Flags `===`, `==`, `<` and the other comparisons with `-0`. Guards [Eight types](../eight_types/README.md): the number type has two zeros, and [`Object.is`, `NaN` and `-0`](../../03_Equality_and_Coercion/samevalue_and_samevaluezero/README.md) is the comparison that tells them apart. Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-compare-neg-zero)

<!-- source:values_lints_no_compare_neg_zero_bad_js -->
*[`values_lints_no_compare_neg_zero_bad_js.js`](examples/values_lints_no_compare_neg_zero_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Finds the thermometer readings that rounded to negative zero.
const readings = [0.3, -0.4, 2.6].map(Math.round);
readings.forEach((reading, index) => {
  if (reading === -0) console.log(`reading ${index} rounded to -0`);
});
```
<!-- /source -->

<!-- source:values_lints_no_compare_neg_zero_good_js -->
*[`values_lints_no_compare_neg_zero_good_js.js`](examples/values_lints_no_compare_neg_zero_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Finds the thermometer readings that rounded to negative zero, with Object.is.
const readings = [0.3, -0.4, 2.6].map(Math.round);
readings.forEach((reading, index) => {
  if (Object.is(reading, -0)) console.log(`reading ${index} rounded to -0`);
});
```
<!-- /source -->

<!-- output:values_lints_no_compare_neg_zero_sh -->
*Verified output of [`values_lints_no_compare_neg_zero_sh.sh`](examples/values_lints_no_compare_neg_zero_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_compare_neg_zero_bad_js.js
reading 0 rounded to -0
reading 1 rounded to -0
$ eslint --no-config-lookup --rule '{"no-compare-neg-zero": "error"}' values_lints_no_compare_neg_zero_bad_js.js

values_lints_no_compare_neg_zero_bad_js.js
  4:7  error  Do not use the '===' operator to compare against -0  no-compare-neg-zero

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_no_compare_neg_zero_good_js.js
reading 1 rounded to -0
$ eslint --no-config-lookup --rule '{"no-compare-neg-zero": "error"}' values_lints_no_compare_neg_zero_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right. `=== -0` is also true for `0`, so the bad program reports reading 0, which rounded to a plain `0`, as well as reading 1; `Object.is` reports reading 1 alone. Write `=== 0` when either zero will do, and `Object.is(reading, -0)` when only negative zero will.

## A misspelt `typeof` answer never matches

### `valid-typeof`

Flags a `typeof` result compared with a string that `typeof` never returns. Guards [`typeof`](../the_typeof_operator/README.md). Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/valid-typeof)

<!-- source:values_lints_valid_typeof_bad_js -->
*[`values_lints_valid_typeof_bad_js.js`](examples/values_lints_valid_typeof_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Counts the readings that arrived as text, so they can be converted later.
const readings = [21.5, "19.0", 22.25, "20.5"];
const textReadings = readings.filter((reading) => typeof reading === "strnig");
console.log(`readings that arrived as text: ${textReadings.length}`);
```
<!-- /source -->

<!-- source:values_lints_valid_typeof_good_js -->
*[`values_lints_valid_typeof_good_js.js`](examples/values_lints_valid_typeof_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Counts the readings that arrived as text, so they can be converted later.
const readings = [21.5, "19.0", 22.25, "20.5"];
const textReadings = readings.filter((reading) => typeof reading === "string");
console.log(`readings that arrived as text: ${textReadings.length}`);
```
<!-- /source -->

<!-- output:values_lints_valid_typeof_sh -->
*Verified output of [`values_lints_valid_typeof_sh.sh`](examples/values_lints_valid_typeof_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_valid_typeof_bad_js.js
readings that arrived as text: 0
$ eslint --no-config-lookup --rule '{"valid-typeof": "error"}' values_lints_valid_typeof_bad_js.js

values_lints_valid_typeof_bad_js.js
  3:70  error  Invalid typeof comparison value  valid-typeof

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_valid_typeof_good_js.js
readings that arrived as text: 2
$ eslint --no-config-lookup --rule '{"valid-typeof": "error"}' values_lints_valid_typeof_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right. With `"strnig"` misspelt, the filter keeps nothing, and the bad program counts no text readings where the good one counts 2. The strings `typeof` can return are the eight that `tsc` lists for the [same mistake](#ts2367-a-comparison-between-types-that-do-not-overlap). By default the rule lets a comparison with a variable through; its `requireStringLiterals` option refuses that too.

## `null` and `undefined`: one real bug, one tidy-up, one trap

### `eqeqeq`

Flags every `==` and `!=`. Guards [`null` and `undefined`](../null_and_undefined/README.md), whose `x == null` is the one `==` many teams keep; [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md) has the conversions `==` makes. Not recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/eqeqeq)

<!-- source:values_lints_eqeqeq_bad_js -->
*[`values_lints_eqeqeq_bad_js.js`](examples/values_lints_eqeqeq_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Labels each stock field from a form: "sold out" when it says zero.
const fields = [{ stock: "0" }, { stock: "" }, { stock: "12" }, { stock: null }, {}];
for (const field of fields) {
  const label = field.stock == 0 ? "sold out" : "in stock";
  console.log(`${JSON.stringify(field).padEnd(15)} ${label}`);
}
```
<!-- /source -->

<!-- source:values_lints_eqeqeq_good_js -->
*[`values_lints_eqeqeq_good_js.js`](examples/values_lints_eqeqeq_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Labels each stock field: an empty or missing field is unknown, not zero.
function label(stock) {
  if (stock == null || stock === "") return "unknown";
  return Number(stock) === 0 ? "sold out" : "in stock";
}
const fields = [{ stock: "0" }, { stock: "" }, { stock: "12" }, { stock: null }, {}];
for (const field of fields) {
  console.log(`${JSON.stringify(field).padEnd(15)} ${label(field.stock)}`);
}
```
<!-- /source -->

<!-- output:values_lints_eqeqeq_sh -->
*Verified output of [`values_lints_eqeqeq_sh.sh`](examples/values_lints_eqeqeq_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_eqeqeq_bad_js.js
{"stock":"0"}   sold out
{"stock":""}    sold out
{"stock":"12"}  in stock
{"stock":null}  in stock
{}              in stock
$ eslint --no-config-lookup --rule '{"eqeqeq": "error"}' values_lints_eqeqeq_bad_js.js

values_lints_eqeqeq_bad_js.js
  4:29  error  Expected '===' and instead saw '=='  eqeqeq

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_eqeqeq_good_js.js
{"stock":"0"}   sold out
{"stock":""}    unknown
{"stock":"12"}  in stock
{"stock":null}  unknown
{}              unknown
$ eslint --no-config-lookup --rule '{"eqeqeq": "error"}' values_lints_eqeqeq_good_js.js

values_lints_eqeqeq_good_js.js
  3:13  error  Expected '===' and instead saw '=='  eqeqeq

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ eslint --no-config-lookup --rule '{"eqeqeq": ["error", "always", {"null": "ignore"}]}' values_lints_eqeqeq_good_js.js
exit status: 0
$ eslint --no-config-lookup --rule '{"eqeqeq": ["error", "always", {"null": "ignore"}]}' values_lints_eqeqeq_bad_js.js

values_lints_eqeqeq_bad_js.js
  4:29  error  Expected '===' and instead saw '=='  eqeqeq

✖ 1 problem (1 error, 0 warnings)

exit status: 1
```
<!-- /output -->

**When it is right, and when it is noise.** Right for `field.stock == 0`. `==` turns the empty string into `0`, so an empty field reads as sold out, and it does not find `null` or `undefined` equal to `0`, so a missing field reads as in stock: three of the five rows are wrong. Noise for `stock == null`, which is true for `null` and `undefined` (the good program's last two rows), and which the rule reports all the same. With `{"null": "ignore"}` the idiom goes through and `== 0` is still reported — the last two runs.

### `no-undef-init`

Flags a variable given `undefined` as its first value. Guards [`null` and `undefined`](../null_and_undefined/README.md). Not recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-undef-init)

<!-- source:values_lints_no_undef_init_bad_js -->
*[`values_lints_no_undef_init_bad_js.js`](examples/values_lints_no_undef_init_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Starts the discount as "not chosen yet", spelling out undefined.
let discount = undefined;
console.log(`before: ${typeof discount}`);
discount = 10;
console.log(`after: ${discount}`);
```
<!-- /source -->

<!-- source:values_lints_no_undef_init_good_js -->
*[`values_lints_no_undef_init_good_js.js`](examples/values_lints_no_undef_init_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Starts the discount as "not chosen yet": a let with no value holds undefined.
let discount;
console.log(`before: ${typeof discount}`);
discount = 10;
console.log(`after: ${discount}`);
```
<!-- /source -->

<!-- output:values_lints_no_undef_init_sh -->
*Verified output of [`values_lints_no_undef_init_sh.sh`](examples/values_lints_no_undef_init_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_undef_init_bad_js.js
before: undefined
after: 10
$ eslint --no-config-lookup --rule '{"no-undef-init": "error"}' values_lints_no_undef_init_bad_js.js

values_lints_no_undef_init_bad_js.js
  2:5  error  It's not necessary to initialize 'discount' to undefined  no-undef-init

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

exit status: 1
$ node values_lints_no_undef_init_good_js.js
before: undefined
after: 10
$ eslint --no-config-lookup --rule '{"no-undef-init": "error"}' values_lints_no_undef_init_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** A tidy-up, not a bug-finder: the two programs print the same two lines, because a `let` with no value already holds `undefined`, and the report offers `--fix` to delete the initializer. The rule's own page names the case where deleting it changes the program — a `var` declared inside a loop, which `= undefined` resets on every pass — and says to switch the rule off there.

### `no-shadow-restricted-names`

Flags a parameter, function or variable named `undefined`, `NaN`, `Infinity`, `eval` or `arguments`, and by default one named `globalThis` (its `reportGlobalThis` option); the one exception is a variable `undefined` declared with no value and never assigned one. Guards [`null` and `undefined`](../null_and_undefined/README.md). Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)

<!-- source:values_lints_no_shadow_restricted_names_bad_js -->
*[`values_lints_no_shadow_restricted_names_bad_js.js`](examples/values_lints_no_shadow_restricted_names_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// An old idiom: a parameter named undefined, which callers are meant to leave out.
function isMissing(value, undefined) {
  return value === undefined;
}
console.log(isMissing(undefined));
// map passes each element's index as the second argument.
console.log(JSON.stringify(["tea", undefined].map(isMissing)));
```
<!-- /source -->

<!-- source:values_lints_no_shadow_restricted_names_good_js -->
*[`values_lints_no_shadow_restricted_names_good_js.js`](examples/values_lints_no_shadow_restricted_names_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// The same check, with undefined left as the language's own.
function isMissing(value) {
  return value === undefined;
}
console.log(isMissing(undefined));
// map passes each element's index as the second argument.
console.log(JSON.stringify(["tea", undefined].map(isMissing)));
```
<!-- /source -->

<!-- output:values_lints_no_shadow_restricted_names_sh -->
*Verified output of [`values_lints_no_shadow_restricted_names_sh.sh`](examples/values_lints_no_shadow_restricted_names_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_shadow_restricted_names_bad_js.js
true
[false,false]
$ eslint --no-config-lookup --rule '{"no-shadow-restricted-names": "error"}' values_lints_no_shadow_restricted_names_bad_js.js

values_lints_no_shadow_restricted_names_bad_js.js
  2:27  error  Shadowing of global property 'undefined'  no-shadow-restricted-names

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_no_shadow_restricted_names_good_js.js
true
[false,true]
$ eslint --no-config-lookup --rule '{"no-shadow-restricted-names": "error"}' values_lints_no_shadow_restricted_names_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Right in code written today. Inside the bad `isMissing`, `undefined` is the second parameter, and `map` passes each element's index there, so the function compares `"tea"` with `0` and `undefined` with `1`, and returns `[false,false]` where `[false,true]` was meant. The idiom comes from old code, which named a parameter `undefined` so that nothing could reassign it; the global `undefined` is now read-only in every non-legacy browser ([MDN — `undefined` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)). Old code that still carries the idiom is the only place the report is noise.

## A wrapper is not its primitive, and a built-in prototype is not yours

### `no-new-wrappers`

Flags `new String`, `new Number` and `new Boolean`. Guards [Primitives and wrappers](../primitives_and_wrapper_objects/README.md). Not recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-new-wrappers)

<!-- source:values_lints_no_new_wrappers_bad_js -->
*[`values_lints_no_new_wrappers_bad_js.js`](examples/values_lints_no_new_wrappers_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Reads two fields from a form into wrapper objects.
const form = { paid: 0, currency: "EUR" };
const paid = new Boolean(form.paid);
const currency = new String(form.currency);
console.log(`${typeof paid}, ${typeof currency}`);
console.log(paid ? "ship the order" : "wait for payment");
console.log(currency === "EUR" ? "price in euros" : "unknown currency");
```
<!-- /source -->

<!-- source:values_lints_no_new_wrappers_good_js -->
*[`values_lints_no_new_wrappers_good_js.js`](examples/values_lints_no_new_wrappers_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Boolean() and String() called without new convert, and return primitives.
const form = { paid: 0, currency: "EUR" };
const paid = Boolean(form.paid);
const currency = String(form.currency);
console.log(`${typeof paid}, ${typeof currency}`);
console.log(paid ? "ship the order" : "wait for payment");
console.log(currency === "EUR" ? "price in euros" : "unknown currency");
```
<!-- /source -->

<!-- output:values_lints_no_new_wrappers_sh -->
*Verified output of [`values_lints_no_new_wrappers_sh.sh`](examples/values_lints_no_new_wrappers_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_new_wrappers_bad_js.js
object, object
ship the order
unknown currency
$ eslint --no-config-lookup --rule '{"no-new-wrappers": "error"}' values_lints_no_new_wrappers_bad_js.js

values_lints_no_new_wrappers_bad_js.js
  3:14  error  Do not use Boolean as a constructor  no-new-wrappers
  4:18  error  Do not use String as a constructor   no-new-wrappers

✖ 2 problems (2 errors, 0 warnings)

exit status: 1
$ node values_lints_no_new_wrappers_good_js.js
boolean, string
wait for payment
price in euros
$ eslint --no-config-lookup --rule '{"no-new-wrappers": "error"}' values_lints_no_new_wrappers_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right. With `new`, both values are objects (the first line): the wrapper around `false` is truthy, so an unpaid order ships, and the wrapper around `"EUR"` is not `===` to the string `"EUR"`. Called without `new`, `Boolean()` and `String()` convert and return primitives, and both answers come out right.

### `no-extend-native`

Flags adding a property to a built-in prototype such as `String.prototype`, or replacing one. Guards [Primitives and wrappers](../primitives_and_wrapper_objects/README.md), which shows where a string's methods come from. Not recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-extend-native)

<!-- source:values_lints_no_extend_native_bad_js -->
*[`values_lints_no_extend_native_bad_js.js`](examples/values_lints_no_extend_native_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// An old polyfill for String.prototype.at, written before the language had one.
String.prototype.at = function (index) {
  return this.charAt(index);
};
// From here on, every string's at() is this one.
console.log(JSON.stringify("tea".at(-1)));
```
<!-- /source -->

<!-- source:values_lints_no_extend_native_good_js -->
*[`values_lints_no_extend_native_good_js.js`](examples/values_lints_no_extend_native_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// A helper for strings is a function that takes the string.
function lastLetter(text) {
  return text.slice(-1);
}
console.log(JSON.stringify(lastLetter("tea")));
console.log(JSON.stringify("tea".at(-1)));
```
<!-- /source -->

<!-- output:values_lints_no_extend_native_sh -->
*Verified output of [`values_lints_no_extend_native_sh.sh`](examples/values_lints_no_extend_native_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_extend_native_bad_js.js
""
$ eslint --no-config-lookup --rule '{"no-extend-native": "error"}' values_lints_no_extend_native_bad_js.js

values_lints_no_extend_native_bad_js.js
  2:1  error  String prototype is read only, properties should not be added  no-extend-native

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_no_extend_native_good_js.js
"a"
"a"
$ eslint --no-config-lookup --rule '{"no-extend-native": "error"}' values_lints_no_extend_native_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Right in any code that other code runs beside. The old polyfill replaced the built-in `at()` for every string after it, so `"tea".at(-1)` became `""`, where the built-in counts back from the end and gives `"a"` (the good program's second line). Extensions have held the language back too: the standard `Array.prototype.flat` is not called `flatten` because the MooTools library had already put a different `flatten` on arrays ([SmooshGate FAQ ↗](https://developer.chrome.com/blog/smooshgate)). The report is noise only for a real polyfill — loaded on purpose, written to the specification, and installing a method only where it is missing — and the `exceptions` option names the built-ins such code may touch.

## Symbols and BigInts: no `new`, no shortcuts, no long number literals

### `no-new-native-nonconstructor`

Flags `new Symbol` and `new BigInt`. Guards [Symbols](../symbols/README.md) and [BigInt](../bigint/README.md). Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)

<!-- source:values_lints_no_new_native_nonconstructor_bad_js -->
*[`values_lints_no_new_native_nonconstructor_bad_js.js`](examples/values_lints_no_new_native_nonconstructor_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Makes an order key and an item count with new, as if they were objects.
// The try/catch is only here so that the example prints each error and carries on.
try {
  const orderKey = new Symbol("order");
  console.log(String(orderKey));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
try {
  const itemCount = new BigInt(10);
  console.log(`${itemCount}n`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
```
<!-- /source -->

<!-- source:values_lints_no_new_native_nonconstructor_good_js -->
*[`values_lints_no_new_native_nonconstructor_good_js.js`](examples/values_lints_no_new_native_nonconstructor_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Symbol() and BigInt() are called without new, and return primitives.
const orderKey = Symbol("order");
const itemCount = BigInt(10);
console.log(`${String(orderKey)} is a ${typeof orderKey}`);
console.log(`${itemCount}n is a ${typeof itemCount}`);
```
<!-- /source -->

<!-- output:values_lints_no_new_native_nonconstructor_sh -->
*Verified output of [`values_lints_no_new_native_nonconstructor_sh.sh`](examples/values_lints_no_new_native_nonconstructor_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_new_native_nonconstructor_bad_js.js
TypeError: Symbol is not a constructor
TypeError: BigInt is not a constructor
$ eslint --no-config-lookup --rule '{"no-new-native-nonconstructor": "error"}' values_lints_no_new_native_nonconstructor_bad_js.js

values_lints_no_new_native_nonconstructor_bad_js.js
   4:24  error  `Symbol` cannot be called as a constructor  no-new-native-nonconstructor
  10:25  error  `BigInt` cannot be called as a constructor  no-new-native-nonconstructor

✖ 2 problems (2 errors, 0 warnings)

exit status: 1
$ node values_lints_no_new_native_nonconstructor_good_js.js
Symbol(order) is a symbol
10n is a bigint
$ eslint --no-config-lookup --rule '{"no-new-native-nonconstructor": "error"}' values_lints_no_new_native_nonconstructor_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right: both calls throw a `TypeError` (the bad program catches each one only to print it and go on). Called without `new`, `Symbol()` and `BigInt()` return a `symbol` and a `bigint`, as the good program prints.

### `no-implicit-coercion`

Flags short conversions such as `"" + x` to a string, `+x` to a number and `!!x` to a boolean. Guards [Symbols](../symbols/README.md) and [BigInt](../bigint/README.md), the two primitives that refuse some of them; [Converting on purpose](../../03_Equality_and_Coercion/explicit_conversion/README.md) has the long forms. Not recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-implicit-coercion)

<!-- source:values_lints_no_implicit_coercion_bad_js -->
*[`values_lints_no_implicit_coercion_bad_js.js`](examples/values_lints_no_implicit_coercion_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Turns an order key into text and an item count into a number, the short way.
// The try/catch is only here so that the example prints each error and carries on.
const orderKey = Symbol("order");
const itemCount = 3n;
try {
  const keyText = "" + orderKey;
  console.log(`key: ${keyText}`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
try {
  const count = +itemCount;
  console.log(`count: ${count}`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
```
<!-- /source -->

<!-- source:values_lints_no_implicit_coercion_good_js -->
*[`values_lints_no_implicit_coercion_good_js.js`](examples/values_lints_no_implicit_coercion_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// String() takes a symbol and Number() takes a BigInt, and each names its conversion.
const orderKey = Symbol("order");
const itemCount = 3n;
console.log(`key: ${String(orderKey)}`);
console.log(`count: ${Number(itemCount)}`);
```
<!-- /source -->

<!-- output:values_lints_no_implicit_coercion_sh -->
*Verified output of [`values_lints_no_implicit_coercion_sh.sh`](examples/values_lints_no_implicit_coercion_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_implicit_coercion_bad_js.js
TypeError: Cannot convert a Symbol value to a string
TypeError: Cannot convert a BigInt value to a number
$ eslint --no-config-lookup --rule '{"no-implicit-coercion": "error"}' values_lints_no_implicit_coercion_bad_js.js

values_lints_no_implicit_coercion_bad_js.js
   6:19  error  Unexpected implicit coercion encountered. Use `String(orderKey)` instead   no-implicit-coercion
  12:17  error  Unexpected implicit coercion encountered. Use `Number(itemCount)` instead  no-implicit-coercion

✖ 2 problems (2 errors, 0 warnings)

exit status: 1
$ node values_lints_no_implicit_coercion_good_js.js
key: Symbol(order)
count: 3
$ eslint --no-config-lookup --rule '{"no-implicit-coercion": "error"}' values_lints_no_implicit_coercion_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Right where a value can be a symbol or a BigInt: `"" + orderKey` and `+itemCount` throw, and the report names the calls that work, `String(orderKey)` and `Number(itemCount)`. Elsewhere it is a rule about style, and a team that likes `!!value` keeps it with the `allow` option.

### `no-loss-of-precision`

Flags a number literal whose digits a double cannot hold. Guards [BigInt](../bigint/README.md): such a literal is rounded before `BigInt()` ever sees it. Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-loss-of-precision)

<!-- source:values_lints_no_loss_of_precision_bad_js -->
*[`values_lints_no_loss_of_precision_bad_js.js`](examples/values_lints_no_loss_of_precision_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// An order id past 2^53, written as a number literal and turned into a BigInt.
const orderId = BigInt(9007199254740993);
console.log(`order ${orderId}`);
```
<!-- /source -->

<!-- source:values_lints_no_loss_of_precision_good_js -->
*[`values_lints_no_loss_of_precision_good_js.js`](examples/values_lints_no_loss_of_precision_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// A BigInt literal, or a string handed to BigInt(), keeps every digit.
const orderId = 9007199254740993n;
const fromText = BigInt("9007199254740993");
console.log(`order ${orderId}`);
console.log(`order ${fromText}`);
```
<!-- /source -->

<!-- output:values_lints_no_loss_of_precision_sh -->
*Verified output of [`values_lints_no_loss_of_precision_sh.sh`](examples/values_lints_no_loss_of_precision_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_loss_of_precision_bad_js.js
order 9007199254740992
$ eslint --no-config-lookup --rule '{"no-loss-of-precision": "error"}' values_lints_no_loss_of_precision_bad_js.js

values_lints_no_loss_of_precision_bad_js.js
  2:24  error  This number literal will lose precision at runtime  no-loss-of-precision

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_no_loss_of_precision_good_js.js
order 9007199254740993
order 9007199254740993
$ eslint --no-config-lookup --rule '{"no-loss-of-precision": "error"}' values_lints_no_loss_of_precision_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right. `9007199254740993` is 2^53 + 1, and as a number literal it becomes `9007199254740992`, the id the bad program prints. A BigInt literal, or the digits handed to `BigInt()` as a string, keeps the id whole. [Safe integers](../../10_Numbers_and_Math/safe_integers/README.md) shows where a `number` stops being exact.

## A new object is never `===` to anything already there

### `no-constant-binary-expression`

Flags an expression whose result can never change — here, a comparison with an array made on the spot. Guards [Values and references](../values_and_references/README.md). Recommended. [Rule page ↗](https://eslint.org/docs/latest/rules/no-constant-binary-expression)

<!-- source:values_lints_no_constant_binary_expression_bad_js -->
*[`values_lints_no_constant_binary_expression_bad_js.js`](examples/values_lints_no_constant_binary_expression_bad_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Reports the empty orders, by comparing each item list with [].
const orders = [
  { id: 1, items: [] },
  { id: 2, items: ["tea"] },
];
for (const order of orders) {
  console.log(`order ${order.id}: ${order.items === [] ? "empty" : "has items"}`);
}
```
<!-- /source -->

<!-- source:values_lints_no_constant_binary_expression_good_js -->
*[`values_lints_no_constant_binary_expression_good_js.js`](examples/values_lints_no_constant_binary_expression_good_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Reports the empty orders: an empty list is one whose length is 0.
const orders = [
  { id: 1, items: [] },
  { id: 2, items: ["tea"] },
];
for (const order of orders) {
  console.log(`order ${order.id}: ${order.items.length === 0 ? "empty" : "has items"}`);
}
```
<!-- /source -->

<!-- output:values_lints_no_constant_binary_expression_sh -->
*Verified output of [`values_lints_no_constant_binary_expression_sh.sh`](examples/values_lints_no_constant_binary_expression_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ node values_lints_no_constant_binary_expression_bad_js.js
order 1: has items
order 2: has items
$ eslint --no-config-lookup --rule '{"no-constant-binary-expression": "error"}' values_lints_no_constant_binary_expression_bad_js.js

values_lints_no_constant_binary_expression_bad_js.js
  7:53  error  Unexpected comparison to newly constructed object. These two values can never be equal  no-constant-binary-expression

✖ 1 problem (1 error, 0 warnings)

exit status: 1
$ node values_lints_no_constant_binary_expression_good_js.js
order 1: empty
order 2: has items
$ eslint --no-config-lookup --rule '{"no-constant-binary-expression": "error"}' values_lints_no_constant_binary_expression_good_js.js
exit status: 0
```
<!-- /output -->

**When it is right, and when it is noise.** Always right. `[]` makes a new array, and `===` between two objects is true only when both sides are the same object, so `order.items === []` is `false` for every order, and the empty one reports that it has items. Test the length instead, as the good program does. The rule also finds other expressions that cannot change, such as a `??` whose left side can never be `null` or `undefined`.

## TypeScript: what `tsc` refuses on its own

With the types written down, `tsc` refuses seven of the twelve mistakes without any linter. Each file below is a `_tserror.ts` example: the runner checks it alone with the library's `strict` settings, requires the check to fail, and records what `tsc` says ([How a page is checked](../../00_Start_Here/how_a_page_is_checked/README.md)).

### TS2367: a comparison between types that do not overlap

<!-- source:values_lints_ts_no_overlap_tserror -->
*[`values_lints_ts_no_overlap_tserror.ts`](examples/values_lints_ts_no_overlap_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The mistakes valid-typeof and eqeqeq flag, where tsc knows the types.
const readings: (number | string)[] = [21.5, "19.0"];
const textReadings = readings.filter((reading) => typeof reading === "strnig");

const stock: string = "0";
const soldOut = stock == 0;
```
<!-- /source -->

<!-- output:values_lints_ts_no_overlap_tserror -->
*What `tsc` says about [`values_lints_ts_no_overlap_tserror.ts`](examples/values_lints_ts_no_overlap_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_lints_ts_no_overlap_tserror.ts:3:51 - error TS2367: This comparison appears to be unintentional because the types '"bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined"' and '"strnig"' have no overlap.

3 const textReadings = readings.filter((reading) => typeof reading === "strnig");
                                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~

values_lints_ts_no_overlap_tserror.ts:6:17 - error TS2367: This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.

6 const soldOut = stock == 0;
                  ~~~~~~~~~~


Found 2 errors in the same file, starting at: values_lints_ts_no_overlap_tserror.ts:3
```
<!-- /output -->

The first error is `valid-typeof`'s mistake, and its message lists the eight strings `typeof` can return. The second is the `== 0` that `eqeqeq` flags: `tsc` refuses it because the types `string` and `number` have no overlap, although at run time `==` converts, and finds `"0"` equal to `0` — the first row of the `eqeqeq` bad program.

### TS2845 and TS2839: a condition that is always false

<!-- source:values_lints_ts_always_false_tserror -->
*[`values_lints_ts_always_false_tserror.ts`](examples/values_lints_ts_always_false_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The mistakes use-isnan and no-constant-binary-expression flag, with types.
const reading: number = Number("n/a");
const failed = reading === NaN;

const items: string[] = [];
const empty = items === [];
```
<!-- /source -->

<!-- output:values_lints_ts_always_false_tserror -->
*What `tsc` says about [`values_lints_ts_always_false_tserror.ts`](examples/values_lints_ts_always_false_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_lints_ts_always_false_tserror.ts:3:16 - error TS2845: This condition will always return 'false'.

3 const failed = reading === NaN;
                 ~~~~~~~~~~~~~~~

  values_lints_ts_always_false_tserror.ts:3:16 - Did you mean 'Number.isNaN(reading)'?
    3 const failed = reading === NaN;
                     ~~~~~~~

values_lints_ts_always_false_tserror.ts:6:15 - error TS2839: This condition will always return 'false' since JavaScript compares objects by reference, not value.

6 const empty = items === [];
                ~~~~~~~~~~~~


Found 2 errors in the same file, starting at: values_lints_ts_always_false_tserror.ts:3
```
<!-- /output -->

`use-isnan`'s mistake draws TS2845, with a hint that names `Number.isNaN`; `no-constant-binary-expression`'s draws TS2839, whose message gives the reason: objects are compared by reference.

### TS7009: `new` on `Symbol` and `BigInt`

<!-- source:values_lints_ts_constructors_tserror -->
*[`values_lints_ts_constructors_tserror.ts`](examples/values_lints_ts_constructors_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The mistakes no-new-native-nonconstructor flags, with types.
const orderKey = new Symbol("order");
const itemCount = new BigInt(10);
```
<!-- /source -->

<!-- output:values_lints_ts_constructors_tserror -->
*What `tsc` says about [`values_lints_ts_constructors_tserror.ts`](examples/values_lints_ts_constructors_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_lints_ts_constructors_tserror.ts:2:18 - error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.

2 const orderKey = new Symbol("order");
                   ~~~~~~~~~~~~~~~~~~~

values_lints_ts_constructors_tserror.ts:3:19 - error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.

3 const itemCount = new BigInt(10);
                    ~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: values_lints_ts_constructors_tserror.ts:2
```
<!-- /output -->

`no-new-native-nonconstructor`'s two mistakes. TS7009 is one of the "implicitly has an `any` type" errors that `noImplicitAny`, a flag `strict` turns on, reports ([TSConfig — `noImplicitAny` ↗](https://www.typescriptlang.org/tsconfig/noImplicitAny.html)); [what `strict` adds](#ts18047-what-strict-adds) shows `tsc` still refusing both lines, with TS2350, when `strict` is off.

### TS2469 and TS2736: `+` on a symbol or a BigInt

<!-- source:values_lints_ts_coercions_tserror -->
*[`values_lints_ts_coercions_tserror.ts`](examples/values_lints_ts_coercions_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The two shortcuts no-implicit-coercion flags that throw, with types.
const orderKey = Symbol("order");
const keyText = "" + orderKey;

const itemCount = 3n;
const count = +itemCount;
```
<!-- /source -->

<!-- output:values_lints_ts_coercions_tserror -->
*What `tsc` says about [`values_lints_ts_coercions_tserror.ts`](examples/values_lints_ts_coercions_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_lints_ts_coercions_tserror.ts:3:22 - error TS2469: The '+' operator cannot be applied to type 'symbol'.

3 const keyText = "" + orderKey;
                       ~~~~~~~~

values_lints_ts_coercions_tserror.ts:6:16 - error TS2736: Operator '+' cannot be applied to type 'bigint'.

6 const count = +itemCount;
                 ~~~~~~~~~


Found 2 errors in the same file, starting at: values_lints_ts_coercions_tserror.ts:3
```
<!-- /output -->

The two shortcuts from the `no-implicit-coercion` entry that throw at run time. `tsc` refuses them from the types alone.

### TS2322: `String` is not `string`

<!-- source:values_lints_ts_wrapper_tserror -->
*[`values_lints_ts_wrapper_tserror.ts`](examples/values_lints_ts_wrapper_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The mistake no-new-wrappers flags, where a type says what the value should be.
const currency: string = new String("EUR");
```
<!-- /source -->

<!-- output:values_lints_ts_wrapper_tserror -->
*What `tsc` says about [`values_lints_ts_wrapper_tserror.ts`](examples/values_lints_ts_wrapper_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_lints_ts_wrapper_tserror.ts:2:7 - error TS2322: Type 'String' is not assignable to type 'string'.
  'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.

2 const currency: string = new String("EUR");
        ~~~~~~~~


Found 1 error in values_lints_ts_wrapper_tserror.ts:2
```
<!-- /output -->

`no-new-wrappers`' mistake, refused because the annotation asks for a `string`; the second line of the message names the difference. With no annotation to contradict it, `tsc` accepts a wrapper: the `new Boolean` in [what `tsc` lets through](#what-tsc-lets-through).

### TS18047: what `strict` adds

<!-- source:values_lints_ts_strict_tserror -->
*[`values_lints_ts_strict_tserror.ts`](examples/values_lints_ts_strict_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// The first letter of a name that may be missing.
function initial(name: string | null): string {
  return name.slice(0, 1);
}
```
<!-- /source -->

<!-- output:values_lints_ts_strict_tserror -->
*What `tsc` says about [`values_lints_ts_strict_tserror.ts`](examples/values_lints_ts_strict_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_lints_ts_strict_tserror.ts:3:10 - error TS18047: 'name' is possibly 'null'.

3   return name.slice(0, 1);
           ~~~~


Found 1 error in values_lints_ts_strict_tserror.ts:3
```
<!-- /output -->

`'name' is possibly 'null'` comes from `strictNullChecks`, one of the flags `strict` turns on ([TSConfig — `strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig/strictNullChecks.html)). A driver checks this file, and the `new Symbol` file above, from the command line:

<!-- output:values_lints_ts_strict_off_sh -->
*Verified output of [`values_lints_ts_strict_off_sh.sh`](examples/values_lints_ts_strict_off_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ tsc --noEmit --pretty false values_lints_ts_strict_tserror.ts
error TS5112: tsconfig.json is present but will not be loaded if files are specified on commandline. Use '--ignoreConfig' to skip this error.
exit status: 1
$ tsc --ignoreConfig --noEmit --pretty false --strict false values_lints_ts_strict_tserror.ts
exit status: 0
$ tsc --ignoreConfig --noEmit --pretty false values_lints_ts_strict_tserror.ts
values_lints_ts_strict_tserror.ts(3,10): error TS18047: 'name' is possibly 'null'.
exit status: 1
$ tsc --ignoreConfig --noEmit --pretty false --strict false values_lints_ts_constructors_tserror.ts
values_lints_ts_constructors_tserror.ts(2,18): error TS2350: Only a void function can be called with the 'new' keyword.
values_lints_ts_constructors_tserror.ts(3,19): error TS2350: Only a void function can be called with the 'new' keyword.
exit status: 1
$ tsc --ignoreConfig --noEmit --pretty false values_lints_ts_constructors_tserror.ts
values_lints_ts_constructors_tserror.ts(2,18): error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.
values_lints_ts_constructors_tserror.ts(3,19): error TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.
exit status: 1
```
<!-- /output -->

- The first run is why every `tsc` command on this page carries `--ignoreConfig`: `tsc` 7 refuses a list of files while a `tsconfig.json` is present, and the library keeps one at the top of the repo, above this folder.
- With `--strict false` the file passes; with no `--strict` flag at all it fails, so `tsc` 7.0.2 checks with `strict` unless it is told not to.
- The `new Symbol` file fails both ways: without `strict`, TS2350 takes the place of TS7009.

### What `tsc` lets through

The other five mistakes pass `tsc`, and so does a wrapper that no annotation contradicts. This is a `_ts.ts` example, so the runner type-checks it with the library's `strict` settings before it runs it — a type error would fail the build — and then runs it:

<!-- source:values_lints_ts_accepted_ts -->
*[`values_lints_ts_accepted_ts.ts`](examples/values_lints_ts_accepted_ts.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// Six mistakes from the ESLint entries above, as TypeScript that tsc accepts.
const readings: number[] = [0.3, -0.4, 2.6].map(Math.round);
readings.forEach((reading, index) => {
  if (reading === -0) console.log(`reading ${index} rounded to -0`);
});

let discount: number | undefined = undefined;
console.log(`before: ${typeof discount}`);

function isMissing(value: unknown, undefined?: unknown): boolean {
  return value === undefined;
}
console.log(JSON.stringify(["tea", undefined].map(isMissing)));

const form = { paid: 0 };
const paid = new Boolean(form.paid);
console.log(paid ? "ship the order" : "wait for payment");

String.prototype.at = function (index: number): string {
  return this.charAt(index);
};
console.log(JSON.stringify("tea".at(-1)));

const orderId: bigint = BigInt(9007199254740993);
console.log(`order ${orderId}`);
```
<!-- /source -->

<!-- output:values_lints_ts_accepted_ts -->
*Verified output of [`values_lints_ts_accepted_ts.ts`](examples/values_lints_ts_accepted_ts.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
reading 0 rounded to -0
reading 1 rounded to -0
before: undefined
[false,false]
ship the order
""
order 9007199254740992
```
<!-- /output -->

Each line repeats what the bad program printed in the entry for `no-compare-neg-zero`, `no-undef-init`, `no-shadow-restricted-names`, `no-new-wrappers`, `no-extend-native` and `no-loss-of-precision`, in that order. For these, ESLint is the only check on this page that speaks up.

## What no lint catches

Six programs that pass both tools and still print a wrong answer, most of them beside the version that works. One driver lints all six with every rule on this page switched on at once, then runs `tsc` with `--strict` over the same files, reading JavaScript with `--checkJs` ([TSConfig — `checkJs` ↗](https://www.typescriptlang.org/tsconfig/checkJs.html)): `tsc` infers the types, and one JSDoc comment gives a parameter the type `unknown`. Both finish without a word:

<!-- output:values_lints_unflagged_sh -->
*Verified output of [`values_lints_unflagged_sh.sh`](examples/values_lints_unflagged_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ eslint --no-config-lookup \
    --rule '{"use-isnan": "error"}' \
    --rule '{"no-compare-neg-zero": "error"}' \
    --rule '{"valid-typeof": "error"}' \
    --rule '{"eqeqeq": "error"}' \
    --rule '{"no-undef-init": "error"}' \
    --rule '{"no-shadow-restricted-names": "error"}' \
    --rule '{"no-new-wrappers": "error"}' \
    --rule '{"no-extend-native": "error"}' \
    --rule '{"no-new-native-nonconstructor": "error"}' \
    --rule '{"no-implicit-coercion": "error"}' \
    --rule '{"no-loss-of-precision": "error"}' \
    --rule '{"no-constant-binary-expression": "error"}' \
    values_lints_unflagged_*_js.js
exit status: 0
$ tsc --ignoreConfig --noEmit --strict --allowJs --checkJs --module nodenext values_lints_unflagged_*_js.js
exit status: 0
```
<!-- /output -->

### `typeof x === "object"` is true for `null` and for arrays

<!-- source:values_lints_unflagged_typeof_js -->
*[`values_lints_unflagged_typeof_js.js`](examples/values_lints_unflagged_typeof_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Keeps the inputs that are records (plain objects).
const inputs = [{ sku: "tea" }, null, ["cake"], "scone"];
const byTypeof = inputs.filter((input) => typeof input === "object");
const records = inputs.filter(
  (input) => input !== null && typeof input === "object" && !Array.isArray(input),
);
console.log(`typeof only: ${JSON.stringify(byTypeof)}`);
console.log(`checked:     ${JSON.stringify(records)}`);
```
<!-- /source -->

<!-- output:values_lints_unflagged_typeof_js -->
*Verified output of [`values_lints_unflagged_typeof_js.js`](examples/values_lints_unflagged_typeof_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
typeof only: [{"sku":"tea"},null,["cake"]]
checked:     [{"sku":"tea"}]
```
<!-- /output -->

`typeof` answers `"object"` for `null` and for an array, so the first line keeps both as records; [`typeof`](../the_typeof_operator/README.md) explains the answer for `null`. The second line is the test that works: not `null`, an object, and not an array.

### `||` treats `0` as missing

<!-- source:values_lints_unflagged_or_default_js -->
*[`values_lints_unflagged_or_default_js.js`](examples/values_lints_unflagged_or_default_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Fills in a quantity of 1 when an order line gives none.
const lines = [{ sku: "tea", quantity: 0 }, { sku: "cake" }];
for (const line of lines) {
  console.log(`${line.sku}: || gives ${line.quantity || 1}, ?? gives ${line.quantity ?? 1}`);
}
```
<!-- /source -->

<!-- output:values_lints_unflagged_or_default_js -->
*Verified output of [`values_lints_unflagged_or_default_js.js`](examples/values_lints_unflagged_or_default_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
tea: || gives 1, ?? gives 0
cake: || gives 1, ?? gives 1
```
<!-- /output -->

`||` replaces the quantity `0` as well as the missing one, so an order line for no tea becomes a line for one; `??` replaces only `null` and `undefined` ([MDN — `??` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)). See [`null` and `undefined`](../null_and_undefined/README.md) and [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md).

### `instanceof String` is false for a string

<!-- source:values_lints_unflagged_instanceof_js -->
*[`values_lints_unflagged_instanceof_js.js`](examples/values_lints_unflagged_instanceof_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Tells text from other input with instanceof String.
/** @param {unknown} input */
function isText(input) {
  return input instanceof String;
}
console.log(`isText("EUR"): ${isText("EUR")}`);
console.log(`typeof "EUR": ${typeof "EUR"}`);
```
<!-- /source -->

<!-- output:values_lints_unflagged_instanceof_js -->
*Verified output of [`values_lints_unflagged_instanceof_js.js`](examples/values_lints_unflagged_instanceof_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
isText("EUR"): false
typeof "EUR": string
```
<!-- /output -->

`"EUR"` is a primitive, not a `String` object, so `instanceof String` is `false`, and `typeof` is the test that answers `string`. See [Primitives and wrappers](../primitives_and_wrapper_objects/README.md) and [`instanceof`](../../07_Prototypes_and_Classes/instanceof/README.md).

### `JSON.stringify` drops a symbol key

<!-- source:values_lints_unflagged_symbol_json_js -->
*[`values_lints_unflagged_symbol_json_js.js`](examples/values_lints_unflagged_symbol_json_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Saves an order whose id sits under a symbol key.
const orderId = Symbol("orderId");
const order = { [orderId]: 7, total: 100 };
console.log(`own keys: ${Reflect.ownKeys(order).map(String).join(", ")}`);
console.log(`saved:    ${JSON.stringify(order)}`);
```
<!-- /source -->

<!-- output:values_lints_unflagged_symbol_json_js -->
*Verified output of [`values_lints_unflagged_symbol_json_js.js`](examples/values_lints_unflagged_symbol_json_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
own keys: total, Symbol(orderId)
saved:    {"total":100}
```
<!-- /output -->

The order has two own keys, and the saved JSON has one: `JSON.stringify` skips the symbol key and says nothing. Keep data that has to be saved under a string key. See [Symbols](../symbols/README.md) and [JSON](../../06_Objects/json/README.md).

### `Number()` rounds a BigInt past 2^53

<!-- source:values_lints_unflagged_bigint_to_number_js -->
*[`values_lints_unflagged_bigint_to_number_js.js`](examples/values_lints_unflagged_bigint_to_number_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Hands a BigInt order id to code that wants a number.
const orderId = 9007199254740993n;
const asNumber = Number(orderId);
console.log(`${orderId}n became ${asNumber}`);
console.log(`converts back to the same BigInt: ${BigInt(asNumber) === orderId}`);
```
<!-- /source -->

<!-- output:values_lints_unflagged_bigint_to_number_js -->
*Verified output of [`values_lints_unflagged_bigint_to_number_js.js`](examples/values_lints_unflagged_bigint_to_number_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
9007199254740993n became 9007199254740992
converts back to the same BigInt: false
```
<!-- /output -->

`Number(orderId)` returns the nearest double, one less than the id, and converting back does not recover it. Keep an id like this as a BigInt or a string, or check the round trip, as the second line does, before trusting the number. See [BigInt](../bigint/README.md) and [Safe integers](../../10_Numbers_and_Math/safe_integers/README.md).

### A spread copy shares its arrays

<!-- source:values_lints_unflagged_spread_copy_js -->
*[`values_lints_unflagged_spread_copy_js.js`](examples/values_lints_unflagged_spread_copy_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Copies the default settings with spread, then tags the copy.
const defaults = { currency: "EUR", tags: ["new"] };
const sale = { ...defaults };
sale.tags.push("sale");
console.log(`after pushing to the spread copy: ${JSON.stringify(defaults.tags)}`);
const clearance = structuredClone(defaults);
clearance.tags.push("clearance");
console.log(`after pushing to a structuredClone: ${JSON.stringify(defaults.tags)}`);
```
<!-- /source -->

<!-- output:values_lints_unflagged_spread_copy_js -->
*Verified output of [`values_lints_unflagged_spread_copy_js.js`](examples/values_lints_unflagged_spread_copy_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
after pushing to the spread copy: ["new","sale"]
after pushing to a structuredClone: ["new","sale"]
```
<!-- /output -->

`{ ...defaults }` copies each property's value, and the value of `tags` is a reference to an array, so the copy and the defaults share one array, and pushing `"sale"` to the copy changed the defaults. `structuredClone` copied the array as well: pushing `"clearance"` to the clone left the defaults as they were. See [Values and references](../values_and_references/README.md) and [Copying objects](../../06_Objects/copying_objects/README.md).

## What to do

- Switch on the seven rules here that are in ESLint's recommended set — `use-isnan`, `no-compare-neg-zero`, `valid-typeof`, `no-shadow-restricted-names`, `no-new-native-nonconstructor`, `no-loss-of-precision` and `no-constant-binary-expression`: on this page each one flagged a real mistake and nothing else.
- Add `no-new-wrappers`, and `eqeqeq` with `{"null": "ignore"}`, so that `x == null` stays and every other `==` goes.
- Add `no-extend-native` to code that other code runs beside, and list in its `exceptions` the built-ins a deliberate polyfill may touch.
- Treat `no-undef-init` and `no-implicit-coercion` as style; `no-implicit-coercion` earns its place where a value can be a symbol or a BigInt.
- In TypeScript, keep `strict` on: without it, `tsc` accepts a possibly-`null` value where a `string` is needed.
- Keep ESLint beside `tsc`: five of the twelve mistakes pass `tsc --strict`.
- Run the code as well. The six programs under [what no lint catches](#what-no-lint-catches) pass every check on this page.

## In other languages

- [Rust: What a float stores ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/what_a_float_stores/index.html) — the compiler itself has `use-isnan`'s check: rustc's `invalid_nan_comparisons` lint fires on `x == f64::NAN` and points to `x.is_nan()`.
- [Python: Float equality and NaN ↗](https://masiarek.github.io/python-learning-library/03_Numbers/float_equality_and_nan/index.html) — `nan == nan` is `False` in Python too, and `math.isnan` is the test; but a list checks identity before `==`, so `[math.nan] == [math.nan]` is `True`.
- [Rust: Lints around references ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/references/reference_lints/index.html) — the same kind of page for rustc and clippy: twenty-five warnings around references and pointers, and six mistakes no lint catches.
- [Rust: Clippy: the groups, the settings, the commands ↗](https://masiarek.github.io/rust-learning-library/34_Templates/clippy/index.html) — clippy's lints come in groups whose levels are set in `Cargo.toml`; ESLint's core rules are switched on one at a time, as `--rule` does here.

## Sources

- [ESLint — Rules reference ↗](https://eslint.org/docs/latest/rules/) — every core rule, with the mark for the recommended set
- [ESLint — Command Line Interface ↗](https://eslint.org/docs/latest/use/command-line-interface) — `--no-config-lookup`, `--rule` and the exit codes
- [TypeScript — TSConfig: `strict` ↗](https://www.typescriptlang.org/tsconfig/strict.html)
- [TypeScript — TSConfig: `strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig/strictNullChecks.html)
- [TypeScript — TSConfig: `noImplicitAny` ↗](https://www.typescriptlang.org/tsconfig/noImplicitAny.html)
- [TypeScript — TSConfig: `checkJs` ↗](https://www.typescriptlang.org/tsconfig/checkJs.html)
- [MDN — `NaN` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [MDN — `Number.isNaN()` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [MDN — `Object.is()` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [MDN — `undefined` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [MDN — Nullish coalescing operator (`??`) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Mathias Bynens — SmooshGate FAQ ↗](https://developer.chrome.com/blog/smooshgate)

## See also

- [Eight types](../eight_types/README.md), [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md), [Primitives and wrappers](../primitives_and_wrapper_objects/README.md), [Symbols](../symbols/README.md), [BigInt](../bigint/README.md) and [Values and references](../values_and_references/README.md) — the lessons these rules guard
- [Errors around values and types](../values_and_types_errors/README.md) — the messages Node and `tsc` print when a mistake like these stops a program
- [Resources for values and types](../values_and_types_resources/README.md) — where to read further on this chapter
- [ESLint](../../31_Tooling/linting_with_eslint/README.md) — setting ESLint up for a project, and the rules that need type information
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — the flags `strict` turns on, one by one
- [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md) — how TypeScript keeps `null` out of other types
- [TypeScript 7](../../22_TypeScript_Basics/typescript_7/README.md) — the compiler behind every `tsc` run on this page
