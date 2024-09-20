// SOLUTION 1: Iterative approach

function longestConsec(strarr, k) {
  // Check for edge cases:
  // 1. If the array is empty.
  // 2. If the number of consecutive strings (k) is greater than the array length.
  // 3. If k is less than or equal to 0.
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return ''; // Return an empty string if any of the conditions above are true.
  }

  let longest = ''; // Variable to store the longest concatenated string.

  // Loop through the array, but only up to the point where you can still take k consecutive strings.
  // The loop stops at strarr.length - k because we are slicing k elements at a time.
  for (let i = 0; i <= strarr.length - k; i++) {
    // Slice k consecutive strings starting at index 'i' and join them into a single string.
    let currentConcatenation = strarr.slice(i, i + k).join('');

    // If the current concatenated string is longer than the longest found so far, update the longest.
    if (currentConcatenation.length > longest.length) {
      longest = currentConcatenation;
    }
  }

  return longest; // Return the longest concatenated string.
}

// SOLUTION 2: Sliding window approach

function longestConsec(strarr, k) {
  // This approach works by building the first concatenation of k elements and then sliding the window over the array.
  // Instead of recalculating everything from scratch for each step, we adjust the current concatenation.

  const n = strarr.length;

  // Check for the same edge cases as Solution 1.
  if (n === 0 || k > n || k <= 0) {
    return '';
  }

  let longest = ''; // To store the longest concatenated string.
  let currentConcatenation = ''; // To store the current sliding window concatenation.

  // Initialize the first concatenation by adding the first k elements from strarr.
  for (let i = 0; i < k; i++) {
    currentConcatenation += strarr[i];
  }
  longest = currentConcatenation; // Set the longest to the initial concatenation.

  // Slide the window by adding the next string and removing the first string from the window.
  for (let i = k; i < n; i++) {
    // Remove the length of the first element of the previous window and add the new element.
    currentConcatenation =
      currentConcatenation.slice(strarr[i - k].length) + strarr[i];

    // If the new concatenation is longer than the longest, update it.
    if (currentConcatenation.length > longest.length) {
      longest = currentConcatenation;
    }
  }

  return longest; // Return the longest concatenated string found.
}
