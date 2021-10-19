function twoSum(numbers, target) {
    // Brute force method O(n^2)
    for (i = 0; i < numbers.length - 1; i++){
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

// Tests
console.log(twoSum([1,2,3], 4)); // return [0,2]
console.log(twoSum([1234,5678,9012], 14690)); // return [1,2]
console.log(twoSum([2,2,3], 4)); // return [0,1]