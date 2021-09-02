// Write a JavaScript program to check if a given string is upper case or not.

const isUpperCase = string => {
    for (const char of string) {
        if (char === " ") continue;
        if (char !== char.toUpperCase()) return false;
    }

    return true;
};

console.log(isUpperCase("Hello World")) // false
console.log(isUpperCase("HELLO WORLD")) // true
