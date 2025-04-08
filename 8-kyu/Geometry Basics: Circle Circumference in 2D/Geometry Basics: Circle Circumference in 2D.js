function circumference(circle) {
  // Use Math.PI for π and toFixed(6) to round to 6 decimal places
  return Number((2 * Math.PI * circle.radius).toFixed(6));
}

const circle = {
  center: { x: 0, y: 0 },
  radius: 5,
};

console.log(circumference(circle)); // Output: 31.415927
