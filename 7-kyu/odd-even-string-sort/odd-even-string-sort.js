function sortMyString(s) {
  // Split characters based on even and odd indices and join with a space
  const even = [...s].filter((_, i) => i % 2 === 0).join(''); // Collect even-indexed chars
  const odd = [...s].filter((_, i) => i % 2 !== 0).join(''); // Collect odd-indexed chars
  return `${even} ${odd}`;
}

/* 
Explanation:

Filter Even and Odd Indexed Characters:
We use the filter() function with i % 2 === 0 to select even-indexed characters and i % 2 !== 0 to select odd-indexed characters.
s is spread into an array ([...s]) so we can filter based on indices easily.

Join and Format:
We join the even-indexed and odd-indexed characters separately.
Then, we format the result as even group + " " + odd group by using a template string.
*/
