// Copies the default settings with spread, then tags the copy.
const defaults = { currency: "EUR", tags: ["new"] };
const sale = { ...defaults };
sale.tags.push("sale");
console.log(`after pushing to the spread copy: ${JSON.stringify(defaults.tags)}`);
const clearance = structuredClone(defaults);
clearance.tags.push("clearance");
console.log(`after pushing to a structuredClone: ${JSON.stringify(defaults.tags)}`);
