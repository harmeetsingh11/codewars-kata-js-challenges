function reverseVowels(s) {
  // Define vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  // Convert string to array for mutability
  let arr = s.split('');
  // Two-pointer approach
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    // Move left pointer to the next vowel
    while (left < right && !vowels.has(arr[left])) left++;
    // Move right pointer to the previous vowel
    while (left < right && !vowels.has(arr[right])) right--;

    // Swap vowels
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move pointers inward
    left++;
    right--;
  }

  // Convert array back to string and return
  return arr.join('');
}

// test cases
console.log(reverseVowels('Hello!')); // "Holle!"
console.log(reverseVowels('Tomatoes')); // "Temotaos"
console.log(reverseVowels('Reverse Vowels In A String')); // "RivArsI Vewols en e Streng"

/* 
### Explanation:
1. **Use a Set for Vowel Lookup** - Improves lookup efficiency (O(1) time complexity).
2. **Convert String to Array** - Since strings are immutable in JavaScript, an array allows easy swapping.
3. **Two-Pointer Approach**:
   - Start with two pointers (`left` and `right`).
   - Move `left` forward until a vowel is found.
   - Move `right` backward until a vowel is found.
   - Swap the vowels at `left` and `right`.
   - Move both pointers inward.
4. **Join the Array Back to a String** - Returns the transformed string.

This ensures an efficient O(n) time complexity with O(n) space usage (due to the array conversion).
*/
