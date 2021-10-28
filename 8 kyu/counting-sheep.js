// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arr) {
    let counter = 0;
    
    for (i = 0; i < arr.length; i++){
    if (arr[i]) counter++;
    }
    
    return counter;

    // single line:
    // return arrayOfSheep.filter(item => item === true).length
}

// Test
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ])); // expected output: 17