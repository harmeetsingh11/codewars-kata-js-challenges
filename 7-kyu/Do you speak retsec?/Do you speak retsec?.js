function reverseByCenter(word) {
  // Find the middle index
  let mid = Math.floor(word.length / 2);

  // If even length, swap the two halves
  // If odd length, keep the middle character in place
  return word.length % 2 === 0
    ? word.slice(mid) + word.slice(0, mid)
    : word.slice(mid + 1) + word[mid] + word.slice(0, mid);
}

// Test cases
console.log(reverseByCenter('secret')); // "retsec"
console.log(reverseByCenter('agent')); // "nteag"
console.log(reverseByCenter('abcd')); // "cdab"
console.log(reverseByCenter('abcde')); // "deabc"

/* 
Explanation:
1. **Find the middle index**:  
   - `Math.floor(word.length / 2)` gives the starting index of the second half.
   
2. **Check if length is even or odd**:  
   - **Even-length word**: Swap the two halves completely (`word.slice(mid) + word.slice(0, mid)`).  
   - **Odd-length word**: Keep the middle character in place and swap around it (`word.slice(mid + 1) + word[mid] + word.slice(0, mid)`).  

This approach is efficient (`O(n)`) and concise, utilizing `slice()` to achieve the transformation in just one return statement. 🚀
*/
