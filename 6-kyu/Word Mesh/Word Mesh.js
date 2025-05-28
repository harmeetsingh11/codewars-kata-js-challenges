function wordMesh(words) {
  let result = '';

  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i];
    const b = words[i + 1];
    let mesh = '';

    // Try to find the longest suffix of `a` that matches the prefix of `b`
    for (let j = 1; j <= Math.min(a.length, b.length); j++) {
      if (a.slice(-j) === b.slice(0, j)) {
        mesh = b.slice(0, j); // Save the matching part
      }
    }

    if (!mesh) return 'failed to mesh'; // No overlap found
    result += mesh; // Add mesh to result
  }

  return result;
}

// test cases
console.log(wordMesh(['allow', 'lowering', 'ringmaster', 'terror'])); // "lowringter"
console.log(
  wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory'])
); // "failed to mesh"

/*
### Explanation:

- The loop goes through each **pair of adjacent words**.
- For each pair, we check the **longest possible overlapping** substring where:- 
- * The **suffix of the first word** matches the **prefix of the second**.
- We slice from the end of the first word and the beginning of the second word and compare them.
- If no such overlap is found, we return `"failed to mesh"`.
- Otherwise, we accumulate the matching segments into the result string.
*/
