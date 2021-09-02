// Write a JavaScript program to round a number to a specified amount of digits

const n = 61.1358753
const round = (n, digit) => n.toFixed(digit);

console.log(round(n, 1)); // 61.1
console.log(round(n, 2)); // 61.14
console.log(round(n, 3)); // 61.136
