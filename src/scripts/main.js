'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('header--with-menu');
  } else {
    document.body.classList.remove('header--with-menu');
  }
});

const myForm = document.querySelector('.news__form');

const sendButton = document.getElementById('clicks');

sendButton.addEventListener('click', function(event) {
  const myEmail = document.getElementById('email');

  if (myEmail && /^[\w-]+@([\w-]+)+[\w-]{2,4}$/g.test(myEmail)) {
    event.preventDefault();
    myForm.reset();
  }
});

myForm.addEventListener('clicks', sendButton);
