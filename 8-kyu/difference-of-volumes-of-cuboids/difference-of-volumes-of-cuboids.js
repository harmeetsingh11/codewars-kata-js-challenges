function findDifference(a, b) {
  return Math.abs(
    a.reduce((prod, num) => num * prod, 1) -
      b.reduce((prod, num) => num * prod, 1)
  );
}
