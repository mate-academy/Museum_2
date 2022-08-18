'use strict';

function stopDefAction(event) {
  document.getElementById('signUpForm').reset();
  event.preventDefault();
}

document.getElementById('signUpForm').addEventListener(
  'submit', stopDefAction, false
);
