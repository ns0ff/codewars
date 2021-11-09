// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false;
}

// Tests
console.log(isDivideBy(-12, 2, -6)); // expected output: true
console.log(isDivideBy(-12, 2, -5)); // expected output: false
console.log(isDivideBy(45, 1, 6)); // expected output: false
console.log(isDivideBy(45, 5, 15)); // expected output: true