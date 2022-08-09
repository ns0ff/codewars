// https://www.codewars.com/kata/57d814e4950d8489720008db

// const index = (arr, n) => n < arr.length ? arr[n] ** n : -1

// Math.pow:
// const index = (arr, n) => n < arr.length ? Math.pow(arr[n], n) : -1

// Refactor
const index = (arr, n) => arr[n] ** n || -1


// Output:
console.log(index([1, 2, 3, 4], 2)); // Expected output: 9
console.log(index([1, 2, 3, 4], 2) === 9); 
console.log(index([1, 3, 10, 100], 3)); // Expected output: 1000000
console.log(index([1, 3, 10, 100], 3) === 1000000); 
console.log(index([1, 2], 3)); // Expected output: -1
console.log(index([1, 2], 3) === -1); 
console.log(index([1,1,1,1,1,1,1,1,1,1], 9)); // Expected output: 1
console.log(index([1,1,1,1,1,1,1,1,1,1], 9) === 1); 