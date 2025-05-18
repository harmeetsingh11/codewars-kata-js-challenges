function countUniqueSubsets(arr) {
  // Use a Set to remove duplicates and get unique elements
  const uniqueElements = new Set(arr);

  // If there are n unique elements, the number of non-empty subsets = 2^n - 1
  // We subtract 1 to exclude the empty subset
  return Math.pow(2, uniqueElements.size) - 1;
}

console.log(countUniqueSubsets([1, 2, 3, 4])); // 15
console.log(countUniqueSubsets(['a', 'b', 'c', 'd', 'd'])); // 15
console.log(countUniqueSubsets(['a', 'a', 'a'])); // 1
console.log(countUniqueSubsets([])); // 0

/*
### Explanation:

* Duplicates are irrelevant since we're only interested in subsets **without repetition**.
* The number of non-empty subsets of `n` unique elements is `2^n - 1`.
* For example, if `arr = [1, 2, 2, 3]` → unique elements = `{1, 2, 3}` → `2^3 - 1 = 7`.
*/
