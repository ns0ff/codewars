// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

const removeEveryOther = arr => arr.filter( (_, idx) => idx % 2 === 0)

// Output:
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); //Expected output: ['Hello', 'Hello Again']
console.log(removeEveryOther([[1, 2]])); //Expected output: [1, 2]
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])); //Expected output: [['Goodbye']]