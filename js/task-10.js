const refs = {
  controlButtonsEl: document.querySelectorAll("button"),
  createBtnEl: document.querySelector("[data-create]"),
  removeBtnEl: document.querySelector("[data-destroy]"),
  boxesContainerEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
};

refs.createBtnEl.addEventListener("click", () => {
  let amountOfDivs = Number(refs.inputEl.value);
  createBoxes(amountOfDivs);
});

refs.removeBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const elements = [];
  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");
    divEl.setAttribute(
      "style",
      `width:${10 * i}px;height:${
        10 * 1
      }px;background-color:${getRandomHexColor()};`
    );
    elements.push(divEl);
  }
  refs.boxesContainerEl.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.boxesContainerEl.innerHTML = "";
}
