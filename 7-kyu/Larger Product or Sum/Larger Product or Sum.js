function sumOrProduct(arr, n) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the sum of the n largest numbers
  const sum = arr.slice(-n).reduce((acc, num) => acc + num, 0);

  // Calculate the product of the n smallest numbers
  const product = arr.slice(0, n).reduce((acc, num) => acc * num, 1);

  // Compare sum and product and return the appropriate result
  return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)); // "product"

/*
**Explanation**
1. **Sort the array in ascending order** → `arr.sort((a, b) => a - b);`
   - This allows us to easily extract the `n` smallest and largest elements.

2. **Find the sum of the `n` largest numbers** → `arr.slice(-n).reduce((acc, num) => acc + num, 0);`
   - `.slice(-n)` takes the last `n` elements (largest numbers).
   - `.reduce((acc, num) => acc + num, 0)` calculates their sum.

3. **Find the product of the `n` smallest numbers** → `arr.slice(0, n).reduce((acc, num) => acc * num, 1);`
   - `.slice(0, n)` takes the first `n` elements (smallest numbers).
   - `.reduce((acc, num) => acc * num, 1)` calculates their product.

4. **Return the result based on comparison** → `"sum"`, `"product"`, or `"same"`.

### **Time Complexity**
- Sorting: **O(n log n)**
- Slicing & Reducing: **O(n)**
- Overall: **O(n log n)** (due to sorting being the dominant factor)  

*/
