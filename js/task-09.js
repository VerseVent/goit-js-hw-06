const refs = {
  changeColorBtnEl: document.querySelector(".change-color"),
  spanColorEl: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log();
refs.changeColorBtnEl.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  refs.spanColorEl.textContent = randomColor;
  refs.bodyEl.setAttribute("style", `background-color:${randomColor}`);
});
