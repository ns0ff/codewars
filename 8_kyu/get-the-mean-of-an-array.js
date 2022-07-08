// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks){
    return Math.floor(marks.reduce((el, b) => el + b) / marks.length);
}

// Tests
console.log(getAverage([2,2,2,2])); // expected output: 2
console.log(getAverage([1,2,3,4,5,])); // expected output: 3
console.log(getAverage([1,1,1,1,1,1,1,2])); // expected output: 1