// Where each absence comes from. The language fills in undefined wherever
// nothing was assigned; null appears only where some code returns it.
function unitOf(name, unit) {
  return unit;
}
const seen = new Set();
function remember(id) {
  seen.add(id);
}
function stopEarly() {
  return;
}

let total;
const order = { id: 1042 };
const prices = [250, 1999];
const stock = new Map([["rice", 12]]);
const query = new URLSearchParams("page=2");

const show = (expression, value) => console.log(`  ${expression.padEnd(42)}${value}`);

console.log("undefined, filled in by the language:");
show("total", total);
show("order.discount", order.discount);
show('unitOf("rice")', unitOf("rice"));
show("remember(1042)", remember(1042));
show("stopEarly()", stopEarly());
show("void 0", void 0);
show("prices[5]", prices[5]);
show("prices.find((price) => price > 5000)", prices.find((price) => price > 5000));
show('stock.get("beans")', stock.get("beans"));

console.log("null, returned by code that chose it:");
show('"rice".match(/[0-9]/)', "rice".match(/[0-9]/));
show("Object.getPrototypeOf(Object.prototype)", Object.getPrototypeOf(Object.prototype));
show('query.get("sort")', query.get("sort"));
show(`JSON.parse('{"discount":null}').discount`, JSON.parse('{"discount":null}').discount);
