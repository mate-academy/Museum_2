'use strict';

const scrollToTopButton = document.querySelector('.footer__scroll-up');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
