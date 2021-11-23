// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

function uniTotal(str) {
    let sum = 0;
    for(i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum;           
}

// Other:
// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// Output:
console.log(uniTotal("a")); // expected output: 97
console.log(uniTotal("aaa")); // expected output: 291
console.log(uniTotal("Mary Had A Little Lamb")); // expected output: 1873