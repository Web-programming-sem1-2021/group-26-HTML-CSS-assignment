const loginForm = document.getElementsByClassName("login-form");
const loginSubmitButton = document.getElementById("login-submit");
const userName = document.getElementById("usrname");
const password = document.getElementById("passcode");
console.log(`loginSubmitButton`, loginSubmitButton);

localStorage.setItem("password", "password");

console.log(
  `localStorage.getItem("password")`,
  localStorage.getItem("password")
);

const handleWrongPassword = () => {
  const wrongPasswordStyle = {
    "animation-name": "shake, glow-red",
    "animation-duration": "0.7s, 0.35s",
    "animation-iteration-count": "1, 2",
  };
  const invalidPasswordMessage = "Your password is invalid!";
  const invalidPasswordElement = document.getElementById(
    "wrong-password-message"
  );
  // Object.assign(password.style, wrongPasswordStyle);
  invalidPasswordElement.style.color = "red ";
  invalidPasswordElement.innerHTML = invalidPasswordMessage;
};

const handleLogin = () => {
  if (loginForm != null) {
    loginSubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.getItem("password") === password.value
        ? (localStorage.setItem("email", userName.value),
          localStorage.setItem("passcode", password.value),
          (window.location =
            "https://web-programming-sem1-2021.github.io/group-26-HTML-CSS-assignment/homepage/myAccount/my-account.html"))
        : handleWrongPassword();
    });
  }
};

handleLogin();
