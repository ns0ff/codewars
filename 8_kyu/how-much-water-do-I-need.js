// https://www.codewars.com/kata/575fa9afee048b293e000287

// If else:
// function howMuchWater(water, load, clothes){
//     if ((load > clothes)) {
//       return 'Not enough clothes'
//       } else if ((load * 2) < clothes) {
//         return 'Too much clothes'
//       } else {
//         ttlWater = water * Math.pow(1.1, (clothes - load))
//         return +(Math.round(ttlWater * 100) / 100).toFixed(2)
//         }
// }

// single line:
const howMuchWater = (water, load, clothes) => load > clothes ? 'Not enough clothes' : clothes > (2 * load) ? 'Too much clothes' : +(water * 1.1 ** (clothes - load)).toFixed(2)

  // Output:
  console.log(howMuchWater(10,10,21)); // Expected output: 'Too much clothes'
  console.log(howMuchWater(10,10,2)); // Expected output: 'Not enough clothes'
  console.log(howMuchWater(10,11,20)); // Expected output: 23.58
  console.log(howMuchWater(50,15,29)); // Expected output: 189.87