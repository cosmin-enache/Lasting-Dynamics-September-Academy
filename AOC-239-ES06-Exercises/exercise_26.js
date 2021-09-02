// Write a JavaScript program to create a new string with the results of calling a provided function on every character in the calling string.

const shiftCalc = (char, shift) => String.fromCharCode(char.charCodeAt(0) + shift);

const caesarCipher = (string, shift) => {
    const len = string.length;
    let resString = "";

    shift %= 26;

    for (let i = 0; i < len; i++) {
        resString += shiftCalc(string[i], shift);
    }

    return resString;
};

console.log(caesarCipher("Hello world", 1));
