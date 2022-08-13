// https://www.codewars.com/kata/5ace2d9f307eb29430000092

// repeat:
// const modifyMultiply = (str, loc, num) => (str.split(' ')[loc]+'-').repeat(num).slice(0, -1)

// Array(n)
const modifyMultiply = (str, loc, num) => Array(num).fill(str.split(' ')[loc]).join('-');


// For loop:
// function modifyMultiply (str,loc,num) {
//     let res = ''
//     for (i = 0; i < num; i++){
//         res += str.split(' ')[loc] + '-'
//     }
//     return res.slice(0, -1)
// } 


// Output:
console.log(modifyMultiply("This is a string", 3 ,5));