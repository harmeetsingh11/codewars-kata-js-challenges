function calculateJourneyCost(journey) {
  let cost = 0;
  let i = 0;

  while (i < journey.length) {
    const item = journey[i];

    if (typeof item === 'string') {
      // Tube ride: always add £2.40
      cost += 2.4;
      i++;
    } else {
      // Bus ride: group up to 2 adjacent buses and count as £1.50
      cost += 1.5;
      i++;

      // If the next item is also a bus, skip it (included in cap)
      if (typeof journey[i] === 'number') i++;
    }
  }

  // Format cost to £x.xx
  return `£${cost.toFixed(2)}`;
}

console.log(calculateJourneyCost(['Piccadilly', 56, 93, 243, 20, 14])); // "£6.90"

/*
### Explanation:

- **Tube (`string`)**: Each tube journey costs **£2.40**.
- **Bus (`number`)**:
  - For **every one or two adjacent buses**, we charge only **£1.50** (capped fare).
- We loop through the journey:
  - If we see a **tube**, we add £2.40.
  - If we see a **bus**, we add £1.50 and skip the next item if it's also a bus (so we don't double charge).
- Finally, format the result as `£x.xx`.
*/
