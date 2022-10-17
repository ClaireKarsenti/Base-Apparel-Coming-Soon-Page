const submit = document.querySelector('.submit');
const errorText = document.querySelector('.error-text');
const errorIcon = document.querySelector('.error-icon');
const form = document.querySelector('form');
const input = document.querySelector('input');
const label = document.querySelector('label');

form.addEventListener('submit', validate);
submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (!isEmail(inputValue)) {
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
    label.style.display = 'block';
    input.style.border = '2px solid red';
  } else {
    error.style.display = 'none';
    label.style.display = 'none';
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(input).toLowerCase()
  );
}
