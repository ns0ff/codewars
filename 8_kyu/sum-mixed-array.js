// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// For
// function sumMix(x) {
//   let newArr = []
//  for (let i = 0; i < x.length; i++){
//    newArr.push(+x[i])
//  }
//   return newArr.reduce((a, b) => a + b, 0)
// }

// Single line, reduce
const sumMix = (arr) => arr.reduce((a, b) => Number(a) + Number(b), 0)

// Output
console.log(sumMix([9, 3, '7', '3'])); // Expected output: 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // Expected output: 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // Expected output: 41