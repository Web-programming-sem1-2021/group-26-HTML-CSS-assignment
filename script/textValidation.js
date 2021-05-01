//TODO: Minh

const questions = [4, 6];

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
console.log("phone :>> ", phone);
const submitButton = document.getElementById("submitButton");
const errorElement = document.getElementById("error");

submitButton.addEventListener("click", () => {
  const error = document.getElementById("notify");
  // userName.setCustomValidity("");
  // phone.setCustomValidity("");

  // // const numberRegex=
  // const checkIfNameHasNumber = () =>
  //   Array.from(userName.value).forEach((item) => {
  //     isNaN(parseInt(item))? true
  //   });
  // console.log(
  //   "(userName.innerHTML :>> ",
  //   Array.from(userName.value).forEach((item) =>
  //     typeof parseInt(item) === Number ? true : false
  //   )
  // );
  // console.log(
  //   "    Array.from(userName).map((item) => (isNaN(item) ?) :>> ",
  //   checkIfNameHasNumber
  // );
  userName.patternMismatch
    ? userName.setCustomValidity(
        "Name must exceeds 3 characters and contain letters only!"
      )
    : {};

  !phone.patternMismatch
    ? phone.setCustomValidity("Phone number should contains number only!")
    : {};
});
//  else if (!userName.patternMismatch) {
//   userName.setCustomValidity("Name must exceed 3 characters!");

// if (messages.length > 0) {
//   e.preventDefault();
//   alert(message);
// }

// email
// function ValidateEmail(mail) {
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       myForm.email.value
//     )
//   ) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }
