'use strict';

const form = document.querySelector('#formFild');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);
