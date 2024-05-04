let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.querySelectorAll('img').length;

function showSlide(index) {
    index = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000); // 자동 슬라이드
