// script per carosello

document.addEventListener('DOMContentLoaded', function() {
  // Inizializza i caroselli
  initializeCarousel('carousel1');
  initializeCarousel('carousel2');
  initializeCarousel('carousel3');
  initializeCarousel('carousel4');
});

function initializeCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const buttonNext = carousel.querySelector('[data-button-next]');
  const buttonPrev = carousel.querySelector('[data-button-prev]');
  let slideIndex = 0;

  function showSlides() {
    const slides = carousel.querySelectorAll(".carousel-card");
    const totalSlides = slides.length;
    const slidesPerPage = 4;
    const maxIndex = Math.ceil(totalSlides / slidesPerPage) - 1;

    slideIndex = Math.min(maxIndex, Math.max(0, slideIndex)); // Limita slideIndex tra 0 e maxIndex

    const startIndex = slideIndex * slidesPerPage;
    const endIndex = Math.min(totalSlides, startIndex + slidesPerPage);

    slides.forEach((slide, index) => {
      slide.style.display =
        index >= startIndex && index < endIndex ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex++;
    showSlides();
  }

  function prevSlide() {
    slideIndex--;
    showSlides();
  }

  showSlides(); // Mostra le slide iniziali
  buttonNext.addEventListener('click', nextSlide);
  buttonPrev.addEventListener('click', prevSlide);
}
