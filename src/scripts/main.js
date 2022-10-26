'use strict';

document.getElementById(
  'form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.querySelector('#input-email').value = '';
});
