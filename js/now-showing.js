const modal = document.getElementById("popup-modal");
const closeBtn = document.querySelector(".close-button");
const modalTitle = document.getElementById("modal-title");

document.querySelectorAll(".movie-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    modalTitle.innerHTML = `<span class="gradient-text">${title}</span>`;
    modal.style.display = "flex";
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};