function shifter(s) {
  // Set of characters that are valid in a shifter word
  const validChars = new Set(['H', 'I', 'N', 'O', 'S', 'X', 'Z', 'M', 'W']);

  // Split the input string into words, filter out the valid shifter words, and store in a Set to ensure uniqueness
  const uniqueShifters = new Set(
    s
      .split(' ')
      .filter((word) => word && [...word].every((char) => validChars.has(char)))
  );

  // Return the number of unique shifter words
  return uniqueShifters.size;
}

shifter('SOS IN THE HOME'); // returns 2 -> "SOS", "IN"
shifter('WHO IS SHIFTER AND WHO IS NO'); // returns 3 -> "WHO", "IS", "NO"
shifter('TASK'); // returns 0
shifter(''); // returns 0

/*
### Explanation:
- **`validChars`**: defines all the letters that are valid in a shifter word.
- **`s.split(' ')`**: splits the input string into individual words.
- **`.filter(...)`**: filters only those words where **every** character is in `validChars`.
- **`new Set(...)`**: ensures we only count **unique** shifter words.
- **`.size`**: returns the count of unique entries in the set.
*/
