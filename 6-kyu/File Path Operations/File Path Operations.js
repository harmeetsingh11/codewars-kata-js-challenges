// FileMaster class to parse file paths without external libraries
class FileMaster {
  constructor(filepath) {
    this.filepath = filepath;
  }

  // Get file extension (text after the last dot)
  extension() {
    return this.filepath.split('.').pop();
  }

  // Get file name without extension
  filename() {
    const parts = this.filepath.split('/');
    const lastPart = parts.pop(); // e.g. "house.png"
    return lastPart.split('.').slice(0, -1).join('.'); // handle filenames with multiple dots
  }

  // Get directory path (everything before the file name)
  dirpath() {
    return this.filepath.substring(0, this.filepath.lastIndexOf('/') + 1);
  }
}

// Example usage:
const fm = new FileMaster('/Users/person1/Pictures/house.png');
console.log(fm.extension()); // 'png'
console.log(fm.filename()); // 'house'
console.log(fm.dirpath()); // '/Users/person1/Pictures/'

/*
### 🔎 Explanation

1. **extension()**

   * Splits the string by `"."` and takes the last part using `.pop()`.
   * Example: `"house.png"` → `["house","png"]` → `"png"`.

2. **filename()**

   * Splits the path by `"/"`, takes the last segment (`"house.png"`).
   * Splits by `"."` and removes the last part (extension).
   * Joins back in case filename has multiple dots (e.g., `"archive.tar.gz"` → `"archive.tar"`).

3. **dirpath()**

   * Uses `lastIndexOf("/")` to find the last slash.
   * Returns substring up to (and including) that slash.
   * Example: `"/Users/person1/Pictures/house.png"` → `"/Users/person1/Pictures/"`.

---

✅ **Efficiency**:

* String operations are O(n), minimal overhead.
* No regex, no external libraries.
* Handles filenames with multiple dots properly.
*/
