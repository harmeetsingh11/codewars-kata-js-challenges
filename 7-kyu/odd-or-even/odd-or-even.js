function oddOrEven(array) {
  return Math.abs(array.reduce((sum, val) => (sum += val), 0)) % 2 === 0
    ? 'even'
    : 'odd';
}
