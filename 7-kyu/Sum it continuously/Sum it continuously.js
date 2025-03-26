const add = (arr) => {
  // Use the reduce method with map to create a prefix sum array
  let sum = 0;
  return arr.map((num) => (sum += num));
};

console.log(add([1, 2, 3, 4, 5])); // Output: [1, 3, 6, 10, 15]
console.log(add([4, 7, 1, 9])); // Output: [4, 11, 12, 21]

/*
### **Explanation:**
1. **`let sum = 0;`**
   - We initialize a variable `sum` to store the running total.

2. **`arr.map(num => sum += num)`**
   - The `map()` method creates a new array by applying a function to each element.
   - Inside the callback, we continuously add the current `num` to the `sum`.
   - The current value of `sum` (the running total) is returned at each step, creating the prefix sum array.


### **Why is this efficient?**
- **Time Complexity:** \(O(n)\) → We iterate through the array once.
- **Space Complexity:** \(O(n)\) → We return a new array of the same size.
- **Concise:** Just two lines of code using `map()` and `sum` accumulation.
*/
