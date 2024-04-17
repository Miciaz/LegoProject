// script per carosello

/*document.addEventListener("DOMContentLoaded", function () {
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
}*/

const carosello1 = [
  {
    img: "js/assets-caroselli/Dune.png",
    title: "Dune Atreides Royal Ornithopter",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/Stitch.png",
    title: "Stitch",
    prezzo: "£49.99",
  },
  {
    img: "js/assets-caroselli/40677.png",
    title: "Prisoner of Azkaban",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/75375.png",
    title: "Millenium Falcon",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/main3_1.png",
    title: "Talking Sort Hat",
    prezzo: "£89.99",
  },
  {
    img: "js/assets-caroselli/Main3_2.png",
    title: "R2-D2",
    prezzo: "£79.99",
  },
  {
    img: "js/assets-caroselli/76269.png",
    title: "Stark Tower",
    prezzo: "£249.99",
  },
  {
    img: "js/assets-caroselli/76425.png",
    title: "Pivet Drive",
    prezzo: "£49.99",
  },
  {
    img: "js/assets-caroselli/lotus-flowers-product.png",
    title: "Lotus Flowers",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/sunflowers-product.png",
    title: "Sunflowers",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/cherry-blossoms-product.png",
    title: "Cherry Blossoms",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/75376.png",
    title: "Dune Atreides Royal Ornithopter",
    prezzo: "£149.99",
  },
];

const carosello2 = [
  {
    img: "js/assets-caroselli/40677.png",
    title: "Prisoner of Azkaban",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/Dune.png",
    title: "Dune Atreides Royal Ornithopter",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/main3_1.png",
    title: "Talking Sort Hat",
    prezzo: "£89.99",
  },
  {
    img: "js/assets-caroselli/Stitch.png",
    title: "Stitch",
    prezzo: "£49.99",
  },
  {
    img: "js/assets-caroselli/75375.png",
    title: "Millenium Falcon",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/lotus-flowers-product.png",
    title: "Lotus Flowers",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/75376.png",
    title: "Dune Atreides Royal Ornithopter",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/main3_2.png",
    title: "R2-D2",
    prezzo: "£79.99",
  },
  {
    img: "js/assets-caroselli/sunflowers-product.png",
    title: "Sunflowers",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/cherry-blossoms-product.png",
    title: "Cherry Blossoms",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/76425.png",
    title: "Pivet Drive",
    prezzo: "£49.99",
  },
  {
    img: "js/assets-caroselli/76269.png",
    title: "Stark Tower",
    prezzo: "£249.99",
  },
];

const carosello3 = [
  {
    img: "js/assets-caroselli/Stitch.png",
    title: "Stitch",
    prezzo: "£49.99",
  },
  {
    img: "js/assets-caroselli/main3_1.png",
    title: "Talking Sort Hat",
    prezzo: "£89.99",
  },
  {
    img: "js/assets-caroselli/75375.png",
    title: "Millenium Falcon",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/76425.png",
    title: "Pivet Drive",
    prezzo: "£49.99",
  },
  {
    img: "js/assets-caroselli/sunflowers-product.png",
    title: "Sunflowers",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/Dune.png",
    title: "Dune Atreides Royal Ornithopter",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/cherry-blossoms-product.png",
    title: "Cherry Blossoms",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/40677.png",
    title: "Prisoner of Azkaban",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/main3_2.png",
    title: "R2-D2",
    prezzo: "£79.99",
  },
  {
    img: "js/assets-caroselli/lotus-flowers-product.png",
    title: "Lotus Flowers",
    prezzo: "£29.99",
  },
  {
    img: "js/assets-caroselli/75376.png",
    title: "Dune Atreides Royal Ornithopter",
    prezzo: "£149.99",
  },
  {
    img: "js/assets-caroselli/76269.png",
    title: "Stark Tower",
    prezzo: "£249.99",
  },
];

function carouselStructure(array, classContainer) {
  array.forEach((card) => {
    const container = document.querySelector(classContainer);

    container.innerHTML += `
        <li class="carousel-card">
          <div class="product-image-carousel">
            <div class="wishlist-carousel">
              <div class="heart-svg">
                <svg width="53%" heigth="53%" fill="#006db7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                </svg>
                <div class="circle-ctn-heart"></div>
              </div>
            </div> 

            <!--immagine del prodotto-->
            <img class="img-carousel-section3" src=${card.img} alt="dune">
          </div>
                        
          <div class="product-leaf-carousel">
            <!--descrizione del prodotto-->
            <div class="product-name">
              <a class="link-style-section3" href="https://www.lego.com/en-gb/product/dune-atreides-royal-ornithopter-10327" title="Product page">${card.title}<span class="trademark">&trade;</span></a>
            </div>
            <div class="price-product-carousel">
              <p>${card.prezzo}</p>
            </div>

            <!--bottone per mettere prodotto nel carello-->
            <div class="container-button">
              <button class="button-addtoBag">Add to Bag</button>
            </div>
          </div>
        </li>     
  `;
  });
}

