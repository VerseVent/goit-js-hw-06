const refs = {
  counterEl: document.querySelector("#value"),
  actionButtonsEl: document.querySelectorAll("#counter button"),
};
let counterValue = 0;
const decrementBtn = refs.actionButtonsEl[0];
const incrementBtn = refs.actionButtonsEl[1];

const handleDecrementAction = decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.counterEl.textContent = counterValue;
});

const handleIncrementAction = incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.counterEl.textContent = counterValue;
});
