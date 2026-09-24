// typeof answers for a name nobody declared, where reading the name throws.
const store = typeof window === "undefined" ? "a file" : "localStorage";
console.log(`typeof window: ${typeof window}`);
console.log(`saving to ${store}`);
