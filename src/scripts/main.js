'use strict';

(function() {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
  });
}());
