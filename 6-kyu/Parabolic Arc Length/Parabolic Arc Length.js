function lenCurve(n) {
  // Step size (h) for equal sub-intervals
  const h = 1 / n;
  let length = 0;

  for (let i = 0; i < n; i++) {
    // Current x coordinate
    let x1 = i * h;
    // Next x coordinate
    let x2 = (i + 1) * h;

    // Compute y values using the given function y = x * x
    let y1 = x1 * x1;
    let y2 = x2 * x2;

    // Calculate the segment length using the distance formula
    length += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  return length;
}

/* 
Explanation:
1. We define a step size `h = 1/n` to divide the interval `[0,1]` into `n` equal sub-intervals.
2. We initialize `length` to store the total curve length.
3. We iterate through each sub-interval:
   - Compute the x-coordinates `x1` and `x2`.
   - Compute the corresponding y-coordinates using `y = x * x`.
   - Use the Euclidean distance formula between two points \((x1, y1)\) and \((x2, y2)\):
     \[
     \text{distance} = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}
     \]
   - Accumulate the segment lengths.
4. Return the total approximate curve length.
*/
