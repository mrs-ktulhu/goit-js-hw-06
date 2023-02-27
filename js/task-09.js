function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
};
const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', onChangeColor);