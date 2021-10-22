function twoHighest(arr) {
    if (arr.length < 2) return arr;
    
    return arr.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([])); // return []
console.log(twoHighest([15])); // return [15]
console.log(twoHighest([15, 20, 20, 17])); // return [20, 17]