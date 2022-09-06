'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const nav = document.querySelector('.menu');
// const button = document.querySelector('.icon--menu');

// button.addEventListener('click', function () {
//   nav.classList.toggle('menu--open');
// });
