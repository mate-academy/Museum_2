'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactForm = document.querySelector('.subscribe__form');
const contactIntupts = document.querySelectorAll('.subscribe__form--input');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  contactIntupts.forEach(i => {
    i.value = '';
  });
});
