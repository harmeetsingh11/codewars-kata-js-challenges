function sharedBits(a, b) {
  // Perform bitwise AND to find common 1 bits, then convert to binary and count '1's
  return (a & b).toString(2).split('1').length - 1 >= 2;
}

// Test cases
console.log(sharedBits(7, 10)); // false
console.log(sharedBits(7, 15)); // true
console.log(sharedBits(10, 15)); // true

/*
### Explanation:
1. **Bitwise AND (`a & b`)**: This operation keeps only the bits that are `1` in both numbers.
2. **Convert to Binary (`toString(2)`)**: This turns the result into a string of `0`s and `1`s.
3. **Count `1`s**:  
   - `split('1')` breaks the string at each `1`, creating an array.  
   - `length - 1` gives the count of `1`s.
4. **Check if Count ≥ 2**: If at least two `1`s exist, return `true`, otherwise return `false`.
*/
