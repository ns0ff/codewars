function diamond(n){
    if ( (n < 0) || !(n % 2)) return null;

    let middle = parseInt((n + 1) / 2), x, diam = '';
   
    for(var i = 1; i <= n; i++) {
        x = i <= middle ? i : n - i + 1;
        diam += ' '.repeat(middle - x) + '*'.repeat(2 * x - 1) + '\n';
    }

    return diam;

}

// Tests
console.log(diamond(1)); // return "*\n"
console.log(diamond(3)); // return "*\n***\n *\n"
console.log(diamond(5)); // return "*\n ***\n*****\n ***\n  *\n"
console.log(diamond(2)); // return null
console.log(diamond(-3)); // return null
console.log(diamond(0)); // return null