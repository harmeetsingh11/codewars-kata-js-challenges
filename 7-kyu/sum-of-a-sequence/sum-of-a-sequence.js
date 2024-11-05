function sequenceSum(begin, end, step) {
  // If the starting point is greater than the end, return 0 as there's no valid sequence
  if (begin > end) return 0;

  // Calculate the sum by iterating from begin to end with the given step
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
}

/* 
Explanation:

Check Validity: If begin is greater than end, return 0 because no sequence can be formed.

Iterate with Step: Use a for loop starting from begin, incrementing by step each time, up to end. This ensures we only add values within the defined sequence.

Accumulate Sum: Add each value of i in the sequence to sum.

Return Result: Once the loop completes, sum holds the result, which we return.

This approach is efficient (O(n) time complexity, where n is the number of terms in the sequence), simple, and directly calculates the sequence sum without unnecessary operations.
*/
