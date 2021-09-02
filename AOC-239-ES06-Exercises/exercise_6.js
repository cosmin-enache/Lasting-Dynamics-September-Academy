// Write a JavaScript program to generate a random hexadecimal color code.

const randomByte = () => Math.floor(Math.random() * 256);

const randomHexValue = () => {
    const R = randomByte().toString(16);
    const G = randomByte().toString(16);
    const B = randomByte().toString(16);

    return R + G + B;
};

console.log(randomHexValue());
