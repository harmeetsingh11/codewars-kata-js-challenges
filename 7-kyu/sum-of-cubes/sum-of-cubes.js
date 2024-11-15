// Solution 1: iterative method
function sumCubes(n) {
  let sum = 0;

  // Loop from 1 to n, adding the cube of each number to sum
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }

  return sum;
}

//   Solution 2: Mathematical Formula
function sumCubes(n) {
  // Use a formula to calculate the sum of cubes from 1 to n
  return ((n * (n + 1)) / 2) ** 2;
}
