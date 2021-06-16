
'use strict';

const logo = document.getElementById('logo');
const burger = document.getElementById('burger');
const events = document.getElementById('link-3');
const visit = document.getElementById('link-4');
const news = document.getElementById('link-5');
const dijest = document.getElementById('link-6');
const info = document.getElementById('link-7');

logo.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  logo.classList.toggle('burger-close');
});

events.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  logo.classList.toggle('burger-close');
});

visit.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  logo.classList.toggle('burger-close');
});

news.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  logo.classList.toggle('burger-close');
});

dijest.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  logo.classList.toggle('burger-close');
});

info.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  logo.classList.toggle('burger-close');
});

const input1 = document.getElementById('input__radio-1');
const input2 = document.getElementById('input__radio-2');
const input3 = document.getElementById('input__radio-3');
const newsBlock1 = document.getElementById('news__block-1');
const newsBlock2 = document.getElementById('news__block-2');
const newsBlock3 = document.getElementById('news__block-3');
const mediaQuery1 = window.matchMedia('(max-width: 500px)');

input2.onclick = function ChangeDisplay() {
  if (mediaQuery1) {
    newsBlock1.style.display = 'none';
    newsBlock2.style.display = 'inline-block';
    newsBlock3.style.display = 'none';
    input2.classList.toggle('news__input--active');
    input1.classList.remove('news__input--active');
    input3.classList.remove('news__input--active');
  }
};

input1.onclick = function ChangeDisplay() {
  newsBlock1.style.display = 'inline-block';
  newsBlock2.style.display = 'none';
  newsBlock3.style.display = 'none';
  input1.classList.toggle('news__input--active');
  input2.classList.remove('news__input--active');
  input3.classList.remove('news__input--active');
};

input3.onclick = function ChangeDisplay() {
  newsBlock1.style.display = 'none';
  newsBlock2.style.display = 'none';
  newsBlock3.style.display = 'inline-block';
  input3.classList.toggle('news__input--active');
  input1.classList.remove('news__input--active');
  input2.classList.toggle('news__input--active');
};

const input = document.querySelector('.subscribe__button-submit');

input.addEventListener('submit', () => {
  input.forEach(inp => {
    inp.value = '';
  });
});
