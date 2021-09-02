// Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

const ARRAY = [true, false, undefined, null, 12, "stringHere", new Date(), NaN];

const splitTruthyFalsy = array => {
    const truthy = [];
    const falsy = [];

    array.forEach((value, index) => {
        if (value) truthy.push(`${value}: ${typeof value}`);
        else falsy.push(`${value}: ${typeof value}`);
    });

    console.log("Truthy values:\n", truthy.join(", "));
    console.log("Falsy values:\n", falsy.join(", "));
};

splitTruthyFalsy(ARRAY);
