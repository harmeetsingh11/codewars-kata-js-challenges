function evaporator(content, evap_per_day, threshold) {
  let days = 0; // Counter for the number of days
  let currentContent = 100; // Start with 100% content

  // Continue until the content goes below the threshold percentage
  while (currentContent > threshold) {
    currentContent -= currentContent * (evap_per_day / 100); // Reduce content by the percentage evaporated each day
    days++; // Increment day count
  }

  return days; // Return the number of days until it's out of use
}
