// find with HTML class
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input-name");
const displayName = document.querySelector(".display-name");
// strings
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// find value in localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintUsername(username) {
  // put strings in displayName
  displayName.innerText = `Hi ${username}. Good luck!`;
  // remove hidden in displayName classList
  displayName.classList.toggle(HIDDEN_CLASSNAME);
}
function greeting(event) {
  // stop doing defalt action
  event.preventDefault();
  // put hidden in loginForm classList
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  // use loginInput value
  const username = loginInput.value;
  // save in localStorage ("key","value")
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername(username);
}

if (savedUsername === null) {
  // showing loginForm
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  // event function
  loginForm.addEventListener("submit", greeting);
} else {
  // showing displayName
  paintUsername(savedUsername);
}
