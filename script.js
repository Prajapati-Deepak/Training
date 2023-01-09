const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll(".openModel");
console.log(openModalBtn.entries);
const closeModalBtn = document.querySelector(".btn-close");
const openModal = function () {
    console.log("dkfjadslf");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener("click", openModal);
}
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown",closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
    }
});