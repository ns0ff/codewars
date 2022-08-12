// https://www.codewars.com/kata/59778cb1b061e877c50000cc


// Loops
// function arrAdder(arr) {
//     let words = []
//     for (i = 0; i < arr[0].length; i++) {
//       for (j = 0; j < arr.length; j++){
//         words += arr[j][i]
//         }
//         words += ' '
//       }
//     return words.trim()
// }

// Map
// const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');

// map & reduce
const arrAdder = arr => arr[0].map((_, idx) => arr.reduce((pre, val) => pre + val[idx], ``)).join(` `);


// Output:
console.log(arrAdder([['J','L','L','M'], ['u','i','i','a'], ['s','v','f','n'], ['t','e','e','']])); // Expected output: "Just Live Life Man"
console.log(arrAdder([['J','L','L','M'], ['u','i','i','a'], ['s','v','f','n'], ['t','e','e','']]) === "Just Live Life Man");  