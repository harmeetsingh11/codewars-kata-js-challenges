function tacoTranslate(word) {
  // Define a mapping of letters to taco ingredients
  const ingredients = {
    t: 'tomato',
    l: 'lettuce',
    c: 'cheese',
    g: 'guacamole',
    s: 'salsa',
  };

  // Convert word to lowercase, replace vowels with 'beef', and map letters to their ingredients
  const taco = [
    'shell',
    ...word
      .toLowerCase()
      .split('')
      .map((char) =>
        'aeiou'.includes(char) ? 'beef' : ingredients[char] || ''
      )
      .filter(Boolean),
    'shell',
  ];

  return taco;
}

console.log(tacoTranslate('Tacos')); // [ 'shell', 'tomato', 'beef', 'cheese', 'beef', 'salsa', 'shell' ]

/* 
### Explanation:
1. **Define a mapping** of specific letters to taco ingredients.
2. **Convert the word to lowercase** to make it case-insensitive.
3. **Replace vowels (`a, e, i, o, u`) with `beef`**.
4. **Map each relevant letter to its ingredient**, ignoring others.
5. **Filter out empty values** to keep the list clean.
6. **Wrap the list with `shell` at both ends** to complete the taco.

This ensures an efficient O(n) solution, where `n` is the length of the input word.
*/
