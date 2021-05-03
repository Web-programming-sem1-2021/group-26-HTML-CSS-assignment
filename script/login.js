//TODO: Giang

const questions = [5];

let accountNavBarLink = document
  .getElementById("navBarAccount")
  .getAttribute("href");
const loginSubmitButton = document.getElementById("login-submit");
const userName = document.getElementById("usrname")
const password = document.getElementById('passcode')

document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded
  console.log(`object`, accountNavBarLink.slice(accountNavBarLink.length - 10));
});


loginSubmitButton.addEventListener('click')