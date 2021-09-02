// Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.

const ARRAY = [1, 2, 6, 6]; // [6, 6]

const comparator = value => value > 5;

console.log(ARRAY.filter(comparator));
