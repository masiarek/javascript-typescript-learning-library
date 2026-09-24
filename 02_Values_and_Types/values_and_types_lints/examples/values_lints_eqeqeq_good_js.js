// Labels each stock field: an empty or missing field is unknown, not zero.
function label(stock) {
  if (stock == null || stock === "") return "unknown";
  return Number(stock) === 0 ? "sold out" : "in stock";
}
const fields = [{ stock: "0" }, { stock: "" }, { stock: "12" }, { stock: null }, {}];
for (const field of fields) {
  console.log(`${JSON.stringify(field).padEnd(15)} ${label(field.stock)}`);
}
