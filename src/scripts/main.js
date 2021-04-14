'use strict';

const nav = document.querySelector('.nav');
const icon = document.querySelector('.header__menu-icon');
const mainImg = document.querySelector('.header__img');
const toggler = document.querySelector('#toggler-nav');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  icon.classList.toggle('header__menu-icon--close');
  mainImg.classList.toggle('header__img--hidden');
});
