/*================ SHOW MENU ==================*/ 
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*=========== MENU SHOW ==========*/ 
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*=========== MENU HIDDEN ==========*/ 
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*================ REMOVE MENU MOBILE ==================*/ 

/*================ HOME SWIPER ==================*/ 
var homeSswiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*================ DEALS TAB ==================*/ 

/*================ SHOW SCROLL UP ==================*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll')
}

window.addEventListener ('scroll', scrollUp);