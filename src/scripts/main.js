'use strict';

const form = document.querySelector('.subscribe__form');
const header = document.querySelector('.header');
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > header.offsetHeight) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  window.location.href = '#';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
