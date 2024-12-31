function howmuch(m, n) {
  // Ensure m is the smaller and n is the larger value
  const start = Math.min(m, n);
  const end = Math.max(m, n);

  const results = [];

  // Iterate through all possible values for f
  for (let f = start; f <= end; f++) {
    // Check if conditions for cars and boats are satisfied
    if ((f - 1) % 9 === 0 && (f - 2) % 7 === 0) {
      const c = (f - 1) / 9; // Cost of a car
      const b = (f - 2) / 7; // Cost of a boat
      results.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
    }
  }

  return results;
}

// Examples
console.log(howmuch(1, 100)); // [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
console.log(howmuch(1000, 1100)); // [["M: 1045", "B: 149", "C: 116"]]
console.log(howmuch(10000, 9950)); // [["M: 9991", "B: 1427", "C: 1110"]]
console.log(howmuch(0, 200)); // [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]

/* 
Explanation

Input Validation:
The range is normalized using Math.min and Math.max to handle both increasing and decreasing input ranges.

Iterate Through Possible Values:
Loop from the lower bound (start) to the upper bound (end) inclusive.

Check Conditions:
(f - 1) % 9 === 0: Ensures that after buying 9 cars, exactly 1 unit is left.
(f - 2) % 7 === 0: Ensures that after buying 7 boats, exactly 2 units are left.

Calculate Costs:
If both conditions are satisfied, compute the cost of a car (c) and a boat (b).

Store Results:
Add the formatted result to the results array in the specified format.

Return Results:
Return the array of possible solutions.

Efficiency
Time Complexity: 
O(n−m), where n and m are the range bounds. The modulo operations and arithmetic are O(1) for each f.
Space Complexity: 
O(k), where k is the number of valid solutions found.
*/
