const range = document.getElementById("character-range");
const number = document.getElementById("character-number");
const form = document.getElementById("password-form");
const display = document.getElementById("display-password");


// sync the range and number flow 
range.addEventListener("input", () => {
  number.value = range.value;
});
number.addEventListener("input", () => {
  range.value = number.value;
});



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const length = parseInt(range.value);
  // checks whether selected or not 
  const includeUppercase = document.getElementById("includeuppercase").checked; 
  const includeNumber = document.getElementById("includenumber").checked;
  const includeSymbols = document.getElementById("includesymbols").checked;

  // all characters for password
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?";

  // shuffle characters initially start with lowercase
  let characters = lower;
  if (includeUppercase) characters += upper;
  if (includeNumber) characters += numbers;
  if (includeSymbols) characters += symbols;

  // shuffle characters
  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }

  display.textContent = password;
});




// const random = Math.floor(Math.random() * characters.length);
//     Math.random() generates a random number between 0 (inclusive) and 1 (exclusive) — like 0.7321.
//     Multiplying by characters.length gives you a number between 0 and the last index of the character set.
//     Math.floor() rounds that number down to the nearest integer.
// random = 7 - could mean 7th character in "abcdefghijklmnopqrstuvwxyzABC..."


//  number.addEventListener("input", () => {...})
//     This does the opposite — it listens to the number input box.
//     If the user types a new number, it updates the slider:
//     range.value = number.value;


//  range.addEventListener("input", () => {...})
//     This listens for any change in the range slider.
//     When the user moves the slider, range.value changes.
//     You assign that value to the number input:
//     number.value = range.value;
