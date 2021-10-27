// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    return Math.floor((classPoints.reduce((a, b) => a + b, 0)) / classPoints.length) < yourPoints ? true : false;
}
  
// Tests
console.log(betterThanAverage([2, 3], 5)); // expected output: true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // expected output: true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)); // expected output: true  