carouselStructure(carosello1, ".wrapper-sec3");
carouselStructure(carosello3, ".wrapper-sec5");
function carouselStructureSec2(array, classContainer) {
  array.forEach((card) => {
    const container = document.querySelector(classContainer);

    container.innerHTML += `
        <li class="carousel-card">
        <div class="carousel-card-wrapper">
        <div class="product-image-carousel" id="img-carousel-section4">
          <div class="wishlist-carousel">
            <div class="heart-svg">
              <svg width="53%" heigth="53%" fill="#006db7" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
              <div class="circle-ctn-heart"></div>
            </div>
          </div>
          <!--immagine del prodotto-->
          <img class="img-carousel-section3" src=${card.img} alt="dune">

        </div>
        <div class="product-leaf-carousel" id="leaf-product-section4">
          <!--descrizione del prodotto-->
          <div class="product-name" id="product-name-section4">
            <a class="link-style-section3"
              href="https://www.lego.com/en-gb/product/dune-atreides-royal-ornithopter-10327"
              title="Product page">${card.title}<span
                class="trademark">&trade;</span></a>
          </div>
          <div class="price-product-carousel" id="price-section4">
            <p>${card.prezzo}</p>
          </div>
          <!--bottone per mettere prodotto nel carello-->
          <div class="container-button">
            <button class="button-addtoBag" id="button-section4">Add to Bag</button>
          </div>
        </div>
      </div>
        </li>     
  `;
  });
}

carouselStructureSec2(carosello2, ".wrapper-sec4");

function carouselStructureSec7(array, classContainer) {
  array.forEach((card) => {
    const container = document.querySelector(classContainer);

    container.innerHTML += `
        <li class="carousel-card">
          <div class="product-image-carousel">
            <div class="wishlist-carousel">
              <div class="heart-svg">
                <svg width="53%" heigth="53%" fill="#006db7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                </svg>
                <div class="circle-ctn-heart"></div>
              </div>
            </div> 

            <!--immagine del prodotto-->
            <img class="img-carousel-section3" src=${card.img} alt="dune">
          </div>
                        
          <div class="product-leaf-carousel">
            <!--descrizione del prodotto-->
            <div class="product-name">
              <a class="link-style-section3" href="https://www.lego.com/en-gb/product/dune-atreides-royal-ornithopter-10327" title="Product page">${card.title}<span class="trademark">&trade;</span></a>
            </div>
            <div class="price-product-carousel">
              <p>${card.prezzo}</p>
            </div>

            <!--bottone per mettere prodotto nel carello-->
            <div class="container-button">
              <button class="button-addtoBag">Add to Bag</button>
            </div>
          </div>
        </li>     
  `;
  });
}

carouselStructureSec7(carosello1, ".wrapper-sec7");

// SCRIPT PER FAR SPARIRE LA NAVBAR IN MODALITà MOBILE AL CLICK DEL X-BUTTON
document
  .querySelector(".x-button-mobile")
  .addEventListener("click", function () {
    var navbar = document.querySelector(".navbar-mobile");
    navbar.style.display = "none";
  });

// SCRIPT PER LA SEARCHBOX //
const searchBtn = document.querySelectorAll(".search-logo");
const quitBtn = document.querySelector(".svg-quit");
searchBtn.forEach((searchBtn) => {
  searchBtn.addEventListener("click", () => {
    quitBtn.classList.toggle("active");
    searchBtn.classList.toggle("show");
    searchInput = document.querySelector("#searchbar");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Cerca...");

    searchInput.classList.toggle("active");

    const searchContainer = searchBtn.parentElement;
    searchContainer.appendChild(searchInput);
    const menuSearch = document.querySelectorAll(".menu-search");

    //Vediamo se funziona zio lillo...
    const overlaySearch = document.querySelector(".overlay-search");
    overlaySearch.classList.toggle("show");
  });
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

// SCRIPT PER GESTIRE L'OVERLAY-COOKIE
document.addEventListener("DOMContentLoaded", () => {
  const cookieOverlay = document.querySelector(".cookie-overlay");
  const acceptBtn = document.querySelector(".accept-cookie-btn");
  const necessaryBtn = document.querySelector(".necessary-cookie-btn");

  acceptBtn.addEventListener("click", () => {
    cookieOverlay.style.display = "none";
  });
  necessaryBtn.addEventListener("click", () => {
    cookieOverlay.style.display = "none";
  });
});

//SCRIPT PER LA SIDEBAR SHOP
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay-sidebar");
  const shopButton = document.querySelector(".btn-overlay");
  const xButton = document.querySelector(".x-button-sidebar");
  const sidebar = document.querySelector(".sidebar-shop");

  shopButton.addEventListener("click", function () {
    overlay.style.display = "block";
    sidebar.classList.remove("sidebar-hidden");
    sidebar.classList.add("sidebar-shop-ctn");
  });

  xButton.addEventListener("click", function () {
    overlay.style.display = "none";
    sidebar.classList.remove("sidebar-shop-ctn");
    sidebar.classList.add("sidebar-hidden");
  });
});
