'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.footer__arrow a');

  arrow.addEventListener('click', event => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

window.addEventListener('hashchange', () => {
  const pageBody = document.querySelector('.page__body');
  const page = document.querySelector('.page');

  if (window.location.hash === '#menu') {
    pageBody.classList.add('page__body--with-menu');
    page.style.overflowY = 'hidden';
  } else {
    pageBody.classList.remove('page__body--with-menu');
    page.style.overflowY = 'auto';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
});
