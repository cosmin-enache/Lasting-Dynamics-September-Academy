// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

const CSV_STRING = "a,b,c,d,e,f,g,h";

const csvTo2DArray = csvString => {
    const array2D = [];
    const array1D = csvString.split(",");

    const len = array1D.length;

    for (let i = 0; i < len - 1; i += 2) {
        array2D.push([
            array1D[i],
            array1D[i + 1]
        ]);
    }

    return array2D;
};

console.log(csvTo2DArray(CSV_STRING))
