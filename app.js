const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input-name");
const displayName = document.querySelector(".display-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintUsername(username) {
  displayName.innerText = `Hi ${username}. You are great!`;
  displayName.classList.toggle(HIDDEN_CLASSNAME);
}

function greeting(event) {
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername(username);
}

if (savedUsername === null) {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", greeting);
} else {
  paintUsername(savedUsername);
}
