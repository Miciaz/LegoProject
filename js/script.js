// script per carosello

document.addEventListener("DOMContentLoaded", function () {
  // Inizializza i caroselli
  initializeCarousel("carousel1");
  initializeCarousel("carousel2");
  initializeCarousel("carousel3");
  initializeCarousel("carousel4");
});

function initializeCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const buttonNext = carousel.querySelector("[data-button-next]");
  const buttonPrev = carousel.querySelector("[data-button-prev]");
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
  buttonNext.addEventListener("click", nextSlide);
  buttonPrev.addEventListener("click", prevSlide);
}

// SCRIPT PER FAR SPARIRE LA NAVBAR IN MODALITà MOBILE AL CLICK DEL X-BUTTON
document
  .querySelector(".x-button-mobile")
  .addEventListener("click", function () {
    var navbar = document.querySelector(".navbar-mobile");
    navbar.style.display = "none";
  });

// SCRIPT PER FAR SI CHE AL CLICK DELL'HAMBUERGER MENU SI APRA UN OVERLAY CON I LINK CHE DESIDERIAMO
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const hamburgerBtn = document.querySelector(".hamburger-btn");

  hamburgerBtn.addEventListener("click", function () {
    overlay.classList.toggle("active");
  });
});

//  SCRIPT PER FAR SI CHE AL CLICK SULL'X-BUTTON DELL'OVERLAY, QUEST'ULTIMA PAGINA SI CHIUDA
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const xBtn = document.querySelector(".x-button-mobile-overlay");

  xBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
});
