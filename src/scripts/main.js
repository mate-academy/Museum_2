'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#drop-menu') {
    document.body.classList.add('overflow');
  } else {
    document.body.classList.remove('overflow');
  }
});

window.addEventListener('scroll', function() {
  const scroll = this.document.querySelector('.top-scroll');

  scroll.classList.toggle('top-scroll--off', window.scrollY < 300);
});
