"use strict";

const modal = document.querySelectorAll(".modal-button");
const container = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");

function openModal() {
  container.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  container.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !container.classList.contains("hidden")) {
    closeModal();
  }
});
