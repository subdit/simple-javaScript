const increaseButtonE1 = document.querySelector('.counter__button--increase');
const counterValueE1 = document.querySelector('.counter__value');

increaseButtonE1.addEventListener('click', function () {
  // Get current value of counter on Click
  const currentValue = counterValueE1.textContent;
  // convert value to number
  const currentValueAsNumber = +currentValue;

  // increment by 1
  const newValue = currentValueAsNumber + 1;
  // set counter element with new value
  counterValueE1.textContent = newValue;
});

// const decreaseButtonE2 = document.querySelector('.counter__button--decrease');
// console.log(decreaseButtonE2);
