// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
    let sum = 0;
    for (i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
}

// Single line:
// const summation = num => num * (num + 1) / 2;

// Tests
console.log(summation(1)); // expected output: 1
console.log(summation(8)); // expected output: 36