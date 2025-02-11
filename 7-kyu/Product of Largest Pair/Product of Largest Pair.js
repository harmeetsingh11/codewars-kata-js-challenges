function maxProduct(arr) {
  let max1 = 0,
    max2 = 0;

  // Iterate through the array once to find the two largest numbers
  for (let num of arr) {
    if (num > max1) {
      max2 = max1; // Update second largest
      max1 = num; // Update largest
    } else if (num > max2) {
      max2 = num; // Update second largest if necessary
    }
  }

  return max1 * max2; // Return product of two largest numbers
}

// Test cases
console.log(maxProduct([2, 1, 5, 0, 4, 3])); // 20
console.log(maxProduct([7, 8, 9])); // 72
console.log(maxProduct([33, 231, 454, 11, 9, 99, 57])); // 104874

/* 
An optimized `O(n)` solution using a single pass through the array:

Explanation:
1. We initialize `max1` and `max2` to `0`.
2. We iterate through the array once (`O(n)`) to find the two largest numbers.
3. If the current number is greater than `max1`, we shift `max1` to `max2` and update `max1`.
4. If it's not greater than `max1` but greater than `max2`, we update `max2`.
5. Finally, we return the product of `max1` and `max2`.

This solution is **O(n)**, significantly faster than sorting (`O(n log n)`). 
*/
