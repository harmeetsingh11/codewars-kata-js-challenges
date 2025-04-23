function alphabetWar(battlefield) {
  // If there are no nuclear strikes, return all letters
  if (!battlefield.includes('#')) return battlefield.replace(/[^a-z]/g, '');

  const survivors = [];
  const shelters = [...battlefield.matchAll(/\[([a-z]*)\]/g)];

  for (let i = 0; i < shelters.length; i++) {
    const [fullMatch, content] = shelters[i];
    const start = shelters[i].index;
    const end = start + fullMatch.length - 1;

    // Find nearest boundaries: beginning or previous shelter, and end or next shelter
    const prevEnd =
      i === 0 ? 0 : shelters[i - 1].index + shelters[i - 1][0].length;
    const nextStart =
      i === shelters.length - 1 ? battlefield.length : shelters[i + 1].index;

    // Slice the area between prev and next shelter to count nuclear strikes
    const areaBetween = battlefield.slice(prevEnd, nextStart);
    const strikeCount = (areaBetween.match(/#/g) || []).length;

    // Only 1 or 0 strike => shelter survives
    if (strikeCount <= 1) survivors.push(content);
  }

  return survivors.join('');
}

/*
- `matchAll(/\[([a-z]*)\]/g)` finds all shelters and their contents.
- For each shelter, we:
  - Determine its bounds.
  - Find how many `#` occur between this shelter and the next/previous one.
- If **2 or more `#` are close**, the shelter is **destroyed**.
- If **0 or 1 `#` is close**, the shelter **survives** and its letters are added to the result.
- Letters outside shelters are ignored if there’s any `#` on the battlefield.
*/
