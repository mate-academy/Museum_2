'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-menu') {
    document.body.classList.add('page__body--with-side-menu');
  } else {
    document.body.classList.remove('page__body--with-side-menu');
  }
});
