function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpanElem = document.querySelector('.color');
const changeColorButtonElem = document.querySelector('.change-color');
const bodyElem = document.body;

changeColorButtonElem.addEventListener('click', changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  colorSpanElem.textContent = newColor;
}
