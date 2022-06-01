const refs = {
  controlButtonsEl: document.querySelectorAll("button"),
  createBtnEl: document.querySelector("[data-create]"),
  removeBtnEl: document.querySelector("[data-destroy]"),
  boxesContainerEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
};

let basicValue = 30;

refs.removeBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

refs.createBtnEl.addEventListener("click", () => {
  let amountOfDivs = Number(refs.inputEl.value);
  createBoxes(amountOfDivs);
});

function createBoxes(amount) {
  const elements = [];
  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");
    divEl.setAttribute(
      "style",
      `width:${basicValue}px;height:${basicValue}px;background-color:${getRandomHexColor()};`
    );
    elements.push(divEl);
    basicValue += 10;
  }
  refs.boxesContainerEl.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  refs.boxesContainerEl.innerHTML = "";
}
