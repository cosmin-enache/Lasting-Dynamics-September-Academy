// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

const equivPropsOnObjects = (obj1, obj2) => {
    for (const key of Object.keys(obj2)) {
        if (obj1[key] === undefined) return false;
    }

    return true;
};

console.log(
    equivPropsOnObjects({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })
); // true

console.log(
    equivPropsOnObjects({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })
); // false

console.log(
    equivPropsOnObjects({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })
); // false
