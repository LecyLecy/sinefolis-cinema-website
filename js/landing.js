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
    const totalSlides = track.children.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateNavButtons() {
      prevBtn.classList.toggle('hidden', currentSlide === 0);
      nextBtn.classList.toggle('hidden', currentSlide === totalSlides - 1);
    }

    function moveSlide(direction) {
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateNavButtons();
    }

    updateNavButtons();