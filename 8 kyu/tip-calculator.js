// https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
    const tips = {
        "terrible": 0.0,
        "poor": 0.05,
        "good": 0.1,
        "great": 0.15,
        "excellent": 0.2
      };
    
      rating = rating.toLowerCase();
      return rating in tips ? Math.ceil(tips[rating] * amount) : 'Rating not recognised';

      // Switch case:
      /* switch(rating.toLowerCase()){
        case "terrible":return 0;
        case "poor":return Math.ceil(amount * 0.05);
        case "good":return Math.ceil(amount * 0.1);
        case "great":return Math.ceil(amount * 0.15);
        case "excellent":return Math.ceil(amount * 0.2);
        default:return "Rating not recognised";
      } */
}

// Output:
console.log(calculateTip(20, "Excellent")); // expected output: 4
console.log(calculateTip(26.95, "good")); // expected output: 3