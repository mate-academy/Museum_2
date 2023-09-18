'use strict';

const scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', function() {
  topFunction();
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
