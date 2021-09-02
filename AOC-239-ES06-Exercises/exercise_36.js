// Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.

const ARRAY = [1, 2, 3]; // 16

const mapFunct = value => value + 15;

const getMin = (array, mapFunct) => {
    return Math.min(...array.map(mapFunct))
};

console.log(getMin(ARRAY, mapFunct));
