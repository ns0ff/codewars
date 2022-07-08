// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// function twoSort(s) {
//   return s.sort()[0].toString().split('').join('***');
// }

// Single line:
const twoSort = s => s.sort()[0].toString().split('').join('***');

// Tests
console.log(twoSort(["turns", "out", "random", "test", "cases", "are"])); // expected output: 'a***r***e'
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); //expeted output: 'b***i***t***c***o***i***n'