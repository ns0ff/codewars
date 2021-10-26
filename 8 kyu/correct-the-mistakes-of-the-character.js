// https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(str) {
    const correctionChars = {
      "5" : "S",
      "0" : "O",
      "1" : "I"
    }
    
    return str.replace(/[501]/g, (char) => correctionChars[char]);
}

// Test
console.log(correct("L0ND0N")); // expected output: 'LONDON'
console.log(correct("51NGAP0RE")); // expected output: 'SINGAPORE'
console.log(correct("1 L0VE M1SS1SS1PP1🧶!")); // expected output: 'I LOVE MISSISSIPPI🧶!'