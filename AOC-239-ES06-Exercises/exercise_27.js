// Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.

const ARRAY = [1, 2, 3]; // 30

const mapFunct = value => 10 * value;

console.log(Math.max(...ARRAY.map(mapFunct)))
