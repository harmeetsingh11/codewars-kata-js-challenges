function noOdds(values) {
  // Filter out odd numbers by checking if each value is divisible by 2
  return values.filter((num) => num % 2 === 0);
}
