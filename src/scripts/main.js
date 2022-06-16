'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const signUp = document.getElementById('sign-up');

signUp.addEventListener(
  'submit', function(event) {
    event.preventDefault();
    signUp.reset();
  });
