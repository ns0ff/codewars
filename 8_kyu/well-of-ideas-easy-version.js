// https://www.codewars.com/kata/57f222ce69e09c3630000212

// Filter:
// const well = (x) => {
//     const counter = x.filter(el => el === 'good').length
//     return counter === 0 ?  'Fail!' : counter < 3 ? 'Publish!' : 'I smell a series!'
// }

// For loop:
// function well(x){
// let goodCount = 0
//     for (i = 0; i < x.length; i++) {
//       if (x[i] === 'good') {
//        goodArr++ 
//       }
//     }
    
// if (goodCount > 0 && goodArr < 3) {
//     return 'Publish!'
// } else if (goodCount >= 3) {
//     return 'I smell a series!'
// } else {
//     return 'Fail!'
// }
// }

// Switch case:
// function well(x){
//     switch (x.filter (el => el === 'good').length) {
//         case 0 :
//           return 'Fail!'
//         case 1 :
//         case 2 :
//           return 'Publish!'
//         default:
//           return 'I smell a series!'
//     }
// }

// Reduce
const well = (x) => {
    const counter = x.reduce((a, b) => a + (b === 'good'), 0);
    return counter ? counter > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

// Output:
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // Expected output: 'I smell a series!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad'])); // Expected output: 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // Expected output: 'Publish!'
console.log(well(['bad', 'bad', 'bad', 'bad', 'bad', 'bad'])); // Expected output: 'Fail!'