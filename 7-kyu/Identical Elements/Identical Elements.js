function haveCommonElement(m, n) {
  // If either array is empty, return false (no common elements possible)
  if (!m.length || !n.length) return false;

  // Convert the smaller array into a Set for efficient lookups
  const set = new Set(m.length < n.length ? m : n);

  // Check if any element in the larger array exists in the Set
  return (m.length < n.length ? n : m).some((num) => set.has(num));
}

console.log(haveCommonElement([1, 2, 3], [4, 5, 6])); // false
console.log(haveCommonElement([1, 2, 3], [3, 4, 5])); // true
console.log(haveCommonElement([], [1, 2, 3])); // false
console.log(haveCommonElement([1, 2, 3], [])); // false
console.log(haveCommonElement([2147483647], [-2147483648])); // false
console.log(haveCommonElement([100000, 200000], [200000, 300000])); // true

/*
### Explanation:
1. **Handle empty arrays**: If either `m` or `n` is empty, return `false` immediately.
2. **Use a Set for efficient lookups**: Convert the smaller array into a `Set` (O(1) average lookup time).
3. **Iterate over the larger array**: Use `.some()` to check if any element exists in the `Set` (O(n) in the worst case).
4. **Optimize performance**: We always create the `Set` from the smaller array to minimize space usage and maximize lookup efficiency.

This approach runs in **O(min(m, n) + max(m, n)) ≈ O(m + n)** time complexity, making it optimal for large inputs. 
*/
