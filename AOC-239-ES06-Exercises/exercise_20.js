// Write a JavaScript program to get the first non-null / undefined argument.

const randomArgs = (...args) => {
    for (const value of args) {
        if (value) return value;
    }
};

console.log(randomArgs(null, 12));
