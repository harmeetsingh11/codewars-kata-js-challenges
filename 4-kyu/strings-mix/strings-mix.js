const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // List of lowercase letters

function mix(s1, s2) {
  return (
    alphabet
      .map((char) => {
        // Count occurrences of each character in s1 and s2
        const s1Count = s1.split('').filter((x) => x === char).length,
          s2Count = s2.split('').filter((x) => x === char).length,
          maxCount = Math.max(s1Count, s2Count); // Find the max occurrence for each character

        // Determine the source with the highest count ('1' for s1, '2' for s2, or '=' if tied)
        return {
          char: char,
          count: maxCount,
          src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '=',
        };
      })
      // Filter out characters with max count <= 1
      .filter((c) => c.count > 1)
      // Sort primarily by count in descending order; secondarily by src and char lexicographically
      .sort(
        (objA, objB) =>
          objB.count - objA.count ||
          (objA.src + objA.char > objB.src + objB.char ? 1 : -1)
      )
      // Format each object as 'src:char*count'
      .map((c) => `${c.src}:${c.char.repeat(c.count)}`)
      // Join with '/' to form the final string
      .join('/')
  );
}

/* 
Explanation

Character Counting:
For each character in the alphabet, it counts occurrences in both s1 and s2.
It keeps the maximum count (maxCount) and determines the source (src) with the highest count ('1' for s1, '2' for s2, or '=' if both counts are the same).

Filtering:
It filters out any character where the maxCount is 1 or less, as these aren't needed in the result.

Sorting:
It sorts first by count in descending order.
For characters with the same count, it sorts lexicographically by src and char combined.

Mapping and Joining:
It maps each object to the format src:char*count.
Finally, it joins all elements with '/' to produce the final string.

*/
