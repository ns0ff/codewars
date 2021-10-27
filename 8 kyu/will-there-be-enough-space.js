// https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
    let ans = (cap - on) - wait;
    return ans < 0 ? ans * -1 : 0;
}

// Tests
console.log(enough(10, 5, 5)); // expeted output: 0;
console.log(enough(100, 60, 50)); // expeted output: 10;
console.log(enough(20, 5, 5)); // expeted output: 0;