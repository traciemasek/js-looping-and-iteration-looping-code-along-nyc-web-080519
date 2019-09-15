// Code your solutions in this file
const writeCards = (names, event) => {
  const thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  };
  return thankYouCards;
};

const countdown = (int) => {
  while (int >= 0) {
    console.log(int);
    int--;
  }
};