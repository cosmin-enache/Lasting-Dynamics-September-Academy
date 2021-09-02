// Write a JavaScript program to get a random integer in the specified range (Inclusive).

const randomIntInRange = (rangeMin, rangeMax) => Math.trunc(Math.random() * (rangeMax + 1) + rangeMin);

console.log(randomIntInRange(1, 10));
