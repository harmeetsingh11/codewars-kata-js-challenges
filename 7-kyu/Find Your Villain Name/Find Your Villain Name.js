function getVillainName(birthday) {
  // Define mappings for months and last digits
  const firstNames = [
    'The Evil',
    'The Vile',
    'The Cruel',
    'The Trashy',
    'The Despicable',
    'The Embarrassing',
    'The Disreputable',
    'The Atrocious',
    'The Twirling',
    'The Orange',
    'The Terrifying',
    'The Awkward',
  ];

  const lastNames = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket',
  ];

  // Extract month (0-based) and last digit of date
  const firstName = firstNames[birthday.getMonth()];
  const lastName = lastNames[birthday.getDate() % 10];

  return `${firstName} ${lastName}`;
}

console.log(getVillainName(new Date(2024, 10, 18))); // "The Terrifying Teaspoon"

/* 
Explanation:
1. **Mapping Arrays**:  
   - The `firstNames` array stores villain first names indexed by months (0-11).
   - The `lastNames` array maps the last digit of the date to a villain last name.

2. **Extracting Data**:  
   - `birthday.getMonth()` gets the zero-based month (0 = January, 11 = December).
   - `birthday.getDate() % 10` extracts the last digit of the day.

3. **Returning the Name**:  
   - Uses template literals to return the villain name in `"FirstName LastName"` format.

This approach is efficient (`O(1)`) and avoids unnecessary conditionals, making it both clean and performant.
*/
