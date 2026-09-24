// A string never changes: build a new one and assign that to the variable.
let firstName = "ada";
firstName = firstName[0].toUpperCase() + firstName.slice(1);
console.log(firstName);
