// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(num){
    const numbers = {
      '0' : 'Zero',
      '1' : 'One',
      '2' : 'Two',
      '3' : 'Three',
      '4' : 'Four',
      '5' : 'Five',
      '6' : 'Six',
      '7' : 'Seven',
      '8' : 'Eight',
      '9' : 'Nine'
    }
    
    return num.toString().replace(/[0123456789]/g, (numb) => numbers[numb]);
}

// Tests
console.log(switchItUp(1)); // expected output: 'One'
console.log(switchItUp(2)); // expected output: 'Two'
console.log(switchItUp(4)); // expected output: 'Four'
console.log(switchItUp(0)); // expected output: 'Zero'