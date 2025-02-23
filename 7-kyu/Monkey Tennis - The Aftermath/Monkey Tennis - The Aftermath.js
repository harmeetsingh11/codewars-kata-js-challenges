function sackOfTennisBalls(items) {
  return {
    weight: items.filter((w) => w === 58).length * 58,
  };
}

console.log(sackOfTennisBalls([58, 60, 58, 70, 58])); // { weight: 174 }
console.log(sackOfTennisBalls([60, 65, 70])); // { weight: 0 }
console.log(sackOfTennisBalls([])); // { weight: 0 }

/*
Explanation:
1. **Filter the tennis balls:**  
   - We use `.filter(w => w === 58)` to extract only the tennis balls (which have an exact weight of 58 grams).
2. **Count the number of tennis balls:**  
   - `.length` gives the number of valid tennis balls.
3. **Compute total weight:**  
   - Multiply the count of tennis balls by 58.
4. **Return an object with the total weight.**  

This approach is **efficient** (`O(n)`) and **concise**, utilizing array methods optimally. 
*/
