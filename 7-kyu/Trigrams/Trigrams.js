function getTrigrams(phrase) {
  // Replace spaces with underscores
  const cleaned = phrase.replace(/ /g, '_');

  // Return empty string if length is less than 3
  if (cleaned.length < 3) return '';

  // Generate trigrams using a sliding window of size 3
  const trigrams = [];
  for (let i = 0; i <= cleaned.length - 3; i++) {
    trigrams.push(cleaned.slice(i, i + 3));
  }

  // Join trigrams with space and return
  return trigrams.join(' ');
}

console.log(getTrigrams('the quick red'));
// Output: "the he_ e_q _qu qui uic ick ck_ k_r _re red"

/*
### Explanation:

- **`phrase.replace(/ /g, '_')`** replaces all spaces with underscores.
- We return `''` if the length is less than 3 to follow the requirement.
- A loop runs from `0` to `length - 3`, and we use `slice(i, i+3)` to get every trigram.
- Finally, all trigrams are joined with a space.
*/
