// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
    return numbers.reduce((a, b) => a + (b ** 2), 0)
}

// Tests
console.log(squareSum([1,2])); // expected output: 5
console.log(squareSum([0, 3, 4, 5])); // expected output: 50