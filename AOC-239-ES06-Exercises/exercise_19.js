// Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.

const ARRAY = [1, 2, 3, 4, 5]; // 5, 10, 15, 20, 25 => 75 / 5 = AVG (15)

const mapFunct = val => val * 5;
const avg = array => array.reduce((a, v) => a + v, 0) / array.length;

console.log(
    avg(ARRAY.map(mapFunct))
);
