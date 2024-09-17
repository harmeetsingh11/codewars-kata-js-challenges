function squareSum(numbers) {
  return numbers.reduce(
    (acc, currentValue) => (acc += Math.pow(currentValue, 2)),
    0
  );
}
