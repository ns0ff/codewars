// https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
    let suit = card.substr(-1);
     switch(suit) {
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        default: return 'spades';
     }
}

// Tests
console.log(defineSuit('3♣')); // expected output: 'clubs'
console.log(defineSuit('Q♠')); // expected output: 'spades'
console.log(defineSuit('9♦')); // expected output: 'diamonds'
console.log(defineSuit('J♥')); // expected output: 'hearts'