// Write a JavaScript program to create a new object from the specified object, where all the keys are in lowercase.

const OBJECT = {
    TYPE: "towel",
    COLOR: "cyan"
};

const newObjectWithLowercaseKeys = obj => {
    let newObj = {};

    for (const [key, value] of Object.entries(obj)) {
        newObj[key.toLowerCase()] = value
    }

    return newObj;
};

console.log(newObjectWithLowercaseKeys(OBJECT));
