function countPositivesSumNegatives(input) {
  // Return an empty array if input is null or empty
  if (!input || input.length === 0) return [];

  // Use reduce to count positives and sum negatives
  return input.reduce(
    (acc, num) => {
      // Increment count for positives, add to sum for negatives
      num > 0 ? acc[0]++ : num < 0 && (acc[1] += num);
      return acc; // Return accumulator for the next iteration
    },
    [0, 0] // Initial value of the accumulator: [countPositives, sumNegatives]
  );
}
