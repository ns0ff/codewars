// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

const sum = arr => arr.reduce((a, b) => a + b, 0)

// Output:
console.log(sum([])); // Expected output: 0
console.log(sum([]) === 0); 
console.log(sum([1, 5.2, 4, 0, -1])); // Expected output: 9.2
console.log(sum([1, 5.2, 4, 0, -1]) === 9.2); 