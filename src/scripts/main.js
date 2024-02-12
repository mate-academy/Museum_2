'use strict';

function submitForm(event) {
  event.preventDefault();

  const form = event.target;

  form.reset();
}

submitForm();
