'use strict';

function disable() {
  document.querySelector('.page__body').classList.add('disable-scroll');
}

function enable() {
  document.querySelector('.page__body').classList.remove('disable-scroll');
}

document.querySelector('#prevent').addEventListener('click', disable);
document.querySelector('#allow').addEventListener('click', enable);
