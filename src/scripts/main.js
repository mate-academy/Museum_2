'use strict';

const body = document.querySelector('body');

// Change language in menu
document.querySelectorAll('.language__options a').forEach((option) => {
  option.addEventListener('click', function (event) {
    event.preventDefault();
    const selectedLang = this.getAttribute('data-lang');
    document.querySelector('.selected-language').textContent = this.textContent;
    document.querySelector('.language').classList.add('selected');
    alert('Selected language: ' + selectedLang);
  });
});

document
  .querySelector('.language__changer')
  .addEventListener('mouseenter', function () {
    document.querySelector('.language').classList.remove('selected');
  });

// Обробник кліку для кнопки меню
const menuButton = document.querySelector('.header__menu');
const closeButton = document.querySelector('.nav__header-close-button');
const menuLinks = document.querySelectorAll('.nav__menu-list a');
const nav = document.querySelector('.nav');

if (menuButton) {
  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });
}

if (closeButton) {
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
  });
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
    body.classList.remove('no-scroll');
  });
});

function toggleMenu() {
  nav.classList.toggle('nav--open');
  body.classList.toggle('no-scroll');
}

function closeMenu() {
  nav.classList.remove('nav--open');
  body.classList.remove('no-scroll');
}

// e-mail error message
document.getElementById('subscribeForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var emailInput = document.getElementById('email');
  var errorMessage = document.querySelector('.error-message');

  if (!emailInput.checkValidity()) {
    event.preventDefault(); // Зупинити відправлення форми
    errorMessage.style.display = 'block'; // Показати повідомлення про помилку
  } else {
    errorMessage.style.display = 'none'; // Сховати повідомлення про помилку
    emailInput.value = ''; // Очистити поле вводу
  }
});
