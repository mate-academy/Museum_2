'use strict';

const burgerMenu = document.querySelector('.menu');
const headerBtn = document.querySelector('.header__btn');
const navButton = document.querySelector('.btn-toggler');

headerBtn.addEventListener('click', () => {
  navButton.classList.toggle('header__btn-toggler--active');
  burgerMenu.classList.toggle('menu--show');
});
