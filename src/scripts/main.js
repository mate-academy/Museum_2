'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactEmail = document.querySelector('.joining__email');
const contactButton = document.querySelector('.joining__button');
const contactForm = document.querySelector('.joining__form');

contactButton.addEventListener('click', function(event) {
  if (contactEmail.checkValidity()) {
    event.preventDefault();
    contactForm.reset();
  }
});
