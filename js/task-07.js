const fontSizeInputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSizeInputEl.addEventListener("input", (event) => {
  spanEl.setAttribute("style", `font-size:${event.currentTarget.value}px`);
});
