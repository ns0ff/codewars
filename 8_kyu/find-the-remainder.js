// https://www.codewars.com/kata/524f5125ad9c12894e00003f

const remainder = (a, b) => a > b ?  a % b : b % a;

// Other solution:
// function remainder(a, b){
//     let min = Math.min(a,b),
//         max = Math.max(a,b);

//     return min ? max % min : NaN;
// }

// Tests
console.log(remainder(17,5)); // expected output: 2
console.log(remainder(13, 72)); // expected output: 7
console.log(remainder(1,0)); // expected output: NaN
console.log(remainder(0,0)); // expected output: NaN