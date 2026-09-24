// Two modules each make a symbol described "id" and use it as a key on the
// same order. The descriptions are equal, the symbols are not, so neither
// write replaces the other. The last line makes the same two writes with the
// string key "id".
const row = (code, value) => console.log(`${code.padEnd(47)}${value}`);

const billingId = Symbol("id"); // made by the billing module
const auditId = Symbol("id"); // made by the audit module

row("billingId.description === auditId.description", billingId.description === auditId.description);
row("billingId === auditId", billingId === auditId);
row("billingId === billingId", billingId === billingId);

const order = { id: "A-1001" };
order[billingId] = "INV-7";
order[auditId] = "checked by Ada";
row("order.id", order.id);
row("order[billingId]", order[billingId]);
row("order[auditId]", order[auditId]);

const sameWritesWithAString = { id: "A-1001" };
sameWritesWithAString["id"] = "INV-7";
sameWritesWithAString["id"] = "checked by Ada";
row('the same writes with the string key "id"', JSON.stringify(sameWritesWithAString));
