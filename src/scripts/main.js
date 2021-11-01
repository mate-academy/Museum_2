'use strict';

const menuButton = document.querySelector('.top-action__menu-btn');
const menuPage = document.querySelector('.page__menu');
const menuPageBody = document.querySelector('.page__body');
let menuOpen = false;

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    menuButton.classList.add('top-action__menu-btn--open');
    menuPage.classList.add('page__menu--open');
    menuPageBody.classList.add('page__body--with-menu');
    menuOpen = true;
  } else {
    menuButton.classList.remove('top-action__menu-btn--open');
    menuPage.classList.remove('page__menu--open');
    menuPageBody.classList.remove('page__body--with-menu');
    menuOpen = false;
  }
});
