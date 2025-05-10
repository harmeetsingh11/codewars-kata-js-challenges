function peopleWithAgeDrink(age) {
  // Use if-else conditions to match the correct age group and return the drink
  if (age < 14) return 'drink toddy';
  if (age < 18) return 'drink coke';
  if (age < 21) return 'drink beer';
  return 'drink whisky'; // age >= 21
}

console.log(peopleWithAgeDrink(13)); // "drink toddy"
console.log(peopleWithAgeDrink(17)); // "drink coke"
console.log(peopleWithAgeDrink(18)); // "drink beer"
console.log(peopleWithAgeDrink(20)); // "drink beer"
console.log(peopleWithAgeDrink(30)); // "drink whisky"
