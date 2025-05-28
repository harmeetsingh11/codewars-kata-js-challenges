function iWord(word) {
  // Rule 1: First letter must be uppercase
  if (word[0] !== word[0]?.toUpperCase()) return 'Invalid word';

  // Rule 2: Word should not start with "I"
  if (word.startsWith('I')) return 'Invalid word';

  // Count vowels and consonants
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0,
    consonantCount = 0;

  for (const char of word) {
    if (/[a-zA-Z]/.test(char)) {
      // only count letters
      if (vowels.includes(char)) vowelCount++;
      else consonantCount++;
    }
  }

  // Rule 3: Vowels must be fewer than consonants
  if (vowelCount >= consonantCount) return 'Invalid word';

  // All rules passed, return word with 'i' prefix
  return 'i' + word;
}

console.log(iWord('Phone')); // iPhone
console.log(iWord('Inspire')); // Invalid word
console.log(iWord('East')); // Invalid word
console.log(iWord('road')); // Invalid word
console.log(iWord('Peace')); // Invalid word
console.log(iWord('Lamp')); // iLamp

/*
### ✅ Explanation:

1. **First letter uppercase** → check `word[0] !== word[0]?.toUpperCase()`.
2. **Doesn’t start with "I"** → check `word.startsWith('I')`.
3. **More consonants than vowels** → count vowels and consonants, compare them.
*/
