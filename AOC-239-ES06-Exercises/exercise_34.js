// Write a JavaScript program to create a function that invokes the provided function with its arguments arranged according to the specified indexes.

const addFive = arg => {
    return arg + 5;
};

const invoke = (funct, ...args) => {
    for (const arg of args) {
        console.log(funct(arg));
    }
};

invoke(addFive, 5, 10, 15);
