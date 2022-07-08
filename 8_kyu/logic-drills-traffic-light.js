// https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
    // Previous solution. Switch.
    // switch(current) {
    //     case 'green':
    //     return 'yellow';
        
    //     case 'yellow':
    //     return 'red';
        
    //     case 'red':
    //     return 'green';
    // }

    // Single line:
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

// Tests
console.log(updateLight("green")); // expected output: 'yellow'
console.log(updateLight("yellow")); // expected output: 'red'
console.log(updateLight("red")); // expected output: 'green'