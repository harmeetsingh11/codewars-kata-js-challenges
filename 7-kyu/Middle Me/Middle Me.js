const placeInMiddle = (x, y, n) => {
  // If N is odd, X can't be perfectly in the middle, return X
  if (n % 2 !== 0) return x;

  // Create the repeated Y string
  const repeatedY = y.repeat(n);

  // Calculate the middle index
  const mid = n / 2;

  // Place X in the middle by slicing and inserting X
  return repeatedY.slice(0, mid) + x + repeatedY.slice(mid);
};

console.log(placeInMiddle('A', '*', 10)); // '*****A*****'
console.log(placeInMiddle('B', '-', 7)); // 'B' (odd N, returns X)

/*
### **Explanation:**
1. **Input Validation:** 
   - If `N` is odd, the function immediately returns `x` because `x` cannot be placed perfectly in the middle.
   
2. **String Construction:**
   - The `y.repeat(n)` creates the full repeated string.
   
3. **Middle Insertion:**
   - The middle index is calculated with `n / 2`.
   - Use `slice(0, mid)` to get the left half.
   - Insert `x` in the middle.
   - Append the right half with `slice(mid)`.

### **Under 70 characters version:**

const f = (x, y, n) => n % 2 ? x : y.repeat(n/2) + x + y.repeat(n/2);

This is a super concise solution:
- Uses a ternary operator to handle the odd/even case.
- Uses `y.repeat(n/2)` twice to create both halves and inserts `x` in between.
*/
