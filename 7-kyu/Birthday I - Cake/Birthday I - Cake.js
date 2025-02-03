function cake(candles, debris) {
  // If no candles, carpet cannot catch fire
  if (candles === 0) return 'That was close!';

  // Calculate total debris value based on given rules
  let totalDebris = [...debris].reduce(
    (sum, char, i) =>
      sum + (i % 2 === 0 ? char.charCodeAt(0) : char.charCodeAt(0) - 96),
    0
  );

  // Check if fallen candles exceed 70% of total candles
  return totalDebris > candles * 0.7 ? 'Fire!' : 'That was close!';
}

/*
**Explanation**

1. **Edge Case**: If `candles === 0`, return `"That was close!"` immediately.
2. **Debris Calculation**:  
   - Convert `debris` string into an array using the spread operator (`[...debris]`).
   - Use `reduce()` to iterate through each character:
     - If index is even (`i % 2 === 0`), add the ASCII value (`char.charCodeAt(0)`).
     - If index is odd, add the alphabetical position (`char.charCodeAt(0) - 96`).
3. **Check Fire Condition**:  
   - If `totalDebris > 70% of candles`, return `"Fire!"`, otherwise return `"That was close!"`.

### **Time Complexity**
- **O(n)** where `n` is the length of `debris`, making it optimal. 🚀

*/
