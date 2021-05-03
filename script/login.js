//TODO: Giang

const questions = [5];

const loginForm = document.getElementsByClassName("login-form");
let accountNavBarLink = document
  .getElementById("nav-bar-acount")
  .getAttribute("href");
const loginSubmitButton = document.getElementById("login-submit");
console.log(`loginSubmitButton`, loginSubmitButton);
const userName = document.getElementById("usrname");
const password = document.getElementById("passcode");

localStorage.setItem("userName", "");
localStorage.setItem("password", "password");

document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded
  console.log(`object`, accountNavBarLink.slice(accountNavBarLink.length - 10));
});

console.log(
  `localStorage.getItem("password")`,
  localStorage.getItem("password")
);

console.log(`object`, localStorage.getItem("password") === password.value);

const handleLogin = () =>
  loginForm
    ? loginSubmitButton.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.getItem("password") === password.value
          ? (console.log(
              `object`,
              localStorage.getItem("password") === password.value
            ),
            accountNavBarLink.replace("login.html", "my-account.html"),
            console.log(`accountNavBarLink`, accountNavBarLink))
          : e.preventDefault();
      })
    : e.preventDefault();

document.body.onload = handleLogin();
