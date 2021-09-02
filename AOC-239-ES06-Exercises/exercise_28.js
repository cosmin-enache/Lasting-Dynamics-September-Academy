// Write a JavaScript program to get the median of an array of numbers.

const ARRAY_ODD = [1, 2, 3];
const ARRAY_EVEN = [4, 5, 6, 7];

const isEven = val => val % 2 === 0;

const median = array => {
    const len = array.length;
    const halfPoint = Math.trunc(len / 2);

    return isEven(len) ? (
        (array[halfPoint] + array[halfPoint - 1]) / 2
    ) : (
        array[halfPoint]
    );
};

console.log(median(ARRAY_ODD));
console.log(median(ARRAY_EVEN));
