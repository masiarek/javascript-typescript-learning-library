// Boolean() and String() called without new convert, and return primitives.
const form = { paid: 0, currency: "EUR" };
const paid = Boolean(form.paid);
const currency = String(form.currency);
console.log(`${typeof paid}, ${typeof currency}`);
console.log(paid ? "ship the order" : "wait for payment");
console.log(currency === "EUR" ? "price in euros" : "unknown currency");
