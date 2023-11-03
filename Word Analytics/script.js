const textareaEl = document.querySelector('.textarea');
const characterNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordNumberEl = document.querySelector('.stat__number--words');

textareaEl.addEventListener('input', function () {
  // get new numbers of the character
  const numbersOfCharacters = textareaEl.value.length;
  const twitterCharacterLeft = 280 - numbersOfCharacters;
  const facebookCharacterLeft = 2200 - numbersOfCharacters;
  // Set counting new numbers

  characterNumberEl.textContent = numbersOfCharacters;
  twitterNumberEl.textContent = twitterCharacterLeft;
  facebookNumberEl.textContent = facebookCharacterLeft;
});
