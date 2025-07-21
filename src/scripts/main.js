'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.button--input').addEventListener('click', handleSubmit);

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleSubmit();
  });

  function handleSubmit() {
    const input = document.getElementById('myInput');

    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }
  }
});
