// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

// Single line:
const findMultiples = (int, lim) =>  Array(Math.floor(lim / int)).fill(1).map((x, i) => int * (i + 1));

// While:
// function findMultiples(int, lim) {
//   let tmp = int;
//   let arr = [];
  
//   while (tmp <= lim) {
//     arr.push(tmp);
//     tmp += int;
//   }
  
//   return arr;
// }

// For:
// function findMultiples(int, lim) {
//     let arr = [];
    
//     for (i = int; i <= lim; i += int) {
//       arr.push(i);
//     }
    
//     return arr;
// }


// Tests
console.log(findMultiples(5, 25)); // expected output: [5, 10, 15, 20, 25]
console.log(findMultiples(4, 27)); // expected output: [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54)); // expected output: [11, 22, 33, 44]
