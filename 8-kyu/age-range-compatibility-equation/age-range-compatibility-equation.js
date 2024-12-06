function datingRange(age) {
  // If age <= 14, calculate using 10% rule. Use Math.floor to ensure the output is integer.
  if (age <= 14) {
    const min = Math.floor(age - 0.1 * age);
    const max = Math.floor(age + 0.1 * age);
    return `${min}-${max}`;
  }
  // If age > 14, calculate using "half your age plus seven" rule
  const min = Math.floor(age / 2 + 7);
  const max = Math.floor((age - 7) * 2);
  return `${min}-${max}`;
}
