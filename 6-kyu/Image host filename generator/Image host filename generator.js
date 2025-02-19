function generateUniqueName(photoManager) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Generate a random 6-character string
  const getRandomName = () =>
    Array.from(
      { length: 6 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');

  let name;
  do {
    name = getRandomName(); // Generate a new random name
  } while (photoManager.nameExists(name)); // Ensure it's unique

  return name;
}

/* 
Explanation:
1. Define a character set (`chars`) that includes uppercase, lowercase letters, and digits.
2. Create a helper function `getRandomName()` that generates a random 6-character string using `Array.from()`.
3. Use a `do-while` loop to keep generating names until a unique one is found (ensuring it doesn’t exist in `photoManager`).
4. Return the unique name.
*/
