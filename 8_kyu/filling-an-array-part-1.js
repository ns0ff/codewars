// https://www.codewars.com/kata/571d42206414b103dc0006a1

// const arr = N => N ? [...new Array(N)].map((_, idx) => idx) : []

const arr = N => Array.from({length: N}, (_, idx) => idx)

// output:
console.log(arr(4)); //Expected output: [0, 1, 2, 3]
console.log(arr()); //Expected output: []