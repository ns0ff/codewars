// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Split:
// const noSpace = x => x.split(' ').join('')

// Replace:
const noSpace = x => x.replace(/ /g, "")

// Output:
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // Expected output: '8j8mBliB8gimjB8B8jlB'
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') === '8j8mBliB8gimjB8B8jlB'); 