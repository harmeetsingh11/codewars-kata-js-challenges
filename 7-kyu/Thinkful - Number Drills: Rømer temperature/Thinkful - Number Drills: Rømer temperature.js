/**
 * Convert Celsius to Rømer scale
 * Formula: Rø = (21/40) * C + 7.5
 *
 * @param {number} celsius - Temperature in degrees Celsius
 * @returns {number} - Equivalent temperature in degrees Rømer
 */
function celsiusToRomer(celsius) {
  return (21 / 40) * celsius + 7.5;
}

// Example usage:
console.log(celsiusToRomer(24)); // ≈ 20.1
console.log(celsiusToRomer(8)); // ≈ 11.7
console.log(celsiusToRomer(29)); // ≈ 22.725

/*
### 📌 Formula Recap

The conversion formula from Celsius (°C) to Rømer (°Rø) is:

$$
°Rø = \frac{21}{40} \times °C + 7.5
$$

### 📖 Explanation (plain text)

1. The **formula** is applied directly without any extra steps, making it efficient (O(1) time complexity).
2. The function takes a single input (`celsius`) and multiplies it by `21/40`, then adds `7.5`.
3. The result is returned as the equivalent **Rømer temperature**.
4. The implementation is **concise** and avoids unnecessary variables, but still clear with comments.
5. The function works for all real numbers (including decimals and negatives).
*/
