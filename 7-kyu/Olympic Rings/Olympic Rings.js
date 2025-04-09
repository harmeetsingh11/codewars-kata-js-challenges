function olympicRingScore(str) {
  // Map characters to their ring count
  const ringMap = {
    A: 1,
    a: 1,
    b: 1,
    d: 1,
    D: 1,
    e: 1,
    g: 1,
    o: 1,
    O: 1,
    p: 1,
    P: 1,
    q: 1,
    Q: 1,
    R: 1,
    B: 2, // only letter with 2 rings
  };

  // Total all rings found in the string
  const totalRings = [...str].reduce((sum, ch) => sum + (ringMap[ch] || 0), 0);

  // Score is half the total rings, rounded down
  const score = Math.floor(totalRings / 2);

  // Return medal based on score
  return score <= 1
    ? 'Not even a medal!'
    : score === 2
    ? 'Bronze!'
    : score === 3
    ? 'Silver!'
    : 'Gold!';
}

console.log(olympicRingScore('oyPjnngQYqtlBuD')); // Gold!
console.log(olympicRingScore('Hello World')); // Silver!
console.log(olympicRingScore('cat')); // Not even a medal!
