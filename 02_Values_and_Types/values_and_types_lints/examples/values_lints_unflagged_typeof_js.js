// Keeps the inputs that are records (plain objects).
const inputs = [{ sku: "tea" }, null, ["cake"], "scone"];
const byTypeof = inputs.filter((input) => typeof input === "object");
const records = inputs.filter(
  (input) => input !== null && typeof input === "object" && !Array.isArray(input),
);
console.log(`typeof only: ${JSON.stringify(byTypeof)}`);
console.log(`checked:     ${JSON.stringify(records)}`);
