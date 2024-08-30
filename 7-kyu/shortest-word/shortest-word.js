function findShort(s) {
  const wordLengths = s.split(' ').map((word) => word.length);
  return Math.min(...wordLengths);
}
