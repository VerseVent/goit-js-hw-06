const loginFormEl = document.querySelector(".login-form");
const emailInput = document.querySelector('[type="email"]');
const passwordInput = document.querySelector('[type="password"]');

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Все поля должны быть заполнены");
    return;
  }
  const userData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(userData);
  loginFormEl.reset();
});
