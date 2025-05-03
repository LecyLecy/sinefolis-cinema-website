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

const movieDescriptions = {
  "Inside Out": "Eleven-year-old Riley has moved to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.",
  "AD VITAM": "Di dunia di mana manusia tidak menua lagi, seorang detektif menyelidiki serangkaian bunuh diri misterius.",
  "Back In Action": "Pasangan agen rahasia lama kembali untuk misi penuh aksi dan nostalgia.",
  "Demon City": "Kota yang dikuasai oleh kekuatan gelap harus dibersihkan oleh sekelompok pemburu iblis.",
  "Exterritorial": "Misi diplomatik berubah jadi medan perang antar dimensi di zona eksklusif internasional.",
  "Havoc": "Seorang detektif menyusup ke dunia kriminal demi menyelamatkan anak pejabat.",
  "A Minecraft Movie": "Petualangan epik di dunia blok penuh keajaiban dari game Minecraft.",
  "RENNER": "Sebuah kisah tentang pembalasan dendam di dunia balap jalanan ilegal.",
  "Sniper: The Last Stand": "Sniper legendaris kembali dalam misi terakhirnya melawan kartel internasional.",
  "The Rose Of Versailles": "Kisah drama dan romansa di era Revolusi Prancis.",
  "Counter Attack": "Seorang prajurit membalas dendam setelah dikhianati oleh unitnya sendiri.",
  "Bullet Train Explosion": "Ledakan, konspirasi, dan balas dendam di kereta tercepat di dunia."
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".movie-card");
  const modal = document.getElementById("popup-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.querySelector(".modal-content .description");
  const closeBtn = document.querySelector(".close-button");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").textContent.trim();
      modalTitle.innerHTML = `<span class="gradient-text">${title}</span>`;
      modalDescription.textContent = movieDescriptions[title] || "No description available.";
      modal.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});


