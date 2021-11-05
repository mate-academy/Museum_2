'use strict';

const burgerMenu = document.querySelector('.menu');
const headerBtn = document.querySelector('.header__btn');
const navButton = document.querySelector('.btn-toggler');
const navLinks = document.querySelectorAll('.menu__link');

headerBtn.addEventListener('click', () => {
  navButton.classList.toggle('header__btn-toggler--active');
  burgerMenu.classList.toggle('menu--show');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navButton.classList.remove('header__btn-toggler--active');
    burgerMenu.classList.remove('menu--show');
  });
});
