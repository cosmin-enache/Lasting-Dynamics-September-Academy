// Write a JavaScript program to reverse the order of the characters in the string.

const STRING = "hello world";

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const reverse = string => {
    const stringArray = [...string];

    const len = string.length;

    let left = 0;
    let right = len - 1;

    while (left < right) {
        swap(stringArray, left, right);

        left++;
        right--;
    }

    return stringArray.join("");
};

console.log(reverse(STRING));
