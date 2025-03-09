function sillycase(str) {
  // Find the midpoint, rounding up for odd lengths
  let mid = Math.ceil(str.length / 2);

  // Convert first half to lowercase and second half to uppercase
  return str.slice(0, mid).toLowerCase() + str.slice(mid).toUpperCase();
}

console.log(sillycase('foobar')); // "fooBAR"
console.log(sillycase('brian')); // "briAN"
console.log(sillycase('hello')); // "helLO"
console.log(sillycase('ChatGPT')); // "chaTGPT"

/*
### Explanation:
1. **Find the Midpoint**:  
   - `Math.ceil(str.length / 2)` ensures that in case of an odd length, the extra character is included in the first half.
   
2. **Transform Each Half**:  
   - `str.slice(0, mid).toLowerCase()` takes the first half and converts it to lowercase.
   - `str.slice(mid).toUpperCase()` takes the second half and converts it to uppercase.
   
3. **Concatenate Both Parts**:  
   - Finally, the transformed halves are joined together and returned.

This approach runs in **O(n) time complexity** and is highly efficient.
*/
