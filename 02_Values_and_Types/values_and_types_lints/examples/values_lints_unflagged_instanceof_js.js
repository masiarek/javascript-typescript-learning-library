// Tells text from other input with instanceof String.
/** @param {unknown} input */
function isText(input) {
  return input instanceof String;
}
console.log(`isText("EUR"): ${isText("EUR")}`);
console.log(`typeof "EUR": ${typeof "EUR"}`);
