const strongEnough = (earthquake, age) => {
  // Calculate the earthquake's magnitude by multiplying the sum of each shockwave
  const magnitude = earthquake
    .map((shockwave) => shockwave.reduce((sum, tremor) => sum + tremor, 0)) // Sum each shockwave
    .reduce((product, shock) => product * shock, 1); // Multiply all shockwave sums

  // Calculate the building's strength after exponential decay
  const strength = 1000 * Math.pow(0.99, age);

  // Return the result based on the comparison
  return strength >= magnitude ? 'Safe!' : 'Needs Reinforcement!';
};

console.log(
  strongEnough(
    [
      [5, 3, 7],
      [3, 3, 1],
      [4, 1, 2],
    ],
    5
  )
); // "Needs Reinforcement!"
console.log(
  strongEnough(
    [
      [2, 2, 2],
      [2, 2, 2],
    ],
    10
  )
); // "Safe!"
console.log(
  strongEnough(
    [
      [1, 1],
      [1, 1],
    ],
    100
  )
); // "Safe!"

/*
### **Explanation:**
1. **Magnitude Calculation:**
   - For each shockwave (inner array), sum the tremors using `.reduce()`.
   - Multiply all the shockwave sums together to get the earthquake's magnitude.

2. **Building Strength Calculation:**
   - The building starts with a strength of `1000`.
   - The strength decays exponentially by 1% per year, calculated using the formula:
     \[ \text{strength} = 1000 \times (0.99)^\text{age} \]

3. **Final Comparison:**
   - If the building's strength is **greater than or equal to** the earthquake's magnitude → `"Safe!"`
   - Otherwise → `"Needs Reinforcement!"`

### **Why is this solution efficient?**
- **Time Complexity:** \(O(m \times n)\) where \(m\) is the number of shockwaves and \(n\) is the average number of tremors per shockwave.
- **Space Complexity:** \(O(1)\) (no additional memory usage other than a few variables).
*/
