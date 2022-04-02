'use strict';

const burger = document.querySelector('.burger__icon');
const burgerBlock = document.querySelector('.burger');
const mainContent = document.querySelector('.main-content');
const nav = document.querySelector('.nav__list');
const inputSubscribe = document.getElementById('input-subscribe');
const subscribeButton = document.querySelector('.subscribe__button');

burger.addEventListener('click', (ev) => {
  burgerBlock.classList.toggle('burger--active');
  burger.classList.toggle('burger__icon--close');
  mainContent.classList.toggle('main-content--disabled');
});

function closeBurgerMenu() {
  burgerBlock.classList.remove('burger--active');
  burger.classList.remove('burger__icon--close');
  mainContent.classList.remove('main-content--disabled');
}

nav.addEventListener('click', (ev) => {
  const navItem = ev.target;

  switch (navItem.dataset.nav) {
    case 'exhibitions':
      closeBurgerMenu();
      break;
    case 'events':
      closeBurgerMenu();
      break;
    case 'news':
      closeBurgerMenu();
      break;
  }
});

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

inputSubscribe.addEventListener('click', (ev) => {
  if (!inputSubscribe.value.match(pattern) || !inputSubscribe.value) {
    inputSubscribe.classList.add('subscribe__email--invalid');
    subscribeButton.setAttribute('disabled', 'disabled');
  } else {
    inputSubscribe.classList.remove('subscribe__email--invalid');
    subscribeButton.removeAttribute('disabled');
  }
});
