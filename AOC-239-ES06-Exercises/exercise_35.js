// Write a JavaScript program to convert a NodeList to an array

const NODE_LIST = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

const nodeToArray = nodeList => {
    const array = [];

    while (nodeList.next) {
        array.push(nodeList.value);
        nodeList = nodeList.next;
    }

    return array;
};

console.log(nodeToArray(NODE_LIST)) // 1, 2, 3
