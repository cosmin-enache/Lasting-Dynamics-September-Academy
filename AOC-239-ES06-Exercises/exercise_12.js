// Write a JavaScript program to get an array of given n random integers in the specified range

const randomIntInRange = (rangeMin, rangeMax) => Math.trunc(Math.random() * (rangeMax + 1) + rangeMin);

const randomIntArray = (n, rangeMin, rangeMax) => {
    const array = new Array(n).fill(0);

    return array.map(value => randomIntInRange(rangeMin, rangeMax));
};

console.log(randomIntArray(5, 1, 10));
