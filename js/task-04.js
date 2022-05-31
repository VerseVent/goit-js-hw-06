const refs = {
  counterEl: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;
const decrementBtn = refs.decrementBtn;
const incrementBtn = refs.incrementBtn;

const handleDecrementAction = decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.counterEl.textContent = counterValue;
});

const handleIncrementAction = incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.counterEl.textContent = counterValue;
});
