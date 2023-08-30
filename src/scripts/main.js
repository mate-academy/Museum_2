'use strict';

document.getElementById('form').addEventListener('submit',
  function(e) {
    e.preventDefault();
    document.getElementById('email').value = '';
  }
);
