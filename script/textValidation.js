//TODO: Minh

const questions = [4, 6];

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
console.log('phone :>> ', phone);
const submitButton = document.getElementById("submitButton");
console.log('form :>> ', submitButton);
const errorElement = document.getElementById("error");

let messages = [];
//name
submitButton.addEventListener("mouseover", () => {
  if (userName.value === "" || userName.value == null) {
    messages.push("Name is required");
  }
});

if (userName.value.length <= 3) {
  messages.push("Password must be longer than 3 characters");
}

if (messages.length > 0) {
  e.preventDefault();
  alert(message)
}

//email
function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      myForm.email.value
    )
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}













