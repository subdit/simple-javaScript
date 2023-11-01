const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');

resetButtonEl.addEventListener('click', function () {
  // set counter value to 0
  counterValueEl.textContent = 0;
});

decreaseButtonEl.addEventListener('click', function () {
  // Get current value of counter on Click
  const currentValue = counterValueEl.textContent;
  // convert value to number
  const currentValueAsNumber = +currentValue;
  // decrement by 1
  const newValue = currentValueAsNumber - 1;
  // set counter element with new value
  counterValueEl.textContent = newValue;
});

increaseButtonEl.addEventListener('click', function () {
  // Get current value of counter on Click
  const currentValue = counterValueEl.textContent;
  // convert value to number
  const currentValueAsNumber = +currentValue;
  // increment by 1
  const newValue = currentValueAsNumber + 1;
  // set counter element with new value
  counterValueEl.textContent = newValue;
});
