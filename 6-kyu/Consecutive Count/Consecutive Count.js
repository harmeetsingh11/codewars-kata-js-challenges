function longestConsecutive(items, key) {
  // Convert items to string in case it's a number
  const str = String(items);
  const k = String(key);

  let max = 0,
    current = 0;

  // Loop through each character
  for (let char of str) {
    if (char === k) {
      current++; // increment count for current streak
      max = Math.max(max, current); // update max if current streak is longer
    } else {
      current = 0; // reset streak if char doesn't match key
    }
  }

  return max; // return the longest streak
}

console.log(longestConsecutive(90000, 0)); // 4
console.log(longestConsecutive('abcdaaadse', 'a')); // 3
console.log(longestConsecutive('abcdaaadse', 'z')); // 0

/*
### Explanation:

* We first convert both `items` and `key` to strings for consistency.
* We iterate through each character, maintaining a count of the current streak of matching characters.
* We update the `max` value whenever we find a longer streak.
* If the character doesn’t match the key, we reset the current streak.

This approach is efficient with **O(n)** time complexity and **O(1)** space.
*/
