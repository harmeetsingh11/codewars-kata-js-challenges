function numberToPower(number, power) {
  // Start with a result of 1, as any number raised to the power of 0 is 1
  let result = 1;

  // Multiply result by the number, power times
  for (let i = 0; i < power; i++) {
    result *= number;
  }

  return result;
}
