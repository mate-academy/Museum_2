'use strict';

const form = document.querySelector('.follow__form');
const inputs = document.querySelectorAll('.follow__input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});
