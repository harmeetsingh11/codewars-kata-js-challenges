// Function to check if a word can pass through the green glass door
function canPassThroughGreenGlassDoor(word) {
  // Check if the word contains any pair of same adjacent letters
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return true; // Word has double letters, it can pass
    }
  }
  return false; // No double letters found, it can't pass
}

const words = [
  'moon',
  'sun',
  'slippers',
  'sandals',
  'yelling',
  'shouting',
  'speed',
  'fast',
  'sheet',
  'blanket',
  'glasses',
  'contacts',
];

words.forEach((word) => {
  const result = canPassThroughGreenGlassDoor(word)
    ? '✅ can pass'
    : '❌ cannot pass';
  console.log(`${word}: ${result}`);
});

/*
### Explanation:
- We loop through each character in the string and compare it with the next one.
- If we find two same characters in a row (e.g., `oo`, `ee`, `ss`), the function returns `true`.
- Otherwise, it returns `false`.
*/
