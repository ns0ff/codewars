// https://www.codewars.com/kata/57a083a57cb1f31db7000028

// for loop:
// function powersOfTwo(n){
//   let arr = []
//   for( i = 0; i <= n; i++){
//     arr.push(2 ** i)
//   }
    
//   return arr
// }

// array.from 
// const powersOfTwo = x => Array.from({length: x + 1}, (a, b) => 2 ** b);

// .map
const powersOfTwo = x => [...Array(x + 1)].map((_, idx) => 2 ** idx)

// Output:
console.log(powersOfTwo(0));    // Expected output: [1]
console.log(powersOfTwo(1));    // Expected output: [1, 2]
console.log(powersOfTwo(4));    // Expected output: [1, 2, 4, 8, 16]