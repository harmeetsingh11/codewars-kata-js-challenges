function SeriesSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += 1 / (1 + 3 * (i - 1));
  }
  return result.toFixed(2);
}
