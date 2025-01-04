function findScreenSize(width, ratio) {
  // Split the aspect ratio string into width and height components
  const [ratioWidth, ratioHeight] = ratio.split(':').map(Number);

  // Calculate the height using the aspect ratio and truncate any fractional part
  const height = Math.floor((width * ratioHeight) / ratioWidth);

  // Return the screen dimensions in the format "WIDTHxHEIGHT"
  return `${width}x${height}`;
}

// Example
console.log(findScreenSize(1920, '16:9')); // Output: "1920x1080"
console.log(findScreenSize(1280, '4:3')); // Output: "1280x960"

/* 
Explanation:

Splitting the Aspect Ratio:
The split(':') method divides the ratio string (e.g., "16:9") into an array of two strings: ["16", "9"].
map(Number) converts these strings into integers [16, 9].

Calculating Height:
Using the formula for aspect ratio:
height= (width×ratioHeight)/ratioWidth
Math.floor() ensures the height is truncated to an integer by discarding any fractional part.

Formatting the Output:
The result is returned in the format "WIDTHxHEIGHT" using template literals.
*/
