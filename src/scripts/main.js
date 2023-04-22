'use strict';

const form = document.querySelector('.subscription__form');

function stopRefreshing(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', stopRefreshing);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});
