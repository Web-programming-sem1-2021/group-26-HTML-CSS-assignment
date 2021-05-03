const registerSubmitButton = document.getElementById("registerSubmitButton");
const email = document.getElementById("email-address");
const phone = document.getElementById("phone");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

registerSubmitButton.addEventListener("click", (e) => {
  const namePattern = /[A-Za-z]{3,}/;
  //   const phoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$/im;
  const emailPattern = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //E-mail

  console.log(
    "emailPattern.test(email.value)>> ",
    emailPattern.test(email.value)
  );

  emailPattern.test(email.value)
    ? (email.setCustomValidity("lkjidshfkljashjflkj"),
      email.reportValidity(),
      e.preventDefault())
    : (email.setCustomValidity(
        "Your email must be in a correct form (abc#def@mail.com)"
      ),
      email.reportValidity(),
      e.preventDefault());
  namePattern.test(firstName.value)
    ? (firstName.setCustomValidity(""), e.preventDefault())
    : (firstName.setCustomValidity(
        "Your first name must exceeds 3 characters and contain letters only!"
      ),
      (firstName.style.boxShadow = "0 0 10px red"),
      firstName.reportValidity(),
      e.preventDefault());

  namePattern.test(lastName.value)
    ? (lastName.setCustomValidity(""), e.preventDefault())
    : (lastName.setCustomValidity(
        "Your last name must exceeds 3 characters and contain letters only!"
      ),
      (lastName.style.boxShadow = "0 0 10px red"),
      lastName.reportValidity(),
      e.preventDefault());
});
