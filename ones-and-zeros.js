const binaryArrayToNumber = arr => {
    let index = [];
    let decimal = [];

    for (i = 0; i <= arr.length - 1; i++) {
        index.unshift(i);
    }

    arr.forEach((x, idx) => {
        decimal.push(x * 2 ** index[idx]);
    });

    let result = decimal.reduce((acc, curr) => acc + curr, 0);
    return result;
};

// Tests
console.log(binaryArrayToNumber([0,0,0,1])); // return 1
console.log(binaryArrayToNumber([0,0,1,0])); // return 2
console.log(binaryArrayToNumber([1,1,1,1])); // return 15
console.log(binaryArrayToNumber([0,1,1,0])); // return 6
console.log(binaryArrayToNumber([0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1])); // return 333