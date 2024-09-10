class SmallestIntegerFinder {
  findSmallestInt(args) {
    // Use Math.min to find the minimum value in the array
    // The spread operator (...) spreads the array elements so that Math.min can compare each element individually
    return Math.min(...args);
  }
}
