// https://www.codewars.com/kata/583710ccaa6717322c000105

// Single line:
const simpleMultiplication = num => num % 2 == 0 ? num * 8 : num * 9;

// Tests
console.log(simpleMultiplication(2)); // expected output: 16
console.log(simpleMultiplication(1)); // expected output: 9
console.log(simpleMultiplication(8)); // expected output: 64
console.log(simpleMultiplication(4)); // expected output: 32
console.log(simpleMultiplication(5)); // expected output: 45