// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));

// Test
console.log(expressionMatter(2, 1, 2)); // expected output: 6