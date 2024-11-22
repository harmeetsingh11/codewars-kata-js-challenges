function maxProduct(numbers, k) {
  // Sort the array in descending order
  const sorted = numbers.sort((a, b) => b - a);

  // Take the first k elements and calculate their product
  return sorted.slice(0, k).reduce((product, num) => product * num, 1);
}

/* 
Explanation:

Sorting:
The sort function sorts the array in descending order (b - a ensures descending).
This makes the k largest numbers the first k elements in the array.

Slicing:
slice(0, k) extracts the first k elements from the sorted array, which are the k largest numbers.

Product Calculation:
reduce calculates the product of these k numbers.
The initial value of the reduce accumulator is set to 1.

Efficiency:
Sorting: O(nlogn)
Slicing: O(k)
Reducing: O(k)
Total: O(nlogn+k), which is efficient for typical input sizes.
*/
