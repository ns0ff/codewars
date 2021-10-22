function removeSmallest(numbers) {
    let min = {'num': Infinity, 'idx': 0};

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < min['num']) {
            min['num'] = numbers[i];
            min['idx'] = i;
        }
    }

    return numbers.slice(0, min['idx']).concat(numbers.slice(min['idx'] + 1));
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // return [2, 3, 4, 5];
console.log(removeSmallest([5, 3, 2, 1, 4])) // return [5, 3, 2, 4];
console.log(removeSmallest([2, 2, 1, 2, 1])) // return [2, 2, 2, 1];