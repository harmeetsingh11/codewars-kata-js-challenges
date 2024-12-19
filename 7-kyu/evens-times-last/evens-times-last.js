function evenIndexSum(sequence) {
  // If the sequence is empty, return 0
  if (sequence.length === 0) return 0;

  // Calculate the sum of integers at even indices and multiply by the last integer
  return (
    sequence
      .filter((_, index) => index % 2 === 0) // Select elements at even indices
      .reduce((sum, num) => sum + num, 0) * sequence[sequence.length - 1]
  );
}

/* 
Explanation:

Check if the sequence is empty:
If the array is empty (length === 0), return 0 immediately as there's nothing to process.

Filter elements at even indices:
Use filter to keep only elements at indices where index % 2 === 0.

Sum up the filtered values:
Use reduce to compute the sum of the elements from the filtered array. The reduce function starts with an initial value of 0 and accumulates the sum.

Multiply by the last element:
Multiply the computed sum by the last element in the sequence, accessed via sequence[sequence.length - 1].

This solution is concise and has a linear time complexity O(n), where n is the length of the sequence.
*/
