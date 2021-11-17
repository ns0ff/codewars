// https://www.codewars.com/kata/56170e844da7c6f647000063

const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

  // Tests
  console.log(peopleWithAgeDrink(22)); // expected output: 'drink whiskey'
  console.log(peopleWithAgeDrink(13)); // expected output: 'drink toddy'
  console.log(peopleWithAgeDrink(15)); // expected output: 'drink coke'
  console.log(peopleWithAgeDrink(20)); // expected output: 'drink beer'