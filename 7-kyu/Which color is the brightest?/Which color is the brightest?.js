function brightest(colors) {
  // Helper to compute V = max(R, G, B) from hex color string
  const getBrightness = (hex) => {
    // Convert R, G, B hex parts to integers
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    // Return the brightest component
    return Math.max(r, g, b);
  };

  // Use reduce to find the color with the highest brightness (max V)
  return colors
    .reduce((brightest, curr) =>
      getBrightness(curr) > getBrightness(brightest) ? curr : brightest
    )
    .toUpperCase(); // Ensure uppercase output
}

console.log(brightest(['#001000', '#000000'])); // "#001000"
console.log(brightest(['#ABCDEF', '#123456'])); // "#ABCDEF"
console.log(brightest(['#00FF00', '#FFFF00', '#01130F'])); // "#00FF00"

/*
### Explanation:
- **`parseInt(hex.slice(1, 3), 16)`** extracts and converts the red component.
- Same for green and blue using `.slice(3, 5)` and `.slice(5, 7)`.
- **`Math.max(r, g, b)`** gets the HSV Value (V).
- **`Array.prototype.reduce`** is used to traverse the list and always keep the color with the highest `V`.
- `toUpperCase()` ensures the output is in uppercase format as required.
*/
