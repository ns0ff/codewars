function sumTwoSmallestNumbers(numbers) { 
  
    let min1 = numbers[0];
    let min2 = numbers[1];
    
    if (min2 < min1) {
        min1 = numbers[1];
        min2 = numbers[0];
    }
    
    for (i = 2; i < numbers.length; i++) {
        if (numbers[i] < min1) {
            min2 = min1;
            min1 = numbers[i];
        } else if (numbers[i] < min2) {
            min2 = numbers[i];
        }
    }
    
    console.log("1st minimal:", min1, "2nd minimal:", min2);
    
    return min1 + min2;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // return 13; 