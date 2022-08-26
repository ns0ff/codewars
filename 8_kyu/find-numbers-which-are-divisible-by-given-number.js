// https://www.codewars.com/kata/55edaba99da3a9c84000003b

const divisibleBy = (arr, div) => arr.filter(el => el % div === 0)

// Output:
console.log(divisibleBy([1,2,3,4,5,6], 2)); // Expected output: [2,4,6]