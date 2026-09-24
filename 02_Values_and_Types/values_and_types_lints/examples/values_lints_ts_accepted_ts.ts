// Six mistakes from the ESLint entries above, as TypeScript that tsc accepts.
const readings: number[] = [0.3, -0.4, 2.6].map(Math.round);
readings.forEach((reading, index) => {
  if (reading === -0) console.log(`reading ${index} rounded to -0`);
});

let discount: number | undefined = undefined;
console.log(`before: ${typeof discount}`);

function isMissing(value: unknown, undefined?: unknown): boolean {
  return value === undefined;
}
console.log(JSON.stringify(["tea", undefined].map(isMissing)));

const form = { paid: 0 };
const paid = new Boolean(form.paid);
console.log(paid ? "ship the order" : "wait for payment");

String.prototype.at = function (index: number): string {
  return this.charAt(index);
};
console.log(JSON.stringify("tea".at(-1)));

const orderId: bigint = BigInt(9007199254740993);
console.log(`order ${orderId}`);
