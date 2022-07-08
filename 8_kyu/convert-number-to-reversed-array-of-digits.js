// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

// Test
console.log(digitize(35231)); // expected output [1,3,2,5,3]