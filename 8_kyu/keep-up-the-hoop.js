// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

const hoopCount = (n) => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

// Tests
console.log(hoopCount(3)); // expected output: "Keep at it until you get it"
console.log(hoopCount(11)); // expected output: "Great, now move on to tricks"