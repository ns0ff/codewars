let min = function(list){
    return Math.min.apply(null, list);
}

let max = function(list){
    return Math.max.apply(null, list);
}

// Tests
console.log(min([-52, 56, 30, 29, -54, 0, -110])); // expected output -110