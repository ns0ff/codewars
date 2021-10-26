function updateLight(current) {
    switch(current) {
        case 'green':
        return 'yellow';
        
        case 'yellow':
        return 'red';
        
        case 'red':
        return 'green';
    }
}

// Tests
console.log(updateLight("green")); // expected output: 'yellow'
console.log(updateLight("yellow")); // expected output: 'red'
console.log(updateLight("red")); // expected output: 'green'