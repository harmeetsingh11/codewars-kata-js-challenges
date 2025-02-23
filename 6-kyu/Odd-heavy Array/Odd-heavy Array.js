function isOddHeavy(arr) {
  // Filter out odd and even numbers separately
  let odds = arr.filter((num) => num % 2 !== 0);
  let evens = arr.filter((num) => num % 2 === 0);

  // If there are no odd numbers, return false
  if (odds.length === 0) return false;

  // Find the smallest odd number
  let minOdd = Math.min(...odds);

  // Check if every even number is smaller than the smallest odd number
  return evens.every((even) => even < minOdd);
}

// Test cases
console.log(isOddHeavy([11, 4, 9, 2, 8])); // true
console.log(isOddHeavy([11, 4, 9, 2, 3, 10])); // false
console.log(isOddHeavy([])); // false
console.log(isOddHeavy([3])); // true
console.log(isOddHeavy([0, 2, 4, 6])); // false
console.log(isOddHeavy([7, 1, 2])); // true

/* 
### Explanation:
1. **Filter Odd and Even Numbers**: We separate the numbers into two arrays: `odds` (containing odd numbers) and `evens` (containing even numbers).
2. **Check for Odd Numbers**: If there are no odd numbers, return `false` immediately.
3. **Find Minimum Odd Number**: We determine the smallest odd number using `Math.min(...odds)`.
4. **Compare with Evens**: We check if every even number is smaller than the smallest odd number using `every()`.
5. **Return Result**: If the condition holds for all even numbers, return `true`; otherwise, return `false`.

This solution is efficient, as it iterates through the array only a few times (`filter` and `every` being O(n)), making it optimal.
*/
