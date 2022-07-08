// https://www.codewars.com/kata/570e8ec4127ad143660001fd

// For
// function billboard(name, price = 30) {
//     let sum = 0;

//     for (i = 0; i < name.length; i++) {
//         sum += price;
//     }

//     return sum;
// }


// Single line:
const billboard = (name, price = 30) => name.split('').reduce((sum, letter) => sum + price, 0);

// Tests
console.log(billboard("Jeong-Ho Aristotelis")); // expected output: 600
console.log(billboard("sadfhjkhgfdsadfghj ehjkhgfdsasdfgh")); // expected output: 1020