function isEquableTriangle(a, b, c) {
  // Calculate the semi-perimeter (s) using Heron's formula
  let s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Return true if area equals perimeter, else false
  return area === a + b + c;
}

console.log(isEquableTriangle(5, 12, 13)); // true
console.log(isEquableTriangle(6, 8, 10)); // false
console.log(isEquableTriangle(9, 12, 15)); // true

/*
**Explanation:**
1. **Calculate the semi-perimeter (`s`)**  
   - Using **Heron's formula**, `s = (a + b + c) / 2`
2. **Compute the area of the triangle**  
   - `area = sqrt(s * (s - a) * (s - b) * (s - c))`
3. **Check if area equals perimeter**  
   - If `area === (a + b + c)`, return `true`, else return `false`
*/
