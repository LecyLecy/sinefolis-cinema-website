function animateCounter(id, target, duration = 1500) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = target / (duration / 30);
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
        element.textContent = target;
        clearInterval(counter);
        } else {
        element.textContent = Math.floor(start);
        }
    }, 30);
}

const cinemaCount = parseInt(document.getElementById("cinemas").textContent, 10);
const screenCount = parseInt(document.getElementById("screens").textContent, 10);

animateCounter("cinemas", cinemaCount);
animateCounter("screens", screenCount);

let currentSlide = 0;

const track = document.getElementById('bannerTrack');
const slides = document.querySelectorAll('.banner-slide');
const indicators = document.getElementById('bannerIndicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalSlides = slides.length;

slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(index));
    indicators.appendChild(dot);
});

updateIndicators();
updateNavButtons();

function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}vw)`;
    updateIndicators();
    updateNavButtons();
}

function moveSlide(direction) {
    goToSlide(currentSlide + direction);
}

function updateIndicators() {
    const dots = indicators.querySelectorAll('span');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function updateNavButtons() {
    if (prevBtn && nextBtn) {
        prevBtn.classList.toggle('hidden', currentSlide === 0);
        nextBtn.classList.toggle('hidden', currentSlide === totalSlides - 1);
    }
}

let startX = 0;
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
track.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) moveSlide(1);
    else if (diff < -50) moveSlide(-1);
});