function repeatStr (n, s) {
  // single line solution:
  return s.repeat(n);

  // Previous solution:
  // let newStr = '';
    
  // for (i = 0; i < n; i++){
  //   newStr += s;
  // }
    
  // return newStr;
}

// Tests
console.log(repeatStr(3, '*')); // return '***'
console.log(repeatStr(5, '#')); // return '#####'
console.log(repeatStr(2, 'ha ')); // return 'ha ha'
console.log(repeatStr(3, 'hello ')); // return 'hello hello hello'