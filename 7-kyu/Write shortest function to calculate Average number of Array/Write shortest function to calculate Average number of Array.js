const avg = (a) => a.reduce((s, v) => s + v, 0) / a.length;

console.log(avg([0, 1, 2])); // Output: 1

/*
### 💡 Explanation:
- `a.reduce((s, v) => s + v, 0)` — sums up all elements in the array.
- `/ a.length` — divides the sum by the number of elements to get the average.
- Entire function is under **60 characters**, so well within the 100-char limit.
*/
