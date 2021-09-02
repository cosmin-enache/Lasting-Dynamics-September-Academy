// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
// ** assuming all csv title and data values have the same # of columns

const CSV_STRING = "title1,title2\ndata1,data2";

const csvStringTo2DObjArray = csvString => {
    const [titleStr, dataStr] = CSV_STRING.split("\n");

    const [titleArray, dataArray] = [titleStr.split(","), dataStr.split(",")];

    const len = titleArray.length;

    const result2DArray = [];

    for (let i = 0; i < len; i++) {
        result2DArray.push({
            [titleArray[i]]: dataArray[i]
        });
    }

    return result2DArray;
};

console.log(csvStringTo2DObjArray(CSV_STRING));
