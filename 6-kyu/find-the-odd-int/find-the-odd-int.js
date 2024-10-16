function findOdd(arr) {
  // XOR all numbers together; pairs cancel out, leaving the odd-occurring number
  return arr.reduce((a, b) => a ^ b);
}
// Explanation:

// 1. XOR Operation (^):
// XOR has a unique property: x ^ x = 0 and x ^ 0 = x.
// When you XOR all the numbers in the array, all numbers that appear an even number of times will cancel out and result in 0.
// The number that appears an odd number of times will remain because XORing it with 0 results in itself.

// 2. Using reduce():
// We use reduce() to apply XOR across all elements in the array.
// The final result is the number that occurs an odd number of times.

// This solution is efficient with O(n) time complexity, and it processes the array in a single pass, making it optimal and concise.
