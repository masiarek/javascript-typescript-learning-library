// "Engines disagree about typeof /a/": some once answered "function", because
// their regular expressions could be called like functions. None can be now,
// and typeof answers "object" for every object that cannot be called.
const skuPattern = /^SKU-\d+$/;

console.log(`typeof skuPattern:        ${typeof skuPattern}`);
console.log(`typeof new RegExp("SKU"): ${typeof new RegExp("SKU")}`);
try {
  skuPattern("SKU-1");
} catch (error) {
  console.log(`calling it: ${error.name}: ${error.message}`);
}
