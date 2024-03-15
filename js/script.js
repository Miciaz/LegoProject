// script per carosello

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-card");
  let dots = document.getElementsByClassName("dot");
  const slidesPerPage = 4;
  const totalSlides = slides.length;
  let startIndex = n * slidesPerPage;
  let endIndex = startIndex + slidesPerPage;

  if (endIndex > totalSlides) {
    startIndex = totalSlides - slidesPerPage;
    endIndex = totalSlides;
  }

  if (startIndex < 0) {
    startIndex = 0;
    endIndex = Math.min(slidesPerPage, totalSlides);
  }

  for (i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = startIndex; i < endIndex; i++) {
    slides[i].style.display = "block";
  }

  slideIndex = startIndex / slidesPerPage;

  dots[slideIndex].className += " active";
}