function boolToWord( bool ){
    if (bool === true) {
      return 'Yes';
    } else {
      return 'No';
    }
}

console.log(boolToWord(true)); // return 'Yes'
console.log(boolToWord(false)); // return 'No'