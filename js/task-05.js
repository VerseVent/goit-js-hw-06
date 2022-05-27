const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

const handleInputEl = refs.inputEl.addEventListener("input", (event) => {
  refs.outputEl.textContent = event.currentTarget.value;
  if (refs.outputEl.textContent === "") {
    refs.outputEl.textContent = "Anonymous";
  }
});
