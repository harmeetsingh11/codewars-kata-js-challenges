function balanceStatements(orderStr) {
  if (!orderStr.trim()) return 'Buy: 0 Sell: 0';

  const orders = orderStr.split(',');
  let buyTotal = 0,
    sellTotal = 0;
  const badOrders = [];

  for (let rawOrder of orders) {
    const order = rawOrder.trim();
    const parts = order.split(/\s+/); // splits on any whitespace

    // Check for exactly 4 parts: SYMBOL, QTY, PRICE, STATUS
    if (parts.length !== 4) {
      badOrders.push(order + ' ');
      continue;
    }

    const [symbol, qtyStr, priceStr, status] = parts;
    const qty = parseInt(qtyStr, 10);
    const price = parseFloat(priceStr);

    // Validate quantity is int, price has decimal, and status is 'B' or 'S'
    if (
      isNaN(qty) ||
      !Number.isInteger(qty) ||
      isNaN(price) ||
      !priceStr.includes('.') ||
      !['B', 'S'].includes(status)
    ) {
      badOrders.push(order + ' ');
      continue;
    }

    const total = qty * price;
    if (status === 'B') buyTotal += total;
    else sellTotal += total;
  }

  let result = `Buy: ${Math.round(buyTotal)} Sell: ${Math.round(sellTotal)}`;
  if (badOrders.length) {
    result += `; Badly formed ${badOrders.length}: ${badOrders.join(';')};`;
  }

  return result;
}

/* 
## 🧠 **Intuition**

You're given a string of stock orders. Some are **valid**, and some may be **badly formed** (malformed). Your job is to:
1. **Parse and validate** each order.
2. **Calculate totals** for valid Buy (`B`) and Sell (`S`) orders.
3. **List out invalid orders** with their count.
4. Return a formatted result string.

The idea is to **separate concerns**:
- Identify and validate orders.
- Accumulate numeric totals.
- Collect invalid data.

---

## 🛠️ **Approach**

### 1. **Handle Empty Input**
```js
if (!orderStr.trim()) return "Buy: 0 Sell: 0";
```
If the order string is empty or whitespace, there's nothing to process — we return zeroed totals.

---

### 2. **Split the Orders**
```js
const orders = orderStr.split(',');
```
Split the input string into individual orders using commas. This also handles cases where orders are separated with or without spaces.

---

### 3. **Initialize Totals and Bad Orders**
```js
let buyTotal = 0, sellTotal = 0;
const badOrders = [];
```
We’ll accumulate totals for valid orders and store bad ones for reporting.

---

### 4. **Process Each Order**
```js
for (let rawOrder of orders) {
  const order = rawOrder.trim();
  const parts = order.split(/\s+/);
```
Trim and split each order into parts (symbol, quantity, price, status) using regex that handles multiple spaces.

---

### 5. **Validate Structure**
```js
if (parts.length !== 4) {
  badOrders.push(order + " ");
  continue;
}
```
Each order must have exactly **4 parts**. If not, it's malformed.

---

### 6. **Validate Content**
```js
const [symbol, qtyStr, priceStr, status] = parts;
const qty = parseInt(qtyStr, 10);
const price = parseFloat(priceStr);

if (
  isNaN(qty) || !Number.isInteger(qty) ||
  isNaN(price) || !priceStr.includes('.') ||
  !['B', 'S'].includes(status)
) {
  badOrders.push(order + " ");
  continue;
}
```
We validate:
- Quantity must be an **integer**.
- Price must be a **valid float with a decimal point**.
- Status must be **either 'B' (buy)** or **'S' (sell)**.

Invalid ones get added to `badOrders`.

---

### 7. **Accumulate Valid Totals**
```js
const total = qty * price;
if (status === 'B') buyTotal += total;
else sellTotal += total;
```
We calculate and accumulate the total amount for buys and sells.

---

### 8. **Format the Output**
```js
let result = `Buy: ${Math.round(buyTotal)} Sell: ${Math.round(sellTotal)}`;
if (badOrders.length) {
  result += `; Badly formed ${badOrders.length}: ${badOrders.join(';')};`;
}
```
We return the final string, rounding the totals and reporting malformed orders (if any).

---

## ✅ Example

Input:
```
"CLH16.NYM 50 56 S,OWW 1000 11 S,CDE 100 2.6 B"
```

- First order: invalid price (`56` lacks decimal) → ❌
- Second: invalid price (`11`) → ❌
- Third: valid → ✅ Buy: 100 * 2.6 = 260

Output:
```
"Buy: 260 Sell: 11602; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"
```

---

## 🧪 Summary
| Step         | Goal                                       |
|--------------|--------------------------------------------|
| Split Orders | Handle multiple orders                    |
| Trim & Split | Clean individual orders                    |
| Validate     | Ensure proper format (structure + values)  |
| Accumulate   | Add up Buy and Sell totals                 |
| Collect Bad  | Save malformed orders                      |
| Format       | Present totals and errors clearly          |
*/
