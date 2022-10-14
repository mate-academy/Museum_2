'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();

    return false;
  });
});
