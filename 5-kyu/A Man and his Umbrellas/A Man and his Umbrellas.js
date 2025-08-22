function minUmbrellas(weather) {
  let home = 0,
    work = 0; // umbrellas at home and work
  let needed = 0; // minimum total umbrellas required

  // Define rainy weathers
  const rainy = new Set(['rainy', 'thunderstorms']);

  // Iterate over each half-day
  for (let i = 0; i < weather.length; i++) {
    if (!rainy.has(weather[i])) continue; // skip if not raining

    if (i % 2 === 0) {
      // Morning: he starts from home
      if (home > 0) {
        home--; // use umbrella from home
        work++; // leave it at work
      } else {
        needed++; // no umbrella at home, need a new one
        work++; // after journey, umbrella is now at work
      }
    } else {
      // Afternoon: he starts from work
      if (work > 0) {
        work--; // use umbrella from work
        home++; // leave it at home
      } else {
        needed++; // no umbrella at work, need a new one
        home++; // after journey, umbrella is now at home
      }
    }
  }

  return needed;
}
/*
This problem is about simulating umbrella movement between **home** and **work**, and tracking the **minimum number of umbrellas required initially** so that he never gets wet.

---

## ✅ Key Idea:

* Track how many umbrellas are at **home** and at **work**.
* If it’s **raining**, he needs one umbrella at his current location:

  * If available → use it, move it to the other place.
  * If not available → he needs a **new umbrella**, so increase `needed`.
* If it’s **not raining**, nothing happens.

This guarantees the minimal number of umbrellas since we only add a new one when strictly necessary.

---

## ✨ Explanation with Example:

### Input:

```js
["rainy", "clear", "rainy", "cloudy"]
```

* **Day 1 Morning (rainy):**
  No umbrella at home → buy one → `needed=1` → move to work.
  (home=0, work=1)

* **Day 1 Afternoon (clear):**
  No rain → do nothing.
  (home=0, work=1)

* **Day 2 Morning (rainy):**
  No umbrella at home → buy one → `needed=2` → move to work.
  (home=0, work=2)

* **Day 2 Afternoon (cloudy):**
  No rain → do nothing.

✅ Final Answer = `2`

---

## 📌 Complexity:

* **Time:** O(n) → single pass through weather array.
* **Space:** O(1) → only counters used.

---
*/
