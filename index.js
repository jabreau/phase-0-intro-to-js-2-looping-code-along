function writeCards(names, birthday) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
  }
  return cards;
}

writeCards(["John", "Bob", "Wilbur"], "birthday");
console.log(cards);

function countDown(number) {
    let num = number;
    while (num >= 0) {
        console.log(num--);
    }
}

countDown(10);