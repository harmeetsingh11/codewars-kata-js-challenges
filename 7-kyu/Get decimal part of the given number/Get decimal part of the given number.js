function getDecimal(num) {
  // Get the absolute difference between the number and its integer part
  return Math.abs(num % 1);
}

// Test cases
console.log(getDecimal(2.4)); // 0.4
console.log(getDecimal(-0.2)); // 0.2
console.log(getDecimal(5.75)); // 0.75
console.log(getDecimal(-3.99)); // 0.99

/*  
Explanation:

1. `num % 1` extracts the decimal part by finding the remainder when dividing by 1.  
   - Example: `2.4 % 1 === 0.4`
   - Example: `-0.2 % 1 === -0.2`
2. `Math.abs(...)` ensures the decimal part is always positive.  
   - Example: `Math.abs(-0.2) === 0.2`

This approach is **efficient (O(1) time complexity), concise, and works for all valid numbers**. 
*/
