// https://www.codewars.com/kata/5547929140907378f9000039

const shortcut = (str) => str.replace(/[aeoiu]/g, '')

// Output:
console.log(shortcut('hello')); // expected output: 'hll'
console.log(shortcut('how are you today?'));  // expected output:  'hw r y tdy?'
console.log(shortcut('complain'));  // expected output:  'cmpln'
console.log(shortcut('never'));  // expected output:  'nvr'