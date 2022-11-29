'use strict';

function openClose(className) {
  const item = document.querySelector(`.${className}`);

  if (item.classList.contains(`${className}--opacity`)) {
    return item.classList.remove(`${className}--opacity`);
  } else if (!item.classList.contains(`${className}--opacity`)) {
    return item.classList.add(`${className}--opacity`);
  }
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
