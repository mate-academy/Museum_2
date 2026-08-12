'use strict';

const menu = document.querySelector('.menu');
const openButton = document.querySelector('.header__menu-burger');
const closeButton = document.querySelector('.menu__close-button');
const menuLinks = document.querySelectorAll('.menu__link, .menu__button');

openButton.addEventListener('click', () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page--menu-open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page--menu-open');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    document.body.classList.remove('page--menu-open');
  });
});

function setupLangToggle(buttonSelector, listSelector, openClass) {
  const button = document.querySelector(buttonSelector);
  const list = document.querySelector(listSelector);

  if (!button || !list) {
    return;
  }

  button.addEventListener('click', () => {
    list.classList.toggle(openClass);
    button.setAttribute(
      'aria-expanded',
      list.classList.contains(openClass)
    );
  });
}

setupLangToggle(
  '.menu__lang-button',
  '.menu__lang-list',
  'menu__lang-list--open'
);

setupLangToggle(
  '.header__lang-button',
  '.header__lang-list',
  'header__lang-list--open'
);

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});
