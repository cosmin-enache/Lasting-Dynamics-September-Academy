// Write a JavaScript program to execute a provided function once for each array element, starting from the array's last element.

const ARRAY = [1, 2, 3, 4, 5];

const timesFive = value => value * 5;

const len = ARRAY.length;

for (let i = len - 1; i >= 0; i--) {
    ARRAY[i] = timesFive(ARRAY[i]);
}

console.log(ARRAY);
