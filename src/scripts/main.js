'use strict';

function hideScroll() {
  const body = document.querySelector('.page__body');
  const item = document.querySelector('.menu');

  if (!item.classList.contains('menu--opacity')) {
    body.classList.add('page__body--with-menu');
  } else if (item.classList.contains('menu--opacity')) {
    body.classList.remove('page__body--with-menu');
  }
}

function openClose(className) {
  const item = document.querySelector(`.${className}`);

  if (item.classList.contains(`${className}--opacity`)) {
    item.classList.remove(`${className}--opacity`);
  } else if (!item.classList.contains(`${className}--opacity`)) {
    item.classList.add(`${className}--opacity`);
  }

  hideScroll();
};

document
  .querySelectorAll('.top-actions__icon')
  .forEach((e) => e.addEventListener('click', () => openClose('menu')));

document
  .querySelector('.dropdown__btn')
  .addEventListener('click', () => openClose('dropdown__content'));

document
  .querySelector('.dropdown__btn--menu')
  .addEventListener('click', () => openClose('dropdown__content--menu'));

document
  .querySelectorAll('.menu__link')
  .forEach((e) => e.addEventListener('click', () => openClose('menu')));

document
  .querySelector('.menu__btn')
  .addEventListener('click', () => openClose('menu'));

window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown__btn')) {
    const dropDownContent = document.querySelector('.dropdown__content');

    if (!dropDownContent.classList.contains('.dropdown__content--opacity')) {
      dropDownContent.classList.add('dropdown__content--opacity');
    };
  };

  if (!e.target.matches('.dropdown__btn--menu')) {
    const dropDownContent = document.querySelector('.dropdown__content--menu');

    if (!dropDownContent
      .classList.contains('.dropdown__content--menu--opacity')) {
      dropDownContent.classList.add('dropdown__content--menu--opacity');
    };
  };
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
