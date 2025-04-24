function countFeelings(string, feelings) {
  // Build a frequency map of letters in the input string
  const freq = {};
  for (const char of string) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Helper function to check if a feeling can be formed from the string
  const canFormFeeling = (feeling) => {
    const feelingFreq = {};
    for (const char of feeling) {
      feelingFreq[char] = (feelingFreq[char] || 0) + 1;
    }
    // Check if string has enough of each letter
    return Object.entries(feelingFreq).every(
      ([char, count]) => (freq[char] || 0) >= count
    );
  };

  // Count how many feelings can be formed
  const count = feelings.reduce(
    (acc, feeling) => acc + (canFormFeeling(feeling) ? 1 : 0),
    0
  );

  // Return result string based on count
  return `${count} feeling${count === 1 ? '' : 's'}.`;
}

console.log(
  countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief'])
); // "3 feelings."
console.log(
  countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief'])
); // "1 feeling."
console.log(
  countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear'])
); // "0 feelings."

/*
### ✅ Explanation:
- It first creates a frequency map of all characters in the input string.
- For each feeling, it builds a similar frequency map and checks if the string has enough characters to form it **at least once**.
- It sums up the number of feelings that can be formed and formats the return value properly based on singular/plural.
*/
