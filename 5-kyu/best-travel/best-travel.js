function chooseBestSum(t, k, ls) {
  let bestSum = null;

  // Helper function to generate combinations of k distances
  function getCombinations(arr, k) {
    if (k === 0) return [[]];
    if (arr.length < k) return [];

    const [first, ...rest] = arr;

    // Recursive combinations: include the first element or exclude it
    const withFirst = getCombinations(rest, k - 1).map((comb) => [
      first,
      ...comb,
    ]);
    const withoutFirst = getCombinations(rest, k);

    return [...withFirst, ...withoutFirst];
  }

  // Generate all combinations of k towns
  const combinations = getCombinations(ls, k);

  // Calculate the sum for each combination and find the maximum sum within limit t
  combinations.forEach((comb) => {
    const sum = comb.reduce((acc, distance) => acc + distance, 0);
    if (sum <= t) bestSum = bestSum === null ? sum : Math.max(bestSum, sum);
  });

  return bestSum; // Returns the highest sum within the limit or null if none found
}

/* 
Code Explanation

Initialize bestSum:
We start by setting bestSum to null. This variable will keep track of the highest sum of distances that is within the limit t (i.e., the maximum distance John is willing to drive).
If no combination of distances meets the criteria, bestSum will remain null, indicating no valid sum was found.

Helper Function getCombinations:
This recursive function generates all combinations of k elements from an array arr.

Base Cases:
If k is 0, we return [[]] because there’s only one way to pick zero items (an empty array).
If the array has fewer than k elements, return [] because it's not possible to pick k items.

Recursive Case:
We split the array into first (the first element) and rest (remaining elements).
Recursively find combinations that include first (reducing k by 1).
Find combinations that exclude first (keeping k the same).
Finally, combine these two results to get all k-element combinations of arr.

Generate All Combinations:
We call getCombinations(ls, k) to generate all possible combinations of k distances from the list ls. Each combination is an array of distances of k towns.

Iterate Through Each Combination:
For each combination, we calculate the total distance (sum) by summing up its elements.

Condition Check:
If sum is within the limit t and is greater than the current bestSum, we update bestSum with this sum.
If bestSum is still null (meaning no valid sum has been found yet), we set bestSum to sum.

Return Result:
Finally, we return bestSum, which will either be the largest valid sum found or null if no such sum exists.

Example Usage
For a call like chooseBestSum(163, 3, [50, 55, 56, 57, 58]), the function will:

Generate all possible combinations of 3 distances.
Find the sums of each combination and keep track of the highest sum within 163.
Return 163 because it’s the highest valid sum that meets John’s distance limit.
In cases where no valid combinations are found, the function will return null, indicating it’s impossible to satisfy the conditions with the given inputs.
*/
