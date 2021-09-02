// Write a JavaScript program to remove falsey values from a given array.

let ARRAY = [true, false, NaN, "stringHere", 12, 0, undefined];

const removeFalseyValues = array => {
    return array.filter(value => value);
};

console.log(removeFalseyValues(ARRAY));
