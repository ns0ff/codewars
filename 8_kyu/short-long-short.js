// https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b){
    return a.length > b.length ? b.concat(a, b) : a.concat(b, a);
}
  
// Tests
console.log(solution('45', '1'));  // expected output: '1451'
console.log(solution('13', '200'));  // expected output: '1320013'
console.log(solution('Soon', 'Me'));  // expected output: 'MeSoonMe'
console.log(solution('U', 'False'));  // expected output: 'UFalseU'