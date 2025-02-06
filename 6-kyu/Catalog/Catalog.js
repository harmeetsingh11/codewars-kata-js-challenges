function catalog(s, article) {
  // Match all product entries in the catalog using regex
  const matches = [
    ...s.matchAll(
      /<prod><name>(.*?)<\/name><prx>(.*?)<\/prx><qty>(.*?)<\/qty><\/prod>/g
    ),
  ];

  // Filter and map relevant products to formatted strings
  const result = matches
    .filter(([_, name]) => name.includes(article)) // Find products containing the article
    .map(([_, name, prx, qty]) => `${name} > prx: $${prx} qty: ${qty}`) // Format output
    .join('\r\n'); // Use '\r\n' for Windows compatibility

  return result || 'Nothing'; // Return results or "Nothing" if no match
}

// Example
const catalogData = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>`;

console.log(catalog(catalogData, 'saw'));

/* 
Explanation:
1. **Regex Matching:**  
   - Extracts product details (`name`, `prx`, `qty`) from `<prod>` entries.
   
2. **Filtering & Formatting:**  
   - Filters products where `name` contains the given `article`.
   - Formats them into `"name > prx: $price qty: quantity"`.

3. **Joining Results:**  
   - Joins results using `\r\n` for proper formatting with windows compatibility.
   - Returns `"Nothing"` if no match is found.
*/
