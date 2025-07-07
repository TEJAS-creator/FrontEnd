let btn = document.querySelector('#new-quote');
let quote = document.querySelector('#quote');
let person = document.querySelector('#person');

const quotes = [
  { "quote": "Power comes in response to a need, not a desire.", "person": "Goku (Dragon Ball Z)" },
  { "quote": "I am the hope of the universe!", "person": "Goku (Dragon Ball Z)" },
  { "quote": "I'm not gonna run away, I never go back on my word! That's my nindō: my ninja way!", "person": "Naruto Uzumaki (Naruto)" },
  { "quote": "The pain of being alone is completely out of this world, isn't it?", "person": "Naruto Uzumaki (Naruto)" },
  { "quote": "A lesson you learned from me is worthless if you can’t remember it.", "person": "Kakashi Hatake (Naruto)" },
  { "quote": "In society, those who don't have many abilities tend to complain more.", "person": "Kakashi Hatake (Naruto)" },
  { "quote": "A lesson without pain is meaningless.", "person": "Edward Elric (Fullmetal Alchemist: Brotherhood)" },
  { "quote": "A heart made fullmetal is one that's been through hell and back.", "person": "Edward Elric (Fullmetal Alchemist: Brotherhood)" },
  { "quote": "It's not the face that makes someone a monster; it's the choices they make with their lives.", "person": "Naruto Uzumaki (Naruto)" },
  { "quote": "Those who break the rules are scum, but those who abandon their friends are worse than scum.", "person": "Obito Uchiha (Naruto)" },
  { "quote": "Fear is not evil. It tells you what your weakness is.", "person": "Gildarts Clive (Fairy Tail)" },
  { "quote": "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.", "person": "Roy Mustang (Fullmetal Alchemist: Brotherhood)" },
  { "quote": "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.", "person": "Matsumoto Rangiku (Bleach)" },
  { "quote": "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else.", "person": "Edward Elric (Fullmetal Alchemist: Brotherhood)" },
  { "quote": "Forgetting is like a wound. The wound may heal, but it has already left a scar.", "person": "Monkey D. Luffy (One Piece)" },
  { "quote": "If you don’t take risks, you can’t create a future!", "person": "Monkey D. Luffy (One Piece)" },
  { "quote": "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own.", "person": "Jiraiya (Naruto)" },
  { "quote": "Rejection is a part of any man’s life. If you can’t accept and move past rejection, you’re not a real man.", "person": "Jiraiya (Naruto)" },
  { "quote": "I'm gonna be King of the Pirates!", "person": "Monkey D. Luffy (One Piece)" },
  { "quote": "When do you think people die? When they are shot with a bullet? No! It's when they are forgotten.", "person": "Dr. Hiluluk (One Piece)" }
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
