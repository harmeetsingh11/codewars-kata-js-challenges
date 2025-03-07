function rectangleArea(diagonal, side) {
  // If the diagonal is less than or equal to the given side, it's not a valid rectangle
  if (diagonal <= side) return 'Not a rectangle';

  // Using Pythagoras theorem: diagonal² = side² + otherSide²
  // Rearranging to find the missing side: otherSide = sqrt(diagonal² - side²)
  let otherSide = Math.sqrt(diagonal ** 2 - side ** 2);

  // Calculate the area and round to two decimal places
  return Math.round(side * otherSide * 100) / 100;
}

console.log(rectangleArea(5, 3)); // 6
console.log(rectangleArea(10, 6)); // 48
console.log(rectangleArea(5, 5)); // "Not a rectangle"

/* 
### Explanation:
1. **Check Validity**: If the diagonal is smaller than or equal to the given side, it's not a rectangle.
2. **Apply Pythagoras' Theorem**:  
   \[
   \text{diagonal}^2 = \text{side}^2 + \text{other side}^2
   \]
   Solve for the missing side:
   \[
   \text{otherSide} = \sqrt{\text{diagonal}^2 - \text{side}^2}
   \]
3. **Calculate Area**:  
   \[
   \text{Area} = \text{side} \times \text{otherSide}
   \]
4. **Round to Two Decimal Places**: Multiply by 100, round, and divide by 100.

This solution is **efficient (O(1) complexity)** and **concise** while following best practices. 
*/
