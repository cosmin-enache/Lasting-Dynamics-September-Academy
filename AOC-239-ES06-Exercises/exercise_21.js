// Write a JavaScript program to count the occurrences of a value in an array.

const ARRAY = [1, 1, 2, 25, 63, 63, 63, 5];

const countOccurrences = (array, countThisValue) => {
    return array.filter(value => value === countThisValue).length;
};

console.log(countOccurrences(ARRAY, 63)); // 3
