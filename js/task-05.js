const input = document.querySelector('#name-input');
const inputName = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    inputName.textContent = event.currentTarget.value === '' ? "Anonimous" : event.currentTarget.value;
};