'use strict';

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  window.scrollTo(0, 0);
});
