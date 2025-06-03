function seaSick(sea) {
  // Edge case: empty or 1-character string can't have any transitions
  if (sea.length < 2) return 'No Problem';

  // Count transitions where current character != previous character
  let changes = 0;
  for (let i = 1; i < sea.length; i++) {
    if (sea[i] !== sea[i - 1]) changes++;
  }

  // If more than 20% of characters are transitions, it's a problem
  return changes > sea.length * 0.2 ? 'Throw Up' : 'No Problem';
}

console.log(seaSick('~_~_~_~')); // "Throw Up"
console.log(seaSick('~~~~____')); // "No Problem"

/*
### Explanation:

* We iterate once through the string (`O(n)` time), checking for character changes from one index to the next.
* Each change is counted.
* If the number of changes is **greater than 20%** of the string's length, we return `"Throw Up"`; otherwise, `"No Problem"`.
* It handles short or empty strings safely.
*/
