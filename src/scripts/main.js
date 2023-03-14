'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
// });

const form = document.querySelector('.subscribe__form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);
