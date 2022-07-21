'use strict';

const body = document.querySelector('.page__body');
const form = document.querySelector('.subscribe__form');
const menu = document.querySelector('.menu__overflow');
const headerLenguage = document.querySelector('#header-lenguage');
const menuLenguage = document.querySelector('#menu-lenguage');

function scrollChange() {
  if (window.location.hash === '#menu') {
    body.style.overflow = 'hidden';
    menu.scroll(0, 0);
  }

  if (window.location.hash !== '#menu') {
    body.style.overflow = '';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

headerLenguage.addEventListener('change', () => {
  menuLenguage.selectedIndex = headerLenguage.selectedIndex;
});

menuLenguage.addEventListener('change', () => {
  headerLenguage.selectedIndex = menuLenguage.selectedIndex;
});

window.onhashchange = scrollChange;

scrollChange();
