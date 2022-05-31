const validationInputEl = document.querySelector("#validation-input");

let tempLength = 0;

validationInputEl.addEventListener("blur", (event) => {
  tempLength = event.currentTarget.value.length;
  if (tempLength === validationInputEl.dataset.length) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
    return;
  }
  validationInputEl.classList.remove("valid");
  validationInputEl.classList.add("invalid");
});
