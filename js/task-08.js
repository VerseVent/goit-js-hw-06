const loginFormEl = document.querySelector(".login-form");
const inputsEl = document.querySelectorAll("input");

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target[0].value === "" || event.target[1].value === "") {
    alert("Все поля должны быть заполнены");
    return;
  }
  const userData = {
    email: event.target[0].value,
    password: event.target[1].value,
  };
  console.log(userData);
  loginFormEl.reset();
});
