// Write a JavaScript program to check whether all elements in a given array are equal or not.

const EQ_ARRAY = [1, 1, 1, 1, 1];

const NON_EQ_ARRAY = [1, 1, 1, 1, 1, 5, 1, 1];

const checkAllElementsEqual = array => {
    const len = array.length;
    
    for (let i = 1; i < len; i++) {
        if (array[i] !== array[i - 1]) return false;
    }

    return true;
};

console.log(checkAllElementsEqual(EQ_ARRAY)); // true
console.log(checkAllElementsEqual(NON_EQ_ARRAY)); // false
