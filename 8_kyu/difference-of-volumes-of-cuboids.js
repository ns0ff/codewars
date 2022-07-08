// https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    let x = a.reduce((m, n) => m * n);
    let y = b.reduce((m, n) => m * n);
    return x > y ? x - y : y - x;

    // Single line:
    // return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

// Tests
console.log(findDifference([3, 2, 5], [1, 4, 4])); // expected output: 14
console.log(findDifference([9, 7, 2], [5, 2, 2])); // expected output: 106
console.log(findDifference([11, 2, 5], [1, 10, 8])); // expected output: 30
console.log(findDifference([4, 4, 7], [3, 9, 3])); // expected output: 31