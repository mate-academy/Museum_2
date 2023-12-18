'use strict';

const dropdown = document.querySelector('.dropdown__toggle');
const menuButton = document.querySelector('.header__menu-open');
const formEmail = document.querySelector('.subscribe__email');
const formLabel = document.querySelector('.subscribe__label');

menuButton.addEventListener('click', function() {
  dropdown.classList.toggle('menu-visible');
});

const menu = document.getElementById('menu');

function toggleMenu() {
  menu.classList.toggle('page__menu-active');
}

const menuLinksList = document.querySelectorAll('#menu a');

menuLinksList.forEach(function(menuLink) {
  menuLink.addEventListener('click', function() {
    toggleMenu();
  });
});

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
