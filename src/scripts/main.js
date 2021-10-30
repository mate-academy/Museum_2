'use strict';

// import navToggler from './navToggler.js';

const burgerMenu = document.querySelector('.nav__burger-menu');
const navButton = document.querySelector('.nav__btn');
const activeButton = document.querySelector('.btn-toggler');

navButton.addEventListener('click', () => {
  activeButton.classList.toggle('btn-toggler--active');
  burgerMenu.classList.toggle('burger-menu--show');
});
