//TODO: Minh

const questions = [4, 6];

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const contactSubmitButton = document.getElementById("contactSubmitButton");
const errorElement = document.getElementById("error");
const form = document.querySelector("#sectionForm");
const scheduleCheckboxes = form.querySelectorAll("input[type=checkbox]");
const firstScheduleCheckbox = document.getElementById("day1");

const validateCheckboxes = () => {
  let checkNumber = 0;
  Array.from(scheduleCheckboxes).forEach((checkbox) => {
    checkbox.checked ? (checkNumber += 1) : checkNumber === checkNumber;
  });
  return checkNumber >= 1;
};

console.log("scheduleCheckboxes :>> ", scheduleCheckboxes);

//Contact
contactSubmitButton.addEventListener("click", (e) => {
  const error = document.getElementById("notify");
  const namePattern = /[A-Za-z]{3,}/;
  const phoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$/im;
  const emailPattern = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  !validateCheckboxes()
    ? (firstScheduleCheckbox.setCustomValidity("Check atleast 1 checkbox!"),
      console.log("hahaahaa :>> ", validateCheckboxes()),
      Array.from(scheduleCheckboxes).forEach(
        (checkbox) => (checkbox.style.boxShadow = "0 0 10px red")
      ),
      e.preventDefault())
    : null;

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
    : (userName.setCustomValidity(
        "Name must exceeds 3 characters and contain letters only!"
      ),
      (userName.style.boxShadow = "0 0 10px red"));
  //E-mail
  console.log(emailPattern.test(email.value));
  emailPattern.test(email.value)
    ? email.setCustomValidity("")
    : (email.setCustomValidity(
        "Your email must be in a correct form (abc#def@mail.com)"
      ),
      (email.style.boxShadow = "0 0 10px red"));
  //Phone number
  console.log(
    " phoneNumberPattern.test(phone.value) :>> ",
    phoneNumberPattern.test(phone.value)
  );
  phoneNumberPattern.test(phone.value)
    ? phone.setCustomValidity("")
    : (phone.setCustomValidity("Phone number should contains number only!"),
      (phone.style.boxShadow = "0 0 10px red"));
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
