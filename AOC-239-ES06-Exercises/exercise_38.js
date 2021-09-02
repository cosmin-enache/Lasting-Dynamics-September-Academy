// Write a JavaScript program to check if the provided argument is a valid JSON.

const isValidJSON = json => {
    try {
        JSON.parse(json);
        return true;
    } catch (error) {
        return false
    }
};

console.log(isValidJSON("{asd:2}")); // invalid
console.log(isValidJSON("{\"asd\":2}")); // valid
