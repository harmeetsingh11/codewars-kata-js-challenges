function recycle(objects) {
  // Define materials in the required order
  const materials = ['paper', 'glass', 'organic', 'plastic'];

  // Initialize bins as an object with empty arrays
  const bins = materials.reduce((acc, mat) => ({ ...acc, [mat]: [] }), {});

  // Iterate through objects and distribute them into bins
  for (const obj of objects) {
    bins[obj.material].push(obj.type);
    if (obj.secondMaterial) bins[obj.secondMaterial].push(obj.type);
  }

  // Return bins in the required order
  return materials.map((mat) => bins[mat]);
}

const input = [
  { type: 'rotten apples', material: 'organic' },
  {
    type: 'out of date yogurt',
    material: 'organic',
    secondMaterial: 'plastic',
  },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];

console.log(recycle(input));

/* 
Explanation:
1. **Initialize bins**: Create an empty array for each material using `reduce`.
2. **Distribute objects**: Iterate over the input list and push `type` into the appropriate bins.
3. **Return sorted bins**: Use `map` to return bins in the order of `materials`.

This approach ensures efficiency (`O(n)`) and maintains input order while being clean and concise. 
*/
