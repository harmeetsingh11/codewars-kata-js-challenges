function grow(x) {
  return x.reduce((prod, val) => (prod *= val), 1);
}
