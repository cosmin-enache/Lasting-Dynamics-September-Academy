//Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

const ARRAY = ["cats", "turtles", "dogs", "cats", "turtles", "horses", "pigs", "lions", "zebras", "turtles"]

const filterArray = (array, value) => array.filter(item => item !== value);

console.log(filterArray(ARRAY, "turtles"));
