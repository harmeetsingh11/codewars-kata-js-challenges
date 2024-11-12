function rentalCarCost(d) {
  // Calculate the base cost at $40 per day
  let total = d * 40;

  // Apply discount based on the number of days rented
  if (d >= 7) {
    total -= 50; // $50 off for 7 or more days
  } else if (d >= 3) {
    total -= 20; // $20 off for 3-6 days
  }

  return total;
}
