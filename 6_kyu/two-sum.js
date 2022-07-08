function twoSum(numbers, target) {
    // Brute force method O(n^2)
    // for (i = 0; i < numbers.length - 1; i++){
    //     for (j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }

    // Optimized method
    // let mapOfIdx = {};
    // let idx = [];

    // for (i = 0; i < numbers.length; i++) {
    //     mapOfIdx[numbers[i]] = i;
    // }

    // for (i = 0; i < numbers.length; i++) {
    //     let res = target - numbers[i];

    //     if (mapOfIdx[res] !== null && mapOfIdx[res] !== i) {
    //         idx.push[i];
    //         idx.push(mapOfIdx[res]);
    //     }
    // }

    // return idx;

    let prevVal = {};

    for (i = 0; i < numbers.length; i++) {
        let res = target - numbers[i];

        if (prevVal[res]) {
            return [res, numbers[i]];
        }

        prevVal[numbers[i]] = true;
    }
}

// Tests
console.log(twoSum([1,2,3], 4)); // return [0,2]
console.log(twoSum([1234,5678,9012], 14690)); // return [1,2]
console.log(twoSum([2,2,3], 4)); // return [0,1]