function generateT(S) {
  const T = [];
  const n = S.length;

  // We use two pointers to simulate the process without mutating S
  let left = 0;
  let right = n - 1;
  let reverse = false;

  while (left <= right) {
    if (!reverse) {
      // Push first and last elements in order
      if (left !== right) {
        T.push(S[left], S[right]);
      } else {
        T.push(S[left]); // when only one element remains
      }
    } else {
      // Push last and first elements in reverse order
      if (left !== right) {
        T.push(S[right], S[left]);
      } else {
        T.push(S[right]);
      }
    }
    left++;
    right--;
    reverse = !reverse; // alternate reversing every round
  }

  return T;
}

console.log(generateT([1, 2, 3, 4, 5, 6]));
// Output: [1, 6, 5, 2, 3, 4]

/*
### Explanation
- We're not modifying the original array `S`.
- Instead of slicing and reversing `S`, we use two pointers (`left` and `right`) to simulate access.
- On each iteration, we either:
  - Add `S[left]` and `S[right]` (in normal order), or
  - Add `S[right]` and `S[left]` (in reversed order).
- This keeps it **O(n)** in time and **O(1)** in extra space (besides the result array).
*/
