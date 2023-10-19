'use strict';

// Button Bac-To-Top
const backtoTop = document.querySelector('.back-top');

window.addEventListener('scroll', function() {
  window.scrollY >= 500
    ? (backtoTop.style.opacity = '1')
    : (backtoTop.style.opacity = '0');
});

backtoTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
