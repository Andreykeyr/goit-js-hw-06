const spanText = document.querySelector('#text');

const inputSizeControl = document.querySelector('#font-size-control');

inputSizeControl.addEventListener('input', event => {
  const fontSize = inputSizeControl.value;
  spanText.style.fontSize = `${fontSize}px`;
});