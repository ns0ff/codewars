// https://www.codewars.com/kata/546e2562b03326a88e000020

// for loop:
// function squareDigits(num){
//     let str = num.toString().split('')
//     for (let i = 0; i < str.length; i++ ){
//       str[i] = str[i] ** 2
//     }
//     return +str.join('')
// }

// forEach:
// function squareDigits (num) {
//     let x = num.toString().split('').map(Number); 
//     x.forEach((el, idx) => x[idx] = el ** 2);
//     return +(x.join(''));
// }

// map:
const squareDigits = num => +(num.toString().split("").map(num => +num).map(num => num ** 2).join(""))

// Output:
console.log(squareDigits(3212)); // Expected output: 9414
console.log(squareDigits(2112)); // Expected output: 4114
console.log(squareDigits(0)); // Expected output: 0