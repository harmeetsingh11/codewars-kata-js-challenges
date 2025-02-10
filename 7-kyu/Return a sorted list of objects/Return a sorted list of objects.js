function sortDescending(list, sortBy) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

const data = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

console.log(sortDescending(data, 'a'));

/*
Explanation:
- The `.sort()` method sorts the array in place.
- The comparison function `(a, b) => b[sortBy] - a[sortBy]`:
  - Subtracts `b[sortBy]` from `a[sortBy]` to ensure **descending order**.
  - Since the values are numbers, subtraction works correctly.
- This solution has a **time complexity of O(n log n)** (due to `.sort()`), which is optimal for sorting. 
*/
