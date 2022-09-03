'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const backToTop = document.querySelector('#backToTop');

backToTop.style.display = 'none';

document.querySelector('body').onscroll = function() {
  if (window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
};
