// Write a JavaScript program to get every element that exists in any of the two arrays once.

const intersect = (array1, array2) => {
    const [set1, set2] = [new Set(array1), new Set(array2)];
    const result = [];

    for (const value of set1) {
        if (set2.has(value)) result.push(value);
    }

    return result;
};

const intersection = intersect([1, 3, 3, 5], [2, 3, 3, 5, 6, 7]);

console.log(intersection); // [3, 5]
