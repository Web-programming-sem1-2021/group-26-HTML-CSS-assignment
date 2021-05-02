//TODO: Minh

const questions = [4, 6];

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const contactSubmitButton = document.getElementById("contactSubmitButton");
const errorElement = document.getElementById("error");

//Contact
contactSubmitButton.addEventListener("click", () => {
  const error = document.getElementById("notify");
  const namePattern = /[A-Za-z]{3,}/;
  const phoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$/im;
  const emailPattern = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

  //Name
  console.log("object :>> ", namePattern.test(userName.value));
  namePattern.test(userName.value)
    ? userName.setCustomValidity("")
    : userName.setCustomValidity(
        "Name must exceeds 3 characters and contain letters only!"
      );

  //E-mail
  console.log(emailPattern.test(email.value));
  emailPattern.test(email.value)
    ? email.setCustomValidity("")
    : email.setCustomValidity(
        "Your email must be in a correct form (abc#def@mail.com)"
      );
  //Phone number
  console.log(
    " phoneNumberPattern.test(phone.value) :>> ",
    phoneNumberPattern.test(phone.value)
  );
  phoneNumberPattern.test(phone.value)
    ? phone.setCustomValidity("")
    : phone.setCustomValidity("Phone number should contains number only!");

  console.log(namePattern.test(firstName.value));
  namePattern.test(firstName.value)
    ? firstName.setCustomValidity("")
    : firstName.setCustomValidity(
        "Your first name must exceeds 3 characters and contain letters only!"
      );

  namePattern.test(lastName.value)
    ? lastName.setCustomValidity("")
    : lastName.setCustomValidity(
        "Your last name must exceeds 3 characters and contain letters only!"
      );
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
