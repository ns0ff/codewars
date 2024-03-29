// https://www.codewars.com/kata/57f780909f7e8e3183000078

const grow = (x) => x.reduce((a, b) => a * b, 1)

// Output:
console.log(grow([1, 2, 3]));   // Expected output: 6
console.log(grow([1, 2, 3]) === 6);
console.log(grow([4, 1, 1, 1, 4]));   // Expected output: 16
console.log(grow([4, 1, 1, 1, 4]) === 16);
console.log(grow([2, 2, 2, 2, 2, 2]));   // Expected output: 64
console.log(grow([2, 2, 2, 2, 2, 2]) === 64);