function upArray(arr) {
  // Check for invalid cases: empty array, negative integers, or integers greater than 9
  if (arr.length === 0 || arr.some((n) => n < 0 || n > 9)) return null;

  // Iterate from the end of the array to add 1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++; // Increment the current digit if it's less than 9
      return arr; // Return result as no carry is needed
    }
    arr[i] = 0; // Set current digit to 0 and continue the loop to carry over
  }

  // If all digits were 9, we need to add 1 at the beginning (e.g., 999 + 1 = 1000)
  arr.unshift(1);
  return arr;
}

/* 
Explanation:

Input Validation:
The function first checks if the array is empty, contains negative integers, or has elements greater than 9. If any of these conditions are met, it returns null.

Adding One:
Starting from the last element, we iterate backward through the array.
If the current digit is less than 9, we increment it by 1 and return the array immediately (no carry needed).
If the current digit is 9, we set it to 0 (carrying over to the next digit).

Handling All 9s:
If the loop completes (e.g., for an array like [9, 9, 9]), we add 1 to the beginning of the array with arr.unshift(1). This handles cases where all digits were 9, resulting in a new leading digit.

This solution is optimal, operating in O(n) time, where n is the length of the array, and handles carry efficiently without extra space.
*/
