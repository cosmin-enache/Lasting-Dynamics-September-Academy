// Write a JavaScript program to create an array of key-value pair arrays from a given object.

const OBJECT = {
    title: "How to build a bridge",
    author: "John Mate"
};

const keyValuePairArray = obj => {
    const array = [];

    for (const [key, value] of Object.entries(obj)) {
        array.push([key, value]);
    }

    return array;
};

console.log(keyValuePairArray(OBJECT));
