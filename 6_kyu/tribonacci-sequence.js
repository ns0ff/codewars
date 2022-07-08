function tribonacci(signature,n){
    if ( n == 0) {
        return [];
    }

    let newSeq = signature;
    let i = 0;

    while (newSeq.length < n) {
        let newChar = signature[i] + signature[i + 1] + signature[i + 2];
        newSeq.push(newChar);
        i++;
    }

    return newSeq.slice(0, n);
}

// Tests
console.log(tribonacci([1,1,1],10)); // return [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0,0,1],10)); // return [0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([1,1,1],1)); // return [1]
console.log(tribonacci([300,200,100],0)); // return []