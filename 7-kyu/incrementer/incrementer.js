function incrementByPosition(arr) {
  // If the array is empty, return an empty array
  if (!arr.length) return [];

  // Map through the array, increment each element by its position (1-indexed),
  // and take the last digit of the resulting sum using modulus 10.
  return arr.map((digit, index) => (digit + index + 1) % 10);
}

/* 
Explanation:

Handle Empty Array: If the input array is empty, the function immediately returns an empty array.

Map Function:
The map function iterates over each element of the array.
The index parameter represents the current position of the element in the array (0-based index).
Each digit is incremented by (index + 1) to account for the 1-based position.

Single Digit: The result is wrapped in (digit + index + 1) % 10 to ensure only the last digit of the sum is retained.

Efficiency: This approach runs in O(n) time complexity, where n is the number of elements in the array, since it iterates over the array once.
*/
