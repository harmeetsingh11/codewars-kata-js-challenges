function heavyMetalUmlauts(boringText) {
  // Dictionary mapping normal vowels to their heavy metal umlaut equivalents
  var dict = {
    A: 'Ä',
    E: 'Ë',
    I: 'Ï',
    O: 'Ö',
    U: 'Ü',
    Y: 'Ÿ',
    a: 'ä',
    e: 'ë',
    i: 'ï',
    o: 'ö',
    u: 'ü',
    y: 'ÿ',
  };

  // Use String.replace with a regular expression that matches all vowels (A, E, I, O, U, Y, and lowercase)
  // For each matched character, replace it with the corresponding value from the dictionary
  // If the character isn't found (very unlikely here), return empty string as fallback
  return boringText.replace(/[AEIOUYaeiouy]/g, (r) => dict[r] || '');
}

console.log(heavyMetalUmlauts('Hello World')); // Hëllö Wörld

/*
### ✅ **Thought Process & Intuition**

1. **Objective:** Replace every standard vowel (both uppercase and lowercase) in a given string with its "heavy metal" version using umlauts (two dots above the letter).
2. **Strategy:**

   * Use a **lookup dictionary** to map standard vowels to their umlaut versions.
   * Use a **regular expression** to find all vowels in the string.
   * Use `.replace()` with a **callback function** that swaps each vowel using the dictionary.
*/
