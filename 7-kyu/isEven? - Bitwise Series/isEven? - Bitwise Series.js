E;
function isEven(n) {
  // Use bitwise AND with 1 to check if the number is odd or even.
  // Even numbers have the last bit as 0, so n & 1 will be 0 for evens and 1 for odds.
  return (n & 1) === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true
console.log(isEven(-2)); // true
console.log(isEven(-3)); // false

/* 
### Explanation:
- The bitwise AND operation (`&`) with `1` isolates the least significant bit (LSB).
- In binary:
  - Even numbers always end in `0` (e.g., `4` is `100`, `2` is `10`).
  - Odd numbers always end in `1` (e.g., `7` is `111`, `3` is `11`).
- `n & 1` results in:
  - `0` for even numbers.
  - `1` for odd numbers.
- Comparing it to `0` (`(n & 1) === 0`) returns `true` for evens and `false` for odds.

This approach is **fast** (O(1) time complexity), **efficient**, and avoids the use of `%`. 
*/
