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
document
  .querySelector('.header__menu')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--open');
    body.classList.toggle('no-scroll');
  });

// Обробник кліку для кнопки закриття меню
document
  .querySelector('.nav__header-close-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.nav').classList.remove('nav--open');
    document.querySelector('.body').classList.remove('no-scroll');
  });

// Закриття після вибору посилання з меню
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.nav__menu-list a');
  const nav = document.querySelector('.nav');

  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
    });
  });
});

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
