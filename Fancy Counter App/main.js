const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterTitleEl = document.querySelector('.counter__title');
// reset function
function resetButton() {
  // set counter value to 0
  counterValueEl.textContent = 0;
  // reset background color
  counterEl.classList.remove('counter--limit');
  // reset counter title
  counterTitleEl.textContent = 'Counter App in Javascript';
  // enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
}
resetButtonEl.addEventListener('click', resetButton);

// decrease counter function
function decreamentCounter() {
  // Get current value of counter on Click
  const currentValue = counterValueEl.textContent;
  // convert value to number
  const currentValueAsNumber = +currentValue;
  // decrement by 1
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0) {
    // if it is, force to be 0 instead
    newValue = 0;
  }

  // set counter element with new value
  counterValueEl.textContent = newValue;
  //unfocus (blur) button
  decreaseButtonEl.blur();
}
decreaseButtonEl.addEventListener('click', decreamentCounter);

// increase counter function
function increamentCounter() {
  // Get current value of counter on Click
  const currentValue = counterValueEl.textContent;
  // convert value to number
  const currentValueAsNumber = +currentValue;
  // increment by 1
  let newValue = currentValueAsNumber + 1;
  // set counter element with new value
  if (newValue > 5) {
    // limit the counter to 5
    newValue = 5;
    // Set visual indicator to the users
    counterEl.classList.add('counter--limit');
    // set the title text in innerHTML instead of textContent to manipulate the HTML in js.
    counterTitleEl.innerHTML =
      'Limit to 5! please subscribe for <b>PRO Version</b> ';
    // disable the increase and decrease button
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  counterValueEl.textContent = newValue;
  // unfocus (blur) button
  increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', increamentCounter);
document.addEventListener('keydown', increamentCounter);
