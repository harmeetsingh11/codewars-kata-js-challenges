function Xbonacci(signature, n) {
  const x = signature.length; // Length of the signature determines X
  // Continue generating until the sequence reaches n elements
  while (signature.length < n) {
    // Sum the last X elements to calculate the next element
    signature.push(signature.slice(-x).reduce((a, b) => a + b, 0));
  }
  // Return only the first n elements of the sequence
  return signature.slice(0, n);
}

/* 
Approach: Sliding-Window Summation

1. Start with a Signature
The sequence starts with the given signature array, which contains the first X elements.
The X is determined by the length of the signature array (x = signature.length).

2. Iteratively Calculate New Elements
Use a sliding window of the last X elements of the sequence to calculate the next element.
The process is repeated until the sequence has at least n elements.

How the Sliding Window Works:
At each iteration:
Extract the last X elements of the sequence using signature.slice(-x).
Compute their sum using .reduce((a, b) => a + b, 0).
Append the computed sum to the sequence with .push().

Why It's Efficient:
Only the last X elements are accessed at each step, making the operation fast and localized.
The sliding window ensures we do not unnecessarily reprocess the entire sequence.

3. Trim the Sequence to n
If n is smaller than the length of the signature, we slice the sequence to return only the first n elements (signature.slice(0, n)).
This step ensures that the result meets the required length.

Key Concepts Used

Sliding Window Technique
A common approach in algorithms where only a fixed subset of the data is processed at a time (in this case, the last X elements).
This avoids unnecessary computations and keeps the process efficient.

Dynamic Growth
The sequence is dynamically extended until the required length (n) is reached.
Instead of precomputing the entire sequence, the function works incrementally, allowing early termination when n is met.

Examples of Execution

Input: Xbonacci([0, 1], 10)
x = 2 (Fibonacci-like).
Start with [0, 1].
Generate:
1 = 0 + 1 → [0, 1, 1]
2 = 1 + 1 → [0, 1, 1, 2]
3 = 1 + 2 → [0, 1, 1, 2, 3]
Continue until 10 elements.
Return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

Input: Xbonacci([1, 1, 1, 1], 8)
x = 4 (Quadribonacci).
Start with [1, 1, 1, 1].
Generate:
4 = 1 + 1 + 1 + 1 → [1, 1, 1, 1, 4]
7 = 1 + 1 + 1 + 4 → [1, 1, 1, 1, 4, 7]
Continue until 8 elements.
Return [1, 1, 1, 1, 4, 7, 13, 25].

Efficiency
Time Complexity: O(n)
Each iteration involves slicing the last X elements (O(X)) and summing them using .reduce() (O(X)).
Since X is constant (fixed by the signature), the overall complexity is proportional to n.
Space Complexity: O(n)
The space grows linearly with the size of the sequence (up to n elements).
Why This Approach is Concise and Efficient
*/
