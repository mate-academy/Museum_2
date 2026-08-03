'use strict';

/* global alert */
/* eslint-disable no-console */

const form = document.getElementById('subscribeForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector('input').value;

    console.log(email);
    alert('Дякуємо за підписку!');
  });
}
