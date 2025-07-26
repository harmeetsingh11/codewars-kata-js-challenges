/**
 * Returns an array of counselors that Jason can outsmart (i.e., those with lower intelligence).
 *
 * @param {Array<[string, number]>} counselors - Array of [name, intelligence] pairs.
 * @param {number} jasonIntel - Jason's intelligence level.
 * @returns {string[]} - Names of counselors Jason can kill.
 */
function killcount(counselors, jasonIntel) {
  // Filter counselors whose intelligence is less than Jason's, then map to their names
  return counselors
    .filter(([_, intel]) => intel < jasonIntel)
    .map(([name]) => name);
}

const counselors = [
  ['Chad', 2],
  ['Tommy', 9],
];
const jason = 7;
console.log(killcount(counselors, jason)); // Output: ['Chad']

/* 
### Explanation:

* **`filter()`**: Keeps only the counselors with intelligence less than Jason’s.
* **Destructuring**: `[_, intel]` and `[name]` make the code cleaner and more readable.
* **`map()`**: Extracts just the names from the filtered counselors.

This is **O(n)** time and space complexity — optimal for a single-pass solution with minimal memory usage.
*/
