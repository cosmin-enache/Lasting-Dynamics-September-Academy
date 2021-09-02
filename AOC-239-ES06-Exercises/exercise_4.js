// Write a JavaScript program to converts a specified number to an array of digits.

const NUMBER = 0531897531;

const numberToDigitArray = number => NUMBER.toString().split("").map(Number);

console.log(numberToDigitArray(Number))
