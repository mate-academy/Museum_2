'use strict';

const buttons = document.getElementsByClassName('button');
const subscribeButton = document.getElementById('subscribe__button');

const clickHandler = function(event) {
  // eslint-disable-next-line no-undef
  alert('This button works 😉');
};

subscribeButton.addEventListener('click', (event) => {
  // eslint-disable-next-line no-undef
  alert('You have successfully subscribed to our newsletter 😉');
});

for (const button of buttons) {
  button.addEventListener('click', clickHandler);
}

const showMenu = () => {
  document.getElementById('menu').classList.add('show');

  const body = document.body;

  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};

const closeMenu = () => {
  const body = document.body;
  const scrollY = body.style.top;

  body.style.position = '';
  body.style.top = '';
  body.style.height = '';
  body.style.overflowY = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('menu').classList.remove('show');
};

const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', showMenu);

const menuClose = document.getElementById('menu-close');

menuClose.addEventListener('click', closeMenu);
