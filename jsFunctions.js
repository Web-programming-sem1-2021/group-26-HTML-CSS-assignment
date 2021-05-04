function handleResponsiveNavBar() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

const myAccount = document.getElementById("nav-bar-acount");

console.log(
  `localStorage.getItem('password')`,
  localStorage.getItem("password")
);

myAccount.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.getItem("password") === localStorage.getItem("passcode")
    ? (window.location =
        "https://web-programming-sem1-2021.github.io/group-26-HTML-CSS-assignment/homepage/myAccount/my-account.html")
    : {};
});
