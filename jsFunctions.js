function handleResponsiveNavBar() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

const myAccount = document.getElementById("nav-bar-acount");

console.log(`myAccount`, myAccount);

console.log(
  `localStorage.getItem('password')`,
  localStorage.getItem("password")
);

myAccount.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    localStorage.getItem("password") != null &&
    localStorage.getItem("passcode") != null
  ) {
    localStorage.getItem("password") === localStorage.getItem("passcode")
      ? (window.location =
          "https://web-programming-sem1-2021.github.io/group-26-HTML-CSS-assignment/homepage/myAccount/my-account.html")
      : {};
  } else {
    window.location = "./myAccount/login.html";
  }
});
