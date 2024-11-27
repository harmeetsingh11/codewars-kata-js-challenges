function movie(card, ticket, perc) {
  // Initialize counters for the number of visits and the total cost of system B
  let n = 0;
  let costB = card;
  let costPerTicketB = ticket * perc;

  // Loop until the rounded-up cost of system B is less than system A
  while (Math.ceil(costB) >= ticket * n) {
    n++; // Increment the visit count
    costB += costPerTicketB; // Add the cost of the next ticket to system B's total
    costPerTicketB *= perc; // Calculate the next ticket's cost based on the percentage
  }

  return n; // Return the number of visits required
}

/* 
Explanation:

Initialization:
n starts at 0 to count the number of cinema visits.
costB starts at the cost of the card (card), since John pays that upfront.
costPerTicketB is the cost of the first ticket for system B, calculated as ticket * perc.

Condition:
The loop runs as long as the rounded-up total cost of system B (Math.ceil(costB)) is not yet cheaper than the total cost of system A (ticket * n).

Inside the Loop:
Increment n to simulate one more visit.
Add the cost of the next ticket to costB.
Update costPerTicketB for the next ticket by multiplying it with perc (to reflect the diminishing cost for each additional ticket in system B).

Return:
The loop exits once system B becomes cheaper, and the function returns n.

Example Runs:

Input: movie(500, 15, 0.9)
After 43 visits:
System A: 15×43=645
System B: ⌈634⌉=634
Output: 43

Input: movie(100, 10, 0.95)
After 24 visits:
System A: 10×24=240
System B: ⌈235⌉=235
Output: 24
*/
