function productFib(prod){
    let n = 0;
    let nMult = 1;

    while (n * nMult < prod) {
      nMult = n + nMult;
      n = nMult - n;
    }

    return [n, nMult, n * nMult===prod];
}

console.log(productFib(4895)); // return [55, 89, true];