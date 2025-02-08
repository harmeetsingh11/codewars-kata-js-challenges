function randomCase(str) {
  return str
    .split('')
    .map(
      (char) =>
        // Check if the character is a letter (A-Z or a-z)
        /[a-zA-Z]/.test(char)
          ? Math.random() < 0.5
            ? char.toUpperCase()
            : char.toLowerCase() // Randomly convert to upper or lower case
          : char // Leave non-alphabet characters unchanged
    )
    .join('');
}

/*
Explanation:
1. **`split('')`**: Converts the string into an array of individual characters so we can process each one.
2. **`map()`**: Iterates through each character in the array.
3. **`/[a-zA-Z]/.test(char)`**: Checks if the character is an alphabet letter (either uppercase or lowercase). Non-letter characters are left unchanged.
4. **`Math.random() < 0.5`**: Randomly decides whether to convert the letter to uppercase or lowercase.
5. **`toUpperCase()` and `toLowerCase()`**: Convert the character accordingly.
6. **`join('')`**: Converts the array back into a string.
*/
