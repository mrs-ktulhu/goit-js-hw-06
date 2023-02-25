const input = document.querySelector('#validation-input');
input.addEventListener('blur', onValidInput);

function onValidInput(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }
};