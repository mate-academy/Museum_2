'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const form = document.querySelector('.subscribe__form');
// const inputs = document.querySelectorAll('.subscribe__input');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   inputs.forEach(function(elem)
//   {
//     elem.value = '';
//   });
// });

const form = document.querySelector('subscribe__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
