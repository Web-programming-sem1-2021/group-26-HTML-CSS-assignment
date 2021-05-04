//TODO: Giang

const questions = [3];

// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");

// openModalButtons.forEach((button) => {
//   button.addEventListener("mouseover", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.map((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }

const modalOpenImages = document.querySelectorAll(".modal-open");
console.log("modalOpenImages :>> ", modalOpenImages);
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalOpenImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    let modal = image.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => (closeButton = button.closest(".modal").style.display = "none")
  );
});

window.onclick = (e) =>
  e.target.className === "modal" ? (e.target.style.display = "none") : null;
