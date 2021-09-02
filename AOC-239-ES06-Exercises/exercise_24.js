// Write a JavaScript program to iterate over all own properties of an object, running a callback for each one.

const OBJECT = {
    title: "Some title",
    author: "Some author",
    id: 123
};

const callback = prop => typeof prop === "number";

const checkObjectContainsID = (obj, callback) => {
    for (const [key, value] of Object.entries(obj)) {
        if (key === "id" && callback(value)) return true;
    }

    return false;
};

console.log(checkObjectContainsID(OBJECT, callback));
