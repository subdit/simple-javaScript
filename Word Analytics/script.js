const textareaEl = document.querySelector('.textarea');
const characterNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordNumberEl = document.querySelector('.stat__number--words');

textareaEl.addEventListener('input', function () {
  // get new numbers of the character
  const numbersOfCharacters = textareaEl.value.length;
  const twitterCharacterLeft = 280 - numbersOfCharacters;
  const facebookCharacterLeft = 200 - numbersOfCharacters;
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

  characterNumberEl.textContent = numbersOfCharacters;
  twitterNumberEl.textContent = twitterCharacterLeft;
  facebookNumberEl.textContent = facebookCharacterLeft;
});
