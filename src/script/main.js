'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#scroll-up') {
    document.body.classList.add('overflow');
  } else {
    document.body.classList.remove('overflow');
  }
});

window.addEventListener('scroll', function() {
  const scroll = this.document.querySelector('.scroll-up');

  scroll.classList.toggle('scroll-up--show', window.scrollY > 300);
});
