function deleteNth(arr, n) {
  let freq = {};
  let result = [];
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] <= n) {
      result.push(num);
    }
  }
  return result;
}
