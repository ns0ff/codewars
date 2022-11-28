//

// map
// const monkeyCount = (n) => [...Array(n).keys()].map(a => a+1)

// Array from
const monkeyCount = (n) => Array.from(Array(n), (_,i)=>++i)

// output:
console.log(monkeyCount(5)); // Expected output: [ 1, 2, 3, 4, 5 ]
console.log(monkeyCount(3)); // Expected output: [ 1, 2, 3 ]
console.log(monkeyCount(9)); // Expected output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(monkeyCount(10)); // Expected output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]