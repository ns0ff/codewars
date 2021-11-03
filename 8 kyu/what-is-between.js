// https://www.codewars.com/kata/55ecd718f46fba02e5000029

// function between(a, b) {
//   let arr = [];
//   for (i = a; i <= b; i++){ 
//     arr.push(i);
//   }
// return arr;
// }

// Single line:
const between = (a, b) => Array(b - a + 1).fill().map((_, idx) => a + idx);

// Tests
console.log(between(1, 4)); // expected output: [1, 2, 3, 4]
console.log(between(-2, 2)); // expected output: [-2, -1, 0, 1, 2]