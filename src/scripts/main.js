'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('#toTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
});
