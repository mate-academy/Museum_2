'use strict';

const menuPage = document.querySelector('.page__menu');
const menuButton = document.querySelector('.top-action__menu-btn');
const menuPageBody = document.querySelector('.page__body');
let menuOpen = false;

window.location.hash = '#';

const animContentHeader = document.querySelector('.header__content');
const animImageHeader = document.querySelector('.header__image');
const animImageDscrptn = document.querySelector('.header__image-description');

function animHeader() {
  animContentHeader.classList.add('header__content--anim');
  animImageHeader.classList.add('header__image--anim');
  animImageDscrptn.classList.add('header__image-description--anim');
}

setTimeout(animHeader, 200);

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    window.location.hash = '#menu';
  } else {
    window.location.hash = '#';
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    menuButton.classList.add('top-action__menu-btn--open');
    menuPage.classList.add('page__menu--open');
    menuPageBody.classList.add('page__body--with-menu');
    menuOpen = true;
  } else {
    document.body.classList.remove('page__body--with-menu');
    menuButton.classList.remove('top-action__menu-btn--open');
    menuPage.classList.remove('page__menu--open');
    menuPageBody.classList.remove('page__body--with-menu');
    menuOpen = false;
  }
});
