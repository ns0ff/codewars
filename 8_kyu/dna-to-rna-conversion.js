// https://www.codewars.com/kata/5556282156230d0e5e000089

const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');

// Tests
console.log(DNAtoRNA("TTTT")); // expected output: 'UUUU'
console.log(DNAtoRNA("GCAT")); // expected output: 'GCAU'
console.log(DNAtoRNA("GACCGCCGCC")); // expected output: 'GACCGCCGCC'