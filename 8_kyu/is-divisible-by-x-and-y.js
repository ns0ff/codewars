// https://www.codewars.com/kata/5545f109004975ea66000086

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

// Tests
console.log(isDivisible(3,3,4)); // expected output: false
console.log(isDivisible(12,3,4)); // expected output: true
console.log(isDivisible(8,3,4)); // expected output: false
console.log(isDivisible(48,3,4)); // expected output: true