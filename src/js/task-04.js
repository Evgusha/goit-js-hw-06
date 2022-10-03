let counterValue = 0;
const valueRef = document.querySelector('#value');

const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

const handleClickDecrem = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};
const handleClickIncrem = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};

decrementRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
incrementRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});