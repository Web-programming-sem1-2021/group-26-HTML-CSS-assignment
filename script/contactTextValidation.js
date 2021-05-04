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
  return { checkNumber };
};

console.log("scheduleCheckboxes :>> ", scheduleCheckboxes);

//Contact
contactSubmitButton.addEventListener("click", (e) => {
  const error = document.getElementById("notify");
  const namePattern = /[A-Za-z]{3,}/;
  const phoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
  const emailPattern = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validate = () =>
    !(validateCheckboxes().checkNumber >= 1)
      ? (firstScheduleCheckbox.setCustomValidity("Check atleast 1 checkbox!"),
        firstScheduleCheckbox.reportValidity(),
        Array.from(scheduleCheckboxes).forEach(
          (checkbox) => (checkbox.style.boxShadow = "0 0 10px red !important")
        ),
        console.log("hahaahaa :>> ", validateCheckboxes()))
      : {};

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
    ? (phone.setCustomValidity(""), (phone.style.boxShadow = "none"))
    : (phone.setCustomValidity("Phone number should contains number only!"),
      (phone.style.boxShadow = "0 0 10px red"));
  validate();
  e.preventDefault();
});

//message
const message = document.getElementById("counter-message");
const input = document.querySelector("textarea");
input.addEventListener("input", updateValue);
function updateValue(e) {
  message.style.color = "red";
  let currentCharacters = e.target.value.length;
  let wordLeft50 = 50 - currentCharacters; //0 - 50
  let wordLeft500 = 500 - currentCharacters; // 50 - 500
  let wordOver = currentCharacters - 500; //500 -
  if (!currentCharacters == 0) {
    wordLeft50 <= 50 && wordLeft50 > 0
      ? (message.textContent = `${wordLeft50} is needed to reach the required character number!`)
      : wordLeft500 <= 500 && wordLeft500 > 0
      ? (message.textContent = `You can text ${wordLeft500} more letters!`)
      : (message.textContent = `Deleting ${wordOver} letters is needed!`);
  }
}

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
