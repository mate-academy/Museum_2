'use strict';

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const menuLogo = document.querySelector('.menu__logo');
const menuLinks = document.querySelectorAll('.menu__link');
const menuButton = document.querySelector('.menu .button');
const form = document.querySelector('.subscribe__form');
const headerCurrentLocale = header.querySelector('.locale__current');
const headerLocalesList = header.querySelector('.locale__list');
const headerLocalesListItems = header.querySelectorAll('.locale__item');
const menuCurrentLocale = menu.querySelector('.locale__current');
const menuLocalesList = menu.querySelector('.locale__list');
const menuLocalesListItems = menu.querySelectorAll('.locale__item');

const openMenu = () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page__body--with-menu');
};

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--with-menu');
};

const openLocalesList = (localeList, currentLocale) => {
  localeList.classList.toggle('locale__list--open');
  currentLocale.classList.toggle('locale__current--opened-list');
};

const localeChoosingHandler = (event, localeList, currentLocale) => {
  currentLocale.innerText = event.target.innerText;
  localeList.classList.remove('locale__list--open');
};

menuOpener.addEventListener('click', openMenu);
menuCross.addEventListener('click', closeMenu);
menuLogo.addEventListener('click', closeMenu);
menuButton.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

headerCurrentLocale.addEventListener('click', () => {
  openLocalesList(headerLocalesList, headerCurrentLocale);
});

menuCurrentLocale.addEventListener('click', () => {
  openLocalesList(menuLocalesList, menuCurrentLocale);
});

headerLocalesListItems.forEach(item => {
  item.addEventListener('click', event => {
    localeChoosingHandler(event, headerLocalesList, headerCurrentLocale);
  });
});

menuLocalesListItems.forEach(item => {
  item.addEventListener('click', event => {
    localeChoosingHandler(event, menuLocalesList, menuCurrentLocale);
  });
});
