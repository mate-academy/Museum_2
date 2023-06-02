'use strict';

const frm = document.getElementById('submitForm');

frm.addEventListener('submit', (event) => {
  event.preventDefault();
  frm.reset();
});
