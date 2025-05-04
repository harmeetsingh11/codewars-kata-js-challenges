function layers(n) {
  // Each layer adds a full square of size (2k-1)^2 where k is the layer number.
  // The maximum number in a k-th layer is (2k - 1)^2.
  // We need the smallest k such that (2k - 1)^2 >= n

  // Solve for k: (2k - 1)^2 >= n
  // => 2k - 1 >= sqrt(n)
  // => k >= (sqrt(n) + 1) / 2
  // We use Math.ceil to round up to the nearest whole layer
  return Math.ceil((Math.sqrt(n) + 1) / 2);
}

console.log(layers(1)); // 1
console.log(layers(5)); // 2
console.log(layers(25)); // 3
console.log(layers(30)); // 4
console.log(layers(50)); // 5

/*
### Why this works:

* Every "layer" forms a square spiral.
* The maximum number at each layer's corner is the square of an odd number: `(2k - 1)^2`.
* By solving the inequality `(2k - 1)^2 >= n`, we determine the minimum `k` (layer) that contains `n`.

This runs in constant time **O(1)** and handles large numbers efficiently.
*/
