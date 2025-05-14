function countContinuousOnes(arr) {
  const result = [];
  let count = 0;

  for (const num of arr) {
    if (num === 1) {
      count++; // increment count if current number is 1
    } else if (count > 0) {
      result.push(count); // push the count to result when sequence breaks
      count = 0; // reset the count
    }
  }

  // If the array ends with a sequence of 1s, push the final count
  if (count > 0) result.push(count);

  return result;
}

console.log(countContinuousOnes([1, 1, 1, 0, 1])); // [3, 1]
console.log(countContinuousOnes([1, 1, 1, 1, 1])); // [5]
console.log(countContinuousOnes([0, 0, 0, 0, 0])); // []

/*
### Explanation:

* We iterate through the array once (O(n) time).
* `count` keeps track of the current streak of `1`s.
* When we hit a `0`, we store the streak (if any) in `result` and reset the counter.
* At the end, we check if a final streak of `1`s remained unpushed.
*/
