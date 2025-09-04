'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');
const languageListItems = document.querySelectorAll('.language-list__item');

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('dropdown--active');
  }
});

languageListItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedLanguage = item.textContent.trim();

    trigger.textContent = selectedLanguage;
    dropdown.classList.remove('dropdown--active');
  });
});

const body = document.querySelector('body');
const menu = document.querySelector('.page__menu');
const openMenuButton = document.querySelector('.icon--menu');
const closeMenuButton = document.querySelector('.icon--close');

function openMenu() {
  menu.classList.add('page__menu--open');
  body.classList.add('menu-lock');
}

function closeMenu() {
  menu.classList.remove('page__menu--open');
  body.classList.remove('menu-lock');
}

openMenuButton.addEventListener('click', openMenu);

closeMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
});

// navLinks.forEach((link) => {
//   link.addEventListener('click', closeMenu);
// });

window.addEventListener('hashchange', closeMenu);

// Menu items class change
function updateMenuTitleClass() {
  const menuLinks = document.querySelectorAll('.menu__nav .nav__link');

  menuLinks.forEach((menuLink) => {
    if (window.innerWidth < 768) {
      menuLink.classList.remove('title--h3');
      menuLink.classList.add('title--h5');
    } else {
      menuLink.classList.remove('title--h5');
      menuLink.classList.add('title--h3');
    }
  });
}

updateMenuTitleClass();

window.addEventListener('resize', updateMenuTitleClass);
