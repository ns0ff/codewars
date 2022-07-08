function count (string) {  
    return string.split("").reduce(function(obj, i){
        obj[i] = (obj[i] || 0) + 1;
        return obj;
    }, {});
}

console.log(count("aba"));
console.log(count("djfsfkjgs"));