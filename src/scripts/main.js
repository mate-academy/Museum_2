'use strict';

const slider = document.querySelector('.news__slider');

document.querySelectorAll('.news__toggler').forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    document.querySelector('.selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (index) * -100 + '%)';
  });
});

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--opener');
const menu = document.querySelector('.menu');

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
