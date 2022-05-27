const validationInputEl = document.querySelector("#validation-input");

let tempLength = 0;

validationInputEl.addEventListener("blur", (event) => {
  tempLength = event.currentTarget.value.length;
  console.log(validationInputEl.dataset.length);
  if (tempLength === 6) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
    return;
  }
  validationInputEl.classList.remove("valid");
  validationInputEl.classList.add("invalid");
});
