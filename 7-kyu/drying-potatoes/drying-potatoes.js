function potatoes(p0, w0, p1) {
  // Dry matter remains constant before and after drying.
  // Dry matter = (100 - p0)% of w0 (initial weight).
  const dryMatter = (w0 * (100 - p0)) / 100;

  // Final total weight w1 can be calculated such that:
  // dryMatter = (100 - p1)% of w1 (final weight).
  const w1 = dryMatter / ((100 - p1) / 100);

  // Return the truncated (integer) value of the final weight.
  return Math.floor(w1);
}

// Example usage:
console.log(potatoes(99, 100, 98)); // Output: 50

/* 
Explanation:

Understanding the Problem:
The water content percentage decreases, but the dry matter (non-water content) remains constant because water evaporates but dry matter stays unchanged.
We need to calculate the final weight, given the new water percentage.

Steps:

Calculate the dry matter:
dryMatter= ((100−p0)/100)×w0
This represents the weight of the dry matter that never changes.

Rearrange to find the final weight w1 using the dry matter and final water percentage:
dryMatter= ((100−p1)/100)×w1

Solving for w1:
w1= dryMatter/((100−p1)/100)


Efficiency:
The solution involves simple arithmetic operations (multiplication and division) and runs in constant time O(1).

Conciseness:
The code uses minimal variables and directly applies the formula to compute the result.

Output:
Use Math.floor to truncate the result to an integer, as required by the problem.
*/
