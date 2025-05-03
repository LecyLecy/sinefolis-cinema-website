const stars = document.querySelectorAll('.star-rating .star');
let selectedRating = 0;

// Star Rating logic
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;
        stars.forEach((s, i) => {
            s.classList.toggle('active', i <= index);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.querySelector(".feedback-form .send-btn");
    const popup = document.getElementById("popup");
    const form = document.querySelector(".feedback-form");
    const footer = document.getElementById("footer-container");
    const heading = document.querySelector("main h1");
    const underline = document.querySelector(".underline-gradient");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const branchSelect = document.getElementById("branch");
    const storyInput = document.getElementById("story");

sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    clearErrors();

    let hasError = false;

    if (nameInput.value.trim() === "") {
        showError("name-error", "Full name is required.");
        hasError = true;
    }

    const email = emailInput.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        showError("email-error", "Enter a valid email");
        hasError = true;
    }

    if (branchSelect.value === "") {
        showError("branch-error", "Please select a cinema branch.");
        hasError = true;
    }

    if (selectedRating === 0) {
        showError("rating-error", "Please select a rating.");
        hasError = true;
    }

    if (storyInput.value.trim() === "") {
        showError("story-error", "Tell us how your experience was.");
        hasError = true;
    }

    if (hasError) return;

    form.style.display = "none";
    footer.style.display = "none";
    heading.style.display = "none";
    underline.style.display = "none";
    popup.classList.remove("hidden");
});

    // Populate dropdown
    const cinemaBranches = [
        "Sinéfolis Athena",
        "Sinéfolis Chicago",
        "Sinéfolis Cineworld",
        "Sinéfolis Complex",
        "Sinéfolis Luminosa",
        "Sinéfolis Pacific Screen",
        "Sinéfolis Vega XXI",
        "Sinéfolis BLACK"
    ];

    cinemaBranches.forEach(branch => {
        const option = document.createElement("option");
        option.value = branch;
        option.textContent = branch;
        branchSelect.appendChild(option);
    });
});

function showError(id, message) {
    const el = document.getElementById(id);
    el.textContent = message;
    el.style.display = "block";
}

// Helper: sembunyikan semua error
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = "";
        el.style.display = "none";
    });
}
