'use strict';

const body = document.querySelector('.page__body');
const form = document.querySelector('.subscribe__form');
const email = document.querySelector('#email');
const menu = document.querySelector('.menu__overflow');

function scrollChange() {
  if (window.location.hash === '#menu') {
    body.style.overflow = 'hidden';
    menu.scroll(0, 0);
  }

  if (window.location.hash !== '#menu') {
    body.style.overflow = '';
  }
}

form.addEventListener('submit', () => {
  window.location.hash = '';
  email.value = '';
});

window.onhashchange = scrollChange;

scrollChange();
