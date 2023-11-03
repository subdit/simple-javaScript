const textareaEl = document.querySelector('.textarea');

textareaEl.addEventListener('input', function () {
  // determine the characters and numbers
  const getNumberOffCharacters = textareaEl.value.length;
  // set new numbers
  const countCharactersNumberEl = document.querySelector(
    '.stat__number--characters'
  );
  countCharactersNumberEl.textContent = getNumberOffCharacters;
});
