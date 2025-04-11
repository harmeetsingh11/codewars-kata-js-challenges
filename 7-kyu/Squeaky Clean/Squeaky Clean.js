function squeakyClean(arr) {
  // Filter out falsy values (false, 0, '', null, undefined, NaN)
  // but allow `false` and `NaN` if needed; so we manually exclude only the unwanted ones.
  return arr.filter(
    (item) => item !== '' && item !== 0 && item !== null && item !== undefined
  );
}

var originalArray = ['click1', 'click2', null, '', '', 'submitForm'];
var cleanedArray = squeakyClean(originalArray);
console.log(cleanedArray); // ['click1', 'click2', 'submitForm']

/*
### Explanation
filter() creates a new array with all elements that pass the test.
We exclude only specific values: '', 0, null, and undefined.
These are considered "noise" in the context of this cleanup.
*/
