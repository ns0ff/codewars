// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let arr = [];

    for ( i = n; i >= 1; i--) {
      arr.push(i);
    }
    
    return arr;
};

// Test
console.log(reverseSeq(5)); // return [5, 4, 3, 2, 1]