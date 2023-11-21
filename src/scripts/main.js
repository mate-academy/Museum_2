'use strict';

const subscribeForm = document.getElementById('subscribeForm');
const emailField = document.getElementById('email');

subscribeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // const emailValue = emailField.value;

  // console.log('Email:', emailValue);

  emailField.value = '';
});
