// Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

const STRING = "asd";
const PAD_CHAR = "*";

const padStringIfShorterThan = (string, padChar, maxLength) => {
    return string.length < maxLength ? string.padStart(string.length + 1, padChar) : string;
};

console.log(padStringIfShorterThan(STRING, PAD_CHAR, 4)); // pad
console.log(padStringIfShorterThan(STRING, PAD_CHAR, 3)); // no pad
