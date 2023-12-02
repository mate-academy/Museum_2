'use strict';

document.getElementById('main-form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    event.stopPropagation();

    const input = document.querySelector('.main__form-input');

    input.value = '';
  });
