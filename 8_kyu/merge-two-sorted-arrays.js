// https://www.codewars.com/kata/5899642f6e1b25935d000161

const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2].sort((a,b) => a - b))]; 

// Output:
console.log(mergeArrays([1,2,3,4], [5,6,7,8])); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]