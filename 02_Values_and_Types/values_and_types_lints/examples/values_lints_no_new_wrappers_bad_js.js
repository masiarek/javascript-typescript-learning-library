// Reads two fields from a form into wrapper objects.
const form = { paid: 0, currency: "EUR" };
const paid = new Boolean(form.paid);
const currency = new String(form.currency);
console.log(`${typeof paid}, ${typeof currency}`);
console.log(paid ? "ship the order" : "wait for payment");
console.log(currency === "EUR" ? "price in euros" : "unknown currency");
