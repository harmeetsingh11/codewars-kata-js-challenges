// SOLUTION 1: using indexOf() array method
function check(a, x) {
  // indexOf() method, which returns the index of the first occurrence of a specified value in an array, or -1 if the value is not found.
  return a.indexOf(x) !== -1;
}

// SOLUTION 2: using includes() array method
function check(a, x) {
  return a.includes(x);
}

// SOLUTION 3: iterative method
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}
