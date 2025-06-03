function addRemainders(nums, div) {
  // Map through the array and for each number, add its remainder when divided by div
  return nums.map((num) => num + (num % div));
}

// Example usage:
console.log(addRemainders([2, 7, 5, 9, 100, 34, 32, 0], 3));
// ➞ [4, 8, 7, 9, 101, 35, 34, 0]

console.log(addRemainders([1000, 999, 998, 997], 5));
// ➞ [1000, 1003, 1001, 999]

console.log(addRemainders([], 2));
// ➞ []

/*
### Explanation:

- We use `.map()` to create a new array where each item is updated.
- `num % div` gives the remainder of the division.
- Adding this remainder to the original number gives the desired result.
- Time Complexity: **O(n)** — optimal for up to 10,000 elements.
*/
