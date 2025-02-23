function shadesOfGrey(n) {
  // Ensure n is within the valid range (1 to 254), otherwise return an empty array
  n = Math.max(0, Math.min(n, 254));

  // Generate an array of 'n' shades of grey in hex format
  return Array.from({ length: n }, (_, i) => {
    let shade = (i + 1).toString(16).padStart(2, '0'); // Convert to hex, ensuring two digits
    return `#${shade}${shade}${shade}`; // Construct the grey shade
  });
}

// Test cases
console.log(shadesOfGrey(1)); // ["#010101"]
console.log(shadesOfGrey(10)); // ["#010101", "#020202", ..., "#0a0a0a"]
console.log(shadesOfGrey(-5)); // []
console.log(shadesOfGrey(300)); // 254 shades of grey

/*
### Explanation:
1. **Bounds Check**:  
   - If `n` is negative, return an empty array.  
   - If `n` exceeds 254, limit it to 254.  
2. **Using `Array.from()`**:  
   - It efficiently creates an array of length `n`.  
   - `_` is a throwaway variable (unused).  
   - `i + 1` ensures the first value starts from `1` (not `0`).  
3. **Hex Conversion**:  
   - `(i + 1).toString(16)` converts the number to hexadecimal.  
   - `.padStart(2, '0')` ensures it is always two digits (`01`, `02`, ..., `fe`).  
4. **String Formatting**:  
   - Constructs the shade in `#RRGGBB` format where R, G, and B have equal values.  

This approach is optimal, using **O(n) time and O(n) space** while keeping the code concise and readable. 
*/
