// @param {number} first - The first term of the sequence.
// @param {number} n - The index of the term to find.
// @param {number} c - The common difference.
// @returns {number} The nth term of the sequence.

const nthTerm = (first, n, c) => first + n * c;

console.log(nthTerm(0, 5, 1)); // Output: 5
console.log(nthTerm(2, 4, 3)); // Output: 14
console.log(nthTerm(10, 10, 10)); // Output: 110

/*
Explanation:
- The formula for the \( n \)th term of an arithmetic sequence is:  
  \[
  f(n) = \text{first} + n \times c
  \]
- We directly compute the value without using loops, ensuring efficiency (O(1) time complexity).  
- The function is concise, using an arrow function for brevity.
*/
