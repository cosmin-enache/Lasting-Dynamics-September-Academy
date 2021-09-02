// Write a JavaScript program to take any number of iterable objects or objects with a length property and returns the longest one.

const OBJ1 = {
    title: "First",
    length: 5
};

const OBJ2 = {
    title: "Second",
    length: 2
};

const OBJ3 = { // LONGEST
    title: "Third",
    length: 10
};

const getLongestObject = (...objects) => {
    let longestObj = objects[0];

    const len = objects.length;

    for (let i = 1; i < len; i++) {
        if (objects[i].length > longestObj.length) {
            longestObj = objects[i];
        }
    }

    return longestObj;
};

console.log(getLongestObject(
    OBJ1,
    OBJ2,
    OBJ3
));
