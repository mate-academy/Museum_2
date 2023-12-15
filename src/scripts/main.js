'use strict';

const dropdown = document.querySelector('.dropdown__toggle');
const menuButton = document.querySelector('.header__menu-open');
const menu = document.getElementById('menu');
const navLink = document.querySelectorAll('.nav__link');
const languageLink = document.querySelectorAll('.dropdown__link');
const formEmail = document.querySelector('.subscribe__email');
const formLabel = document.querySelector('.subscribe__label');

function dropDownFunc(dropDown) {
  if (dropDown.classList.contains('dropdown__click') === true) {
    dropDown.addEventListener('click', function(e) {
      e.preventDefault();

      if (this.nextElementSibling.classList.contains('dropdown__active')) {
        this.parentElement.classList.remove('dropdown__open');
        this.nextElementSibling.classList.remove('dropdown__active');
      } else {
        this.parentElement.classList.add('dropdown__open');
        this.nextElementSibling.classList.add('dropdown__active');
      }
    });
  }
};

dropDownFunc(dropdown);

languageLink.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    closeDropdown();
  });
});

function closeDropdown() {
  dropdown.parentElement.classList.remove('dropdown__open');
  dropdown.nextElementSibling.classList.remove('dropdown__active');
}

menuButton.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('page__menu-active');
  menuButton.classList.toggle('header__menu-active');
});

function toggleMenu(element) {
  element.addEventListener('click', () => {
    menu.classList.toggle('page__menu-active');
    menuButton.classList.toggle('header__menu-active');
  });
}

navLink.forEach(x => toggleMenu(x));

formEmail.addEventListener('focus', function() {
  formLabel.classList.add('subscribe__label--active');
  this.classList.add('subscribe__email--focus');
});

formEmail.addEventListener('input', function() {
  this.classList.remove('subscribe__email--focus');
});

formEmail.addEventListener('blur', function() {
  if (this.value === '') {
    formLabel.classList.remove('subscribe__label--active');
  }
  this.classList.remove('subscribe__email--focus');
});

/* const menuOpenElement = document.querySelector('.header__menu-open');
const toggleElement = document.querySelector('.dropdown__toggle');

menuOpenElement.addEventListener('click', function() {
  toggleElement.classList.toggle('menu-visible');
}); */
