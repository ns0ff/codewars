// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

// const squareOrSquareRoot = arr => arr.map(el => Math.sqrt(el) == Math.sqrt(el).toFixed(0) ? Math.sqrt(el) : Math.pow(el, 2))
const squareOrSquareRoot = arr => arr.map(el => Math.sqrt(el) % 1 == 0 ? Math.sqrt(el) : Math.pow(el, 2))

// Output:
console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])); // Expected output: [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])); // Expected output: [ 10, 10201, 25, 25, 1, 1 ]
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])); // Expected output: [ 1, 4, 9, 2, 25, 36 ]