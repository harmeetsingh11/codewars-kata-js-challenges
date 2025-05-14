function afterLetter(str, letter) {
  // Convert letter to lowercase for case-insensitive comparison
  const target = letter.toLowerCase();

  // Initialize result string
  let result = '';

  // Iterate through the string up to the second last character
  for (let i = 0; i < str.length - 1; i++) {
    // If current character matches the target letter (case-insensitive)
    if (str[i].toLowerCase() === target) {
      const nextChar = str[i + 1];
      // Check if the next character is an alphabetic letter
      if (/[a-zA-Z]/.test(nextChar)) {
        result += nextChar;
      }
    }
  }

  return result;
}

console.log(afterLetter('are you really learning Ruby?', 'r')); // "eenu"
console.log(afterLetter('Katy Perry is on the radio!', 'r')); // "rya"
console.log(afterLetter('Pirates say arrrrrrrrr.', 'r')); // "arrrrrrrr"
console.log(afterLetter('r8 your friend', 'r')); // "i"

/*
### Explanation:

* We loop through each character in the string (except the last to avoid out-of-bounds access).
* For each character, we check if it matches the target letter, ignoring case.
* If it does, we check the **next character**.
* We only append it to the result if it’s a **letter** (`[a-zA-Z]`).
* This avoids numbers, punctuation, and underscores.
*/
