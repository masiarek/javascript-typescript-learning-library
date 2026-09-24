// typeof calls null an object. Every other way of asking says it is not one.
const discount = null; // "no discount": a value some code chose to return

const rows = [
  ["typeof discount", JSON.stringify(typeof discount)],
  ["Object(discount) === discount", String(Object(discount) === discount)],
  ["discount instanceof Object", String(discount instanceof Object)],
  ["Object.prototype.toString.call(discount)", Object.prototype.toString.call(discount)],
];
try {
  rows.push(["discount.percent", String(discount.percent)]);
} catch (error) {
  rows.push(["discount.percent", `${error.name}: ${error.message}`]);
}

for (const [expression, result] of rows) {
  console.log(`${expression.padEnd(42)}${result}`);
}
