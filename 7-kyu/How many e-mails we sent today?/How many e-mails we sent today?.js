/**
 * Calculates the percentage of emails sent compared to the daily limit.
 *
 * @param {number} sent - The number of emails sent today.
 * @param {number} limit - The daily email sending limit (optional).
 * @returns {string} - A percentage string (e.g., "25%") or an appropriate message.
 */
function emailSentPercentage(sent, limit) {
  // Step 1: Set a default value for 'limit' if it is not a valid number (> 0)
  // Handles cases where limit is undefined, null, 0, or invalid
  limit = typeof limit === 'number' && limit > 0 ? limit : 1000;

  // Step 2: If no emails were sent, return this specific message
  if (sent === 0) return 'No e-mails sent';

  // Step 3: If sent emails reach or exceed the limit, return limit message
  if (sent >= limit) return 'Daily limit is reached';

  // Step 4: Calculate integer percentage of emails sent
  const percentage = Math.floor((sent / limit) * 100);

  // Step 5: Return percentage as a string with "%" sign
  return `${percentage}%`;
}

console.log(emailSentPercentage(250, 1000)); // "25%"
console.log(emailSentPercentage(250)); // "25%" (uses default limit 1000)
console.log(emailSentPercentage(0)); // "No e-mails sent"
console.log(emailSentPercentage(1000)); // "Daily limit is reached"
console.log(emailSentPercentage(250, undefined)); // "25%" (default limit)

/* 
### **Explanation**

1. **Parameter Defaulting Robustly**:

   * Instead of relying solely on ES6 default parameters (`limit = 1000`), we explicitly validate and assign a default inside the function.
   * This ensures `limit` is always a **positive number** — even if `undefined`, `null`, or `0` is passed.

2. **Edge Case Handling**:

   * If `sent === 0`, return `"No e-mails sent"` directly.
   * If `sent >= limit`, return `"Daily limit is reached"`.

3. **Percentage Calculation**:

   * `Math.floor((sent / limit) * 100)` gives the **integer** part of the percentage (e.g., 25.7% → 25).
   * Template literal `` `${percentage}%` `` ensures the return value is a string with a `%` sign.

---

### 🧪 Edge Case Coverage

| Sent | Limit | Output                     | Reason                          |
| ---- | ----- | -------------------------- | ------------------------------- |
| 250  | 1000  | `"25%"`                    | Normal case                     |
| 0    | 1000  | `"No e-mails sent"`        | Sent = 0                        |
| 1000 | 1000  | `"Daily limit is reached"` | Limit reached exactly           |
| 1050 | 1000  | `"Daily limit is reached"` | Sent > limit                    |
| 250  | null  | `"25%"`                    | Invalid limit → default to 1000 |
| 250  | 0     | `"25%"`                    | Zero limit → default to 1000    |

*/
