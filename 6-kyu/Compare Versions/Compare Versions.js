function compareVersions(v1, v2) {
  // Split versions into arrays of integers
  const v1Parts = v1.split('.').map(Number);
  const v2Parts = v2.split('.').map(Number);

  // Determine the maximum length of both versions
  const length = Math.max(v1Parts.length, v2Parts.length);

  // Compare each sub-version
  for (let i = 0; i < length; i++) {
    const num1 = v1Parts[i] || 0; // Default to 0 if sub-version is missing
    const num2 = v2Parts[i] || 0;

    if (num1 > num2) return true; // v1 is greater
    if (num1 < num2) return false; // v2 is greater
  }

  return true; // Versions are equal
}

console.log(compareVersions('10.10', '10.9')); // true
console.log(compareVersions('10.9', '10.10')); // false
console.log(compareVersions('1.2.3', '1.2')); // true
console.log(compareVersions('1.2', '1.2.3')); // false
console.log(compareVersions('1.2.0', '1.2')); // true

/* 
Explanation:
1. **Split the version strings** into arrays of integers.
2. **Determine the maximum length** between both versions.
3. **Iterate through the versions** and compare each sub-version.
4. **If a sub-version is missing, assume it’s 0**.
5. **Return `true` if v1 is greater or equal** and `false` otherwise.
*/
