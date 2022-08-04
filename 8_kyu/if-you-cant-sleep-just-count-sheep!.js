// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// For loop:
// var countSheep = function (num){
//     let sheeps = ''
//     if (num > 0) {
//       for (let i = 1; i <= num; i++) {
//         sheeps += `${i} sheep...`
//       }
//     }
//     return sheeps
// }

// Reduce:
const countSheep = (n) => [...Array(n).keys()].reduce((sheep, idx) => sheep + (idx + 1) + ' sheep...', '');

// Output:
console.log(countSheep(0));     // Expected output: ''
console.log(countSheep(1));     // Expected output: '1 sheep...'
console.log(countSheep(2));     // Expected output: '1 sheep...2 sheep...'
console.log(countSheep(3));     // Expected output: '1 sheep...2 sheep...3 sheep...'