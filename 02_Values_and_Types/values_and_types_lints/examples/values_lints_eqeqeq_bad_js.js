// Labels each stock field from a form: "sold out" when it says zero.
const fields = [{ stock: "0" }, { stock: "" }, { stock: "12" }, { stock: null }, {}];
for (const field of fields) {
  const label = field.stock == 0 ? "sold out" : "in stock";
  console.log(`${JSON.stringify(field).padEnd(15)} ${label}`);
}
