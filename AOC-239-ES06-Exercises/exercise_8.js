// Write a JavaScript program to decapitalize the first letter of a string

const STRING = "Hello World!";

const decapitalize = string => string[0].toLowerCase() + string.slice(1);

console.log(decapitalize(STRING));
