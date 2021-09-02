// Write a JavaScript program to Initialize a two dimension array of given width and height and value.

const initArray = (w, h) => {
    return new Array(h).fill(
        new Array(w).fill(undefined)
    );
};

console.log(initArray(5, 5));
