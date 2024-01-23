'use strict';

// const; let //
const menu = document.querySelector('.menu-content');
const menuOpener = document.querySelector('.menu-opener');
const menuCloser = menu.querySelector('.menu-content__topbar-closer');
const links = document.querySelectorAll('.nav-list-item-link');

// dropdown menu //
menuOpener.addEventListener('click', (event) => {
  menu.classList.add('menu-active');
});

menuCloser.addEventListener('click', (event) => {
  menu.classList.remove('menu-active');
});

// dropdown menu; work with links //
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    menu.classList.remove('menu-active');
  });
}

// subscribe button //
document.addEventListener('DOMContentLoaded', function() {
  const showMessage = function(text) {
    const messageContainer = document.createElement('div');

    messageContainer.textContent = text;
    messageContainer.style.fontFamily = 'Raleway';
    messageContainer.style.backgroundColor = '#eee';
    messageContainer.style.padding = '10px';
    messageContainer.style.border = '1px solid #344f10';
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '30%';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(messageContainer);

    setTimeout(function() {
      document.body.removeChild(messageContainer);
    }, 2500);
  };

  const formButton = document.querySelector('.digest__form__fieldset__button');

  formButton.addEventListener('click', function() {
    const email
      = document.querySelector('.digest__form__fieldset__input-email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      showMessage('Вітаємо, Ви підписані на новини від нашого музею');
    } else {
      showMessage('Введіть, будь ласка, правильний e-mail');
    };
  });
});

// archive of exhibitions buttons //
const exArchiveButtonDesk
  = document.querySelector('.actual__button-archive-desktop');
const exArchiveButtonMob
  = document.querySelector('.actual__button-archive-mob');

exArchiveButtonDesk.addEventListener('click', event => {
  event.preventDefault();

  const url = 'https://hmarochos.kiev.ua/tag/natsionalniy-hudozhniy-muzey/';

  window.open(url, '_blank');
});

exArchiveButtonMob.addEventListener('click', event => {
  event.preventDefault();

  const url = 'https://hmarochos.kiev.ua/tag/natsionalniy-hudozhniy-muzey/';

  window.open(url, '_blank');
});

// comming events buttons //
const commingEventsButtonDesk
  = document.querySelector('.comming__button-calendar-desktop');
const commingEventsButtonMob
  = document.querySelector('.comming__button-calendar-mob');

commingEventsButtonDesk.addEventListener('click', event => {
  event.preventDefault();

  const url = 'https://www.facebook.com/namu.museum/?locale=uk_UA';

  window.open(url, '_blank');
});

commingEventsButtonMob.addEventListener('click', event => {
  event.preventDefault();

  const url = 'https://www.facebook.com/namu.museum/?locale=uk_UA';

  window.open(url, '_blank');
});

// news buttons //
const newsButtonDesk
  = document.querySelector('.news__button-allnews-desktop');
const newsButtonMob
  = document.querySelector('.news__button-allnews-mob');

newsButtonDesk.addEventListener('click', event => {
  event.preventDefault();

  const url = 'https://www.facebook.com/namu.museum/?locale=uk_UA';

  window.open(url, '_blank');
});

newsButtonMob.addEventListener('click', event => {
  event.preventDefault();

  const url = 'https://www.facebook.com/namu.museum/?locale=uk_UA';

  window.open(url, '_blank');
});
