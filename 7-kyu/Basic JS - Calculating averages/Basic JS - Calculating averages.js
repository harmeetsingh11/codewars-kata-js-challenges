class Calculator {
  // Static method to calculate average
  static average(...nums) {
    // If no arguments provided, return 0
    if (nums.length === 0) return 0;
    // Calculate sum and divide by length
    return nums.reduce((sum, num) => sum + num, 0) / nums.length;
  }
}

console.log(Calculator.average()); // Output: 0
console.log(Calculator.average(3, 4, 5)); // Output: 4
console.log(Calculator.average(10, 20)); // Output: 15

/* 
Explanation:
1. **Using a static method**:  
   - The `average` method is `static`, meaning it can be called directly on the `Calculator` class without creating an instance.

2. **Handling no arguments**:  
   - If no arguments are provided (`nums.length === 0`), it returns `0`.

3. **Efficiently calculating the average**:  
   - The `reduce()` function efficiently sums up all elements.
   - The sum is then divided by the total number of arguments.
*/
