function billboardCost(name, price = 30) {
  let totalCost = 0;

  // Add the price for each character in the name
  for (let i = 0; i < name.length; i++) {
    totalCost += price; // Simulates multiplication without using "*"
  }
  return totalCost;
}
