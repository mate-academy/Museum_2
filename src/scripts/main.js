'use strict';

const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);
