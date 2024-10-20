function defineSuit(card) {
  // Extract the last character of the card string which represents the suit
  const suit = card.slice(-1);

  // Use a switch statement to map the suit symbol to the corresponding suit name
  switch (suit) {
    case '♣':
      return 'clubs';
    case '♦':
      return 'diamonds';
    case '♥':
      return 'hearts';
    case '♠':
      return 'spades';
  }
}
