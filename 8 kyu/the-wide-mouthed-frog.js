// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

const mouthSize = (animal) => animal.toLowerCase() === 'alligator' ? 'small' : 'wide'

// Output:
console.log(mouthSize("toucan")); // expected output: 'wide'
console.log(mouthSize("ant bear")); // expected output: 'wide'
console.log(mouthSize("alligator")); // expected output: 'small'
console.log(mouthSize("ALLIGAtOr")); // expected output: 'small'