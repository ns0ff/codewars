function getSum( a,b ){
    let min = Math.min(a, b), 
        max = Math.max(a, b), 
        sum = max; 
    for (i = min; i < max; ++i) sum += i;
    return sum;
}