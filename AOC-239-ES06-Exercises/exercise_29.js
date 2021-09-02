// Write a JavaScript program to hash a given input string into a whole number. (adds the codepoint value of all characters)

const STRING = "Hello world";

const hashStringToWholeNumber = string => [...string].reduce((a, c) => a + c.charCodeAt(0), 0);

console.log(hashStringToWholeNumber(STRING));
