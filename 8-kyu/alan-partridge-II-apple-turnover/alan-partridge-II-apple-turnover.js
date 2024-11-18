function apple(x) {
  // Convert x to a number (handles input as string or number)
  x = Number(x);

  // Check if the square of x is more than 1000
  return x * x > 1000
    ? "It's hotter than the sun!!"
    : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
