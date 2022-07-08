// https://www.codewars.com/kata/55192f4ecd82ff826900089e

function divide(weight){
    return weight > 2 && weight % 2 === 0
}
  
// Single line:
// const divide = weight => weight > 2 && weight % 2 === 0

// Test
console.log(divide(100)); // expected output: true
console.log(divide(99)); // expected output: false
console.log(divide(10)); // expected output: true
console.log(divide(32)); // expected output: true
console.log(divide(5)); // expected output: false