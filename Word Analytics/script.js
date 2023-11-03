const textareaEl = document.querySelector('.textarea');
const characterNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordNumberEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
  // Input validation
  if (textareaEl.value.includes('<script>')) {
    alert("You can't use that character!");
    textareaEl.value = textareaEl.value.replace('<script>', '');
  }
  // get new numbers of the character
  let numberOfWords = textareaEl.value.split(' ').length; // in the array of input
  if (textareaEl.value.length === 0) {
    // check the value if = 0;
    numberOfWords = 0;
  }
  const numbersOfCharacters = textareaEl.value.length;
  const twitterCharacterLeft = 280 - numbersOfCharacters;
  const facebookCharacterLeft = 2200 - numbersOfCharacters;
  // Add logic if limit character is excessed
  if (twitterCharacterLeft < 0) {
    twitterNumberEl.classList.add('stat__number--limit');
  } else {
    twitterNumberEl.classList.remove('stat__number--limit'); // to remove  the class other wise it will stay on Red.
  }

  if (twitterCharacterLeft < 0) {
    facebookNumberEl.classList.add('stat__number--limit');
  } else {
    facebookNumberEl.classList.remove('stat__number--limit'); // to remove  the class other wise it will stay on Red.
  }
  // Set counting new numbers
  wordNumberEl.textContent = numberOfWords;
  characterNumberEl.textContent = numbersOfCharacters;
  twitterNumberEl.textContent = twitterCharacterLeft;
  facebookNumberEl.textContent = facebookCharacterLeft;
};
textareaEl.addEventListener('input', inputHandler);
