'use strict';

const langUa = document.querySelector('.dropdown__link--ua');
const langEn = document.querySelector('.dropdown__link--en');
const langElements = document.querySelectorAll('.dropdown__lang');
const form = document.querySelector('.subscribe-us__form-field');

langUa.addEventListener('click', (event) => {
  event.preventDefault();

  langElements.forEach((lang) => {
    lang.innerHTML = 'UA';
  });
});

langEn.addEventListener('click', (event) => {
  event.preventDefault();

  langElements.forEach((lang) => {
    lang.innerHTML = 'EN';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    document.body.classList.add('page__body--with-navigation');
  } else {
    document.body.classList.remove('page__body--with-navigation');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
