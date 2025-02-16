const sumToBinary = (arr) => {
  // Ensure all elements are integers using Array.every()
  if (!arr.every(Number.isInteger)) return false;

  // Compute the sum of the array and convert it to binary using toString(2)
  return arr.reduce((sum, num) => sum + num, 0).toString(2);
};

console.log(sumToBinary([1, 2])); // "11"
console.log(sumToBinary([1, 'a', 2])); // false
console.log(sumToBinary([])); // "0"

/* 
Explanation:
1. **Validation**: `Array.every(Number.isInteger)` ensures all elements are integers.
2. **Summation**: `reduce((sum, num) => sum + num, 0)` calculates the total sum.
3. **Conversion**: `toString(2)` converts the sum to its binary representation.
4. **Edge Case**: An empty array results in `0.toString(2)`, which correctly returns `"0"`.
*/
