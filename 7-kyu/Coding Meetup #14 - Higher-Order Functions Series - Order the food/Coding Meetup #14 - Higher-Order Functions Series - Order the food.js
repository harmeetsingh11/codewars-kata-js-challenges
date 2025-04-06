function countMeals(list) {
  return list.reduce((acc, dev) => {
    // If the meal already exists in the accumulator, increment it
    // Otherwise, initialize it to 1
    acc[dev.meal] = (acc[dev.meal] || 0) + 1;
    return acc;
  }, {}); // Start with an empty object
}

// Test cases
var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    meal: 'vegetarian',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    meal: 'standard',
  },
  {
    firstName: 'Ramona',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    meal: 'vegan',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    meal: 'vegetarian',
  },
];

console.log(countMeals(list1));
// Output: { vegetarian: 2, standard: 1, vegan: 1 }
