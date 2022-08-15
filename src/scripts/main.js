'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenuIcon = document.querySelector('.burger-button');
  const languageSelect = document.querySelector('.header__select-language');
  const headerMenu = document.querySelector('.menu');
  const headerMenuLink = document
    .querySelectorAll('.menu__link, .button--menu');
  const mainPageBody = document.querySelector('.page__body');
  const menuContent = document.querySelector('.menu__content');

  burgerMenuEventListners();

  function burgerMenuEventListners() {
    burgerMenuIcon.addEventListener('click', burgerMenuIconClick);

    headerMenuLink.forEach(el =>
      el.addEventListener('click', burgerMenuItemsClick)
    );
  }

  function burgerMenuIconClick() {
    burgerMenuIcon.classList.toggle('burger-button--is-active');
    headerMenu.classList.toggle('menu--is-open');
    menuContent.classList.toggle('menu__content--is-visible');
    mainPageBody.classList.toggle('page__body--with-menu');

    if (window.innerWidth < 640) {
      languageSelect.classList.toggle('header__select-language--is-visible');
    }
  }

  function burgerMenuItemsClick() {
    if (headerMenu.classList.contains('menu--is-open')) {
      burgerMenuIcon.click();
    }
  }

  const form = document.querySelector('.last-section__email-form');

  document.querySelector('#button-follow')
    .addEventListener('click', function(event) {
      event.preventDefault();

      const result = form.reportValidity();

      if (result === true) {
        form.reset();
      }
    }, false);
});
