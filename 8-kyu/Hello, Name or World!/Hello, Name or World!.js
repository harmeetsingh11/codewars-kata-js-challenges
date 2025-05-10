function hello(name) {
  // Check if name is missing or an empty string
  if (!name) return 'Hello, World!';

  // Capitalize the first letter, lowercase the rest
  const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  // Return the greeting with the formatted name
  return `Hello, ${formattedName}!`;
}

/*
### Explanation:

`if (!name)` handles both `undefined`, `null`, and `""` (empty string) cases.
`name[0].toUpperCase()` capitalizes the first character.
`name.slice(1).toLowerCase()` ensures the rest of the name is in lowercase.
Template literals make the final greeting clean and readable.
*/
