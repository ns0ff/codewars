// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Map
// const fakeBin = (x) => [...x].map(el => el > 4 ? 1 : 0).join('')

// Replace
// const fakeBin = (x) => x.replace(/\d/g, d => d < 5 ? 0 : 1);

// Reduce
const fakeBin = (x) => [...x].reduce((a, b) => a + +(b >= 5), ``);


// Output:
console.log(fakeBin('45385593107843568')); // Expected output: '01011110001100111'
console.log(fakeBin('45385593107843568') === '01011110001100111'); 
console.log(fakeBin('509321967506747')); // Expected output: 101000111101101
console.log(fakeBin('509321967506747') === '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'));  // Expected output: '011011110000101010000011011'
console.log(fakeBin('366058562030849490134388085') === '011011110000101010000011011'); 