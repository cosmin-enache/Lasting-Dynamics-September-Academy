// Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.

const toMeridian = n => {
    if (n < 0 || n > 24) return "INVALID!";

    if (n === 24 || n === 0) return `12AM`;
    if (n === 12) return `${n}PM`;

    if (n < 12) return `${n}AM`;

    return `${n % 12}PM`;
};

console.log(toMeridian(0));
console.log(toMeridian(5));
console.log(toMeridian(12));
console.log(toMeridian(15));
console.log(toMeridian(23));
console.log(toMeridian(24));
console.log(toMeridian(42));
