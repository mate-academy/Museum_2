import '../styles/base/styles.scss';
'use strict';


// // NOTE: управление активацией и отключением кнопок
// const myButton = document.querySelector('.btn-red');

// // Чтобы выключить:
// myButton.disabled = true; // Для тега <button>
// myButton.setAttribute('disabled', ''); // Для тега <div>

// // Чтобы включить:
// myButton.disabled = true;
// myButton.removeAttribute('disabled');


const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('menu');
const langSelector = document.getElementById('lang-select');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu-top__link');

function toggleMenu() {
  mobileMenu.classList.toggle('menu-top__is-open');
  burgerBtn.classList.toggle('header__burger--is-active');
  langSelector.classList.toggle('header__dropdown--is-active');
  body.classList.toggle('body__no-scroll');
}
burgerBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('menu-top__is-open')) {
      toggleMenu();
    }
  });
});
