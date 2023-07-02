'use strict';

const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__input');
const form = document.querySelector('.subscription__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

menu.addEventListener('click', menuChecked);

function menuChecked(evt) {
  if (evt.target.className === 'menu__link'
      || evt.target.className === 'button menu__button'
      || evt.target.className === 'logo__image') {
    menuIcon.checked = false;
  }

  if (menuIcon.checked) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}
