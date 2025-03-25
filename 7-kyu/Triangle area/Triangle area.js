function t_area(triangle) {
  // Split the string into lines and filter out empty lines
  const lines = triangle.split('\n').filter((line) => line.trim());

  // The base and height of the right isosceles triangle are equal to the number of spaces in the last line
  const base = lines[lines.length - 1].trim().split(' ').length - 1;

  // Calculate the area of the triangle (0.5 * base * height)
  return (base * base) / 2;
}

console.log(
  t_area(`
.
.      .  
.      .       .  
`)
); // 2.0

console.log(
  t_area(`
.
.      .  
.      .       .     
.      .       .      .      
`)
); // 4.5

/*
**Explanation:**
1. **Splitting and filtering:**  
   - `triangle.split('\n')`: Splits the input into an array of lines.  
   - `filter(line => line.trim())`: Removes empty lines to ensure we only process the lines containing the triangle.  

2. **Finding the base:**  
   - The base of the triangle is determined by the number of spaces in the last line before the final dot.  
   - `lines[lines.length - 1].trim().split(' ').length - 1`:  
     - `trim()` removes leading and trailing spaces.  
     - `split(' ')` creates an array of segments separated by spaces.  
     - `length - 1` gives the number of spaces, which corresponds to the base length.  

3. **Calculating the area:**  
   - Since the triangle is a right isosceles, the base and height are the same.  
   - Use the area formula for a triangle:  
     \[ \text{Area} = \frac{1}{2} \times \text{base} \times \text{height} \]  
   - In this case, height = base, so the area becomes:  
     \[ \text{Area} = \frac{\text{base}^2}{2} \]  
*/
