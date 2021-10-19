function positiveSum(arr) {
    let posArr = arr.filter(num => num > -1);
    let ttl = 0;
    for (i = 0; i < posArr.length; i++) {
        ttl += posArr[i];
    }

    return ttl;
}

// Tests
console.log(positiveSum([1,2,3,4,5])); // 15
console.log(positiveSum([1,-2,3,4,5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1,-2,-3,-4,-5])); // 0
console.log(positiveSum([-1,2,3,4,-5])); // 9