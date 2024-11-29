function getDrinkByProfession(profession) {
  // Normalize the input to lowercase for case-insensitive comparison
  const normalizedProfession = profession.toLowerCase();

  // Use an object map for efficient lookup
  const drinksMap = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };

  // Return the mapped drink if found; otherwise, default to "Beer"
  return drinksMap[normalizedProfession] || 'Beer';
}

/* 
Explanation:

Case-Insensitive Comparison:
The input profession is converted to lowercase using toLowerCase() so that comparisons are case-insensitive.

Object Map for Lookup:
An object (drinksMap) is used to store the mapping between professions and their respective drinks.
This ensures that the lookup is efficient (O(1) time complexity).

Default Case Handling:
If the normalizedProfession key is not found in the drinksMap, the || operator ensures that "Beer" is returned as the default value.
*/
