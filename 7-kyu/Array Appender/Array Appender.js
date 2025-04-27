function appendSequences(seq1, seq2) {
  // Use spread operator (...) to concatenate both arrays into a new array
  return [...seq1, ...seq2];
}

console.log(appendSequences(['a', 'b', 'c'], [1, 2, 3])); // ['a', 'b', 'c', 1, 2, 3]
console.log(appendSequences([['x', 'x'], 'B'], ['c', 'D'])); // [['x','x'], 'B', 'c', 'D']

/*
### **Explanation:**
- The **spread operator (`...`)** expands the elements of each array.
- `[...seq1, ...seq2]` creates a new array by *placing all elements of `seq1` first*, followed by *all elements of `seq2`*.
- It **preserves nested arrays** as they are (does not flatten them), which is exactly what we want based on the examples you gave.

✅ **This is the most efficient and clean way** because:
- It operates in **O(n + m)** time complexity (where `n` and `m` are the lengths of the two arrays).
- It creates a **new array** without mutating the original arrays.
*/
