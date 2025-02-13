const som = (x, y) => x + y;
const mini = (x, y) => Math.min(x, y);
const maxi = (x, y) => Math.max(x, y);
const lcmu = (x, y) => Math.abs(x * y) / gcdi(x, y);
const gcdi = (x, y) => (y === 0 ? Math.abs(x) : gcdi(y, x % y));

const oper_array = (fct, arr, init) =>
  arr
    .reduce(
      (acc, curr) => {
        acc.push(fct(acc[acc.length - 1], curr));
        return acc;
      },
      [init]
    )
    .slice(1);

const a = [18, 69, -90, -78, 65, 40];
console.log(oper_array(gcdi, a, a[0])); // [18, 3, 3, 3, 1, 1]
console.log(oper_array(lcmu, a, a[0])); // [18, 414, 2070, 26910, 26910, 107640]
console.log(oper_array(som, a, 0)); // [18, 87, -3, -81, -16, 24]
console.log(oper_array(mini, a, a[0])); // [18, 18, -90, -90, -90, -90]
console.log(oper_array(maxi, a, a[0])); // [18, 69, 69, 69, 69, 69]

/* 
Explanation:
1. **Function Definitions**:
   - `som`: Adds two numbers.
   - `mini`: Finds the minimum of two numbers.
   - `maxi`: Finds the maximum of two numbers.
   - `gcdi`: Finds the greatest common divisor using the Euclidean algorithm.
   - `lcmu`: Finds the least common multiple using `lcm(a, b) = |a * b| / gcd(a, b)`.

2. **`oper_array` function**:
   - Uses `.reduce()` to iterate over the array while accumulating results.
   - Initializes the accumulator with `[init]`.
   - Pushes the computed result of `fct(accumulator_last_value, current_value)` into the accumulator.
   - Returns the result after removing the first `init` element using `.slice(1)`. 
*/
