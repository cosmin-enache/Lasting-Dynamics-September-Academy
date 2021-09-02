// Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1.

const ARRAY = [1, 2, 3];
const OTHER_ARRAY = [10];

const findAllExceptFirst = array => {
    return array.length === 1 ? array : array.slice(1);
};

console.log(findAllExceptFirst(ARRAY));
console.log(findAllExceptFirst(OTHER_ARRAY));
