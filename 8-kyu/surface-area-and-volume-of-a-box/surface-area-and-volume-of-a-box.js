function getSize(length, width, height) {
  // Calculate the surface area
  const area = 2 * (length * width + width * height + height * length);

  // Calculate the volume
  const volume = length * width * height;

  // Return both as an array [surface area, volume]
  return [area, volume];
}
