'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const arrow = document.querySelector('.footer__arrow a');

arrow.addEventListener('click', event => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
