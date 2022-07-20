// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Loop:

// function countPositivesSumNegatives(input) {
//     let res = [],
//         positive = 0,
//         negative = []

//     if ( input && input.length) {
//         for (i = 0; i < input.length; i++) {
//             input[i] > 0 ? positive += 1 : negative.push(input[i])
//         }
//         res.push(positive)
//         res.push(negative.reduce((a, b) => a + b, 0))
//     }
//     return res
// }


// Reduce:

// function countPositivesSumNegatives(input) {
//     return (input && input.length) ?
//       [input.filter(el => el > 0).length, input.filter(el => el < 0).reduce( (a, b) => a + b, 0)] : []
// }

// Another reduce:
function countPositivesSumNegatives(input) {
    return (input && input.length) ?
      input.reduce(([positive, negative], current) => [positive += (current >= 1), negative + Math.min(0, current)], [0, 0]) : []
}


// Output:
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // Expected output: [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); // Expected output: [8, -50]
console.log(countPositivesSumNegatives(null)); // Expected output: []
console.log(countPositivesSumNegatives([])); // Expected output: []