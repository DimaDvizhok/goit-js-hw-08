const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', event => {
  const inputValue = event.target.value;
  const trimValue = inputValue.trim();
  let displayName;

  if (trimValue === '') {
    displayName = 'Anonymous';
  } else {
    displayName = trimValue;
  }

  outputElem.textContent = displayName;
});
