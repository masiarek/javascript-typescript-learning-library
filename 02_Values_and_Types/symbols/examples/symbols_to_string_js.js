// Seven ways of turning a symbol into text. A string result prints in quotes;
// a thrown TypeError prints as name: message.
const audit = Symbol("audit");
const attempts = [
  ["String(audit)", () => String(audit)],
  ["audit.toString()", () => audit.toString()],
  ["audit.description", () => audit.description],
  ["Symbol().description", () => Symbol().description],
  ["`${audit}`", () => `${audit}`],
  ['"" + audit', () => "" + audit],
  ["+audit", () => +audit],
];
for (const [code, attempt] of attempts) {
  let result;
  try {
    const value = attempt();
    result = typeof value === "string" ? JSON.stringify(value) : String(value);
  } catch (error) {
    result = `${error.name}: ${error.message}`;
  }
  console.log(`${code.padEnd(33)}${result}`);
}

// What a silent conversion would cost: two different symbols make one string,
// so keys built from those strings collide.
const other = Symbol("audit");
const byString = { [String(audit)]: "billing", [String(other)]: "audit" };
const bySymbol = { [audit]: "billing", [other]: "audit" };
console.log(`${"audit === other".padEnd(33)}${audit === other}`);
console.log(`${"String(audit) === String(other)".padEnd(33)}${String(audit) === String(other)}`);
console.log(`${"keys when converted by String()".padEnd(33)}${Reflect.ownKeys(byString).length}`);
console.log(`${"keys when kept as symbols".padEnd(33)}${Reflect.ownKeys(bySymbol).length}`);
