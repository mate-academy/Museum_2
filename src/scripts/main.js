'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const form = document.querySelector('.contact-us__form');

// form.addEventListener('submit', onButtonClick);

// function onButtonClick(event) {
//   event.preventDefault();
//   event.target.reset();
// };
