function runningAverage() {
  let total = 0; // cumulative sum of values
  let count = 0; // count of values seen so far

  // return a closure that captures total and count
  return function (value) {
    total += value; // update total sum
    count++; // increment count
    return +(total / count).toFixed(2); // calculate avg and round to 2 decimals
  };
}

// example
const rAvg = runningAverage();
console.log(rAvg(10)); // 10.0
console.log(rAvg(11)); // 10.5
console.log(rAvg(12)); // 11.0

/*
### Explanation:

* **Closure** is used to keep track of `total` and `count` inside the `runningAverage` function.
* Each time the returned function is called with a number:

  * It updates the `total` and `count`.
  * It returns the **rounded average to 2 decimal places** using `.toFixed(2)` and unary `+` to convert back to number.

This approach is **memory-efficient** (doesn't store all values) and **fast** (constant time update).
*/
