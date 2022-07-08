// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

// function distinct(a) {
//   return a.filter((el, idx) => a.indexOf(el) === idx);
// }

// Single line:
// const distinct = a => a.filter((el, idx) => a.indexOf(el) === idx);

// Other way:
const distinct = a => [...new Set(a)];

//Tests
console.log(distinct([1])); // expected output: [ 1 ]
console.log(distinct([1,2,1])); // expected output: [ 1, 2 ]
console.log(distinct([1,2,5,2,5,6,7])); // expected output: [ 1, 2, 5, 6, 7 ]