function add(...nums) {
  // Use reduce to accumulate the sum, multiplying each number by its 1-based index
  return nums.reduce((sum, num, index) => sum + num * (index + 1), 0);
}

console.log(add()); // 0
console.log(add(3, 4, 5)); // 26
console.log(add(1, 2, 3)); // 14
console.log(add(1, 4, -5, 5)); // 14

/*
### Explanation:
1. **Rest Parameters (`...nums`)**: Collects all arguments into an array.
2. **`reduce` Method**: Iterates over the array, maintaining an accumulated sum.
   - `sum` keeps track of the total sum.
   - `num` is the current element.
   - `index + 1` represents the 1-based index multiplication.
   - `0` is the initial sum value (ensuring it returns `0` for no arguments).
3. **Time Complexity**: \( O(n) \) (linear), iterating once over the input array.  
4. **Edge Case**: When no arguments are passed, `reduce` starts with `0`, returning `0` as required.
*/
