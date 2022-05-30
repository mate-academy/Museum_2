'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document
  .getElementsByClassName('footer__button-top')[0]
  .addEventListener(
    'click', () => window.scrollTo({
      top: 0, behavior: 'smooth',
    })
  );

const subscribeForm = document.getElementById('subscribe-form');

subscribeForm.addEventListener('submit', ev => {
  subscribeForm.reset();
  ev.preventDefault();
});
