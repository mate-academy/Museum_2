'use strict';

const scrollBtn = document.querySelector('#top');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
