// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

let find_average = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

// Output:
console.log(find_average([1,1,1])); // expected output: 1
console.log(find_average([1,2,3])); // expected output: 2
console.log(find_average([1,2,3,4])); // expected output: 2.5