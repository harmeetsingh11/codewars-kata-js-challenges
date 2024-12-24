function areaOrPerimeter(length, width) {
  // If length equals width, it's a square, so return area (length * width)
  // Otherwise, it's a rectangle, so return perimeter (2 * (length + width))
  return length === width ? length * width : 2 * (length + width);
}

// Example
console.log(areaOrPerimeter(6, 10)); // Output: 32 (rectangle's perimeter)
console.log(areaOrPerimeter(3, 3)); // Output: 9 (square's area)
