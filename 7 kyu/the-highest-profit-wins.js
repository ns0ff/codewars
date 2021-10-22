function minMax(arr){
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let newArr = [min, max];
    
    return newArr;
}

console.log(minMax([1,2,3,4,5])) // return [1, 5];
console.log(minMax([2334454,5])) // return [5, 2334454];