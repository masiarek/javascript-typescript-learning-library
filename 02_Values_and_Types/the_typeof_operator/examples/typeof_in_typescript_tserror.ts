// tsc reads typeof checks: after each one, the variable has a narrower type.
// It also knows that typeof null is "object", so null is still there after the
// third check.
function describe(reading: number | string | Date | null): string {
  if (typeof reading === "number") return reading.toFixed(1);
  if (typeof reading === "string") return reading.trim();
  if (typeof reading === "object") return reading.toISOString();
  return "no reading";
}

// In a type, typeof is a second operator with the same name: it reads the type
// tsc gave a variable, and it is erased before Node runs anything.
const station = { name: "north", celsius: 21.5 };
const next: typeof station = { name: "south", celsius: "22.0" };
