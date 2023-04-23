'use strict';
// sync the switches

const headerSwitch = document.querySelector('.header__switch');
const menuSwitch = document.querySelector('.menu__switch');

headerSwitch.addEventListener('change', (event) => {
  menuSwitch.value = event.target.value;
});

menuSwitch.addEventListener('change', (event) => {
  headerSwitch.value = event.target.value;
});

// menu classes added for body and overlay

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// email for reset

const form = document.querySelector('#form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// translations

// changing the language

const select = document.querySelector('select');
const location = window.location;

select.addEventListener('change', changeURLLanguage);

// 1) redirect towards the url incl. the language name

function changeURLLanguage() {
  const lang = select.value;

  location.href = window.location.pathname + '#' + lang;
}
