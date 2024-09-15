function findEvenIndex(arr) {
  // Loop through each index of the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the sum of elements to the left of the current index `i`
    let leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);

    // Calculate the sum of elements to the right of the current index `i`
    let rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

    // If the left sum equals the right sum, return the current index
    if (leftSum === rightSum) {
      return i;
    }
  }

  // If no index is found where the left and right sums are equal, return -1
  return -1;
}
