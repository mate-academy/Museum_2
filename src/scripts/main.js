'use strict';

const button = document.getElementById('button');
const inputField = document.getElementById('email');
const form = document.getElementById('form');
const regEx = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
const popUp = document.querySelector('.didgest__popup');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inputField.value !== '' && inputField.value.match(regEx)) {
    button.classList.toggle('button--disabled');
    button.disabled = true;
    inputField.disabled = true;
    popUp.classList.add('didgest__popup--active');
  }
});
