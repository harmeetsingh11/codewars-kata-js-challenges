const PRESET_COLORS = {
  red: '#FF0000',
  blue: '#0000FF',
  limegreen: '#32CD32',
  // Add more colors as needed...
};

function parseHTMLColor(color) {
  // Convert preset color names to lowercase and map them to their hex value
  if (!color.startsWith('#'))
    color = PRESET_COLORS[color.toLowerCase()] || '#000000';

  // Extract RGB values based on hex length
  let hex = color.slice(1);
  if (hex.length === 3)
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');

  // Convert hex pairs to decimal RGB values
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));

  return { r, g, b };
}

console.log(parseHTMLColor('#80FFA0')); // { r: 128, g: 255, b: 160 }
console.log(parseHTMLColor('#3B7')); // { r: 51,  g: 187, b: 119 }
console.log(parseHTMLColor('LimeGreen')); // { r: 50,  g: 205, b: 50  }

/* 
Explanation:

Handle Preset Colors: If the input is a color name, it is converted to lowercase and mapped to its corresponding hex code.

Extract Hex Code: The # symbol is removed.

Expand Short Hex Format: If the hex code is in 3-digit format, each digit is doubled (e.g., #3B7 → #33BB77).

Convert Hex to RGB: The RGB components are extracted in pairs and converted to decimal values.

Return RGB Object: The function returns an object with r, g, and b properties.
*/
