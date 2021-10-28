// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

const squareArea = A => Number(((2 * A / Math.PI) ** 2).toFixed(2));

// Tests
console.log(squareArea(2)); // expected output: 1.62
console.log(squareArea(0)); // expected output: 0
console.log(squareArea(14.05)); // expected output: 80