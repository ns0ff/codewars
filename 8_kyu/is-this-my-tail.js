// https://www.codewars.com/kata/56f695399400f5d9ef000af5

// const correctTail = (body, tail) => body.charAt(body.length - 1) === tail

// endsWith
const correctTail = (a, b) => a.endsWith(b)

// slice
// const correctTail = (body, tail) => body.slice(-1) === tail[0]

// Output:
console.log(correctTail('Fox', 'x')); // Expecting output: true
console.log(correctTail('Meerkat', 't')); // Expecting output: true