// Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no

const trueFalse = string => {
    string = string.toLowerCase();
    
    const checkObj = {"y/yes": true, "n/no": false};

    for (const key of Object.keys(checkObj)) {
        if (key.includes(string)) return checkObj[key];
    }

    return null;
}

console.log(trueFalse("y"));
console.log(trueFalse("yes"));
console.log(trueFalse("n"));
console.log(trueFalse("no"));
