'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formSubmit = document.querySelector('#subscribe-form');

formSubmit.addEventListener('submit', formSubmitSuccess, false);

function formSubmitSuccess(event) {
  const warn = 'Дякуємо! Ви успішно підписались на наші новини!<br>';

  document.getElementById('output-box').innerHTML = warn;

  document.getElementById('subscribe-form').reset();

  event.preventDefault();
}

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
