//TODO: Minh

const questions = [4, 6];

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const errorElement = document.getElementById('error') 


//name
form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }
});

if (name.value.length <= 3) {
  messages.push("Password must be longer than 3 characters");
}

if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
}
})
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
