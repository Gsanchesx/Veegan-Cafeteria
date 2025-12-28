const Navlinks = document.querySelectorAll(".nav-menu .nav-link"); 
const menuOpenButton = document.querySelector("#menu-open-button"); 
const menuCloseButton = document.querySelector("#menu-close-button"); 

// Abrir menu mobile
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});
// fechar menu mobile
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Fechar menu quando for clicado o link
Navlinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
})

// Inicializando Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 

//   Responsividade
  breakpoints: {
    0:{
        slidesPerView: 1
    }, 
    768:{
        slidesPerView: 2
    }, 
    1024:{
        slidesPerView: 3
    }, 
  }
});