// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(num) {
    let str = '';
    for(let i = 1; i <= 10; i++) {
      const result = i * num;
      if (i == 10) {
        str = str.concat(`${i} * ${num} = ${result}`);
      } else {
        str = str.concat(`${i} * ${num} = ${result}\n`);
      }
  
    }
    return str;
}

// Single line:
// const multiTable = num => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${num} = ${i*num}`)).join('\n')

//Tests
console.log(multiTable(5)); // expected output: '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
console.log(multiTable(1)); // expected output: '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'