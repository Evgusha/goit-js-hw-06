
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');

const buttonRef = bodyRef.querySelector('.change-color');

const colorRef = document.querySelector('.color');

const handelChange = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  const currentColor = getRandomHexColor();
  colorRef.textContent = currentColor;
};
buttonRef.addEventListener('click', handelChange);
console.log('click', handelChange);