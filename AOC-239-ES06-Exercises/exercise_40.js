// Write a JavaScript program to check if the given argument is a symbol.

const checkArgIsSymbol = arg => typeof arg === "symbol";

console.log(checkArgIsSymbol("thisisastring")); // false
console.log(checkArgIsSymbol(1337)); // false
console.log(checkArgIsSymbol(Symbol())); // true
