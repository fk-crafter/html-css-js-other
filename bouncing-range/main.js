const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');

rangeInput.addEventListener('input', updateValue);

function updateValue() {
  rangeValue.textContent = rangeInput.value;
}

rangeInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
    rangeInput.stepUp();
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
    rangeInput.stepDown();
  }
});
