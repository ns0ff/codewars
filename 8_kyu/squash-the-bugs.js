// https://www.codewars.com/kata/56f173a35b91399a05000cb7

function findLongest(str) {
  
    let spl = str.split(" ");
    let longest = 0;
    
    for (let i = 0; i < spl.length; i++){
    
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
      return longest;
}

// Tests
console.log(findLongest("The quick white fox jumped around the massive dog")); // expected output: 7
console.log(findLongest("Take me to tinseltown with you")); // expected output: 10
console.log(findLongest("Sausage chops")); // expected output: 7