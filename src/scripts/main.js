'use strict';

const burgerMenu = document.querySelector('.header__burger-menu');
const headerLanguage = document.querySelector('.header__language');
const menu = document.querySelector('.header__hidden-view');
const body = document.body;

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('header__hidden-view--active');

  body.classList.toggle('no-scroll');

  burgerMenu.classList.toggle('header__burger-menu--active');

  headerLanguage.classList.toggle('header__language--active');
});
