const currentEmail = localStorage.getItem("email");
console.log(`currentEmail`, currentEmail);
// const currentEmailElement = document.createElement(`<p>${currentEmail}</p>`);
document.getElementById("email").innerHTML += `${currentEmail}`;
