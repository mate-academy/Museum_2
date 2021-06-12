
'use strict';

const logo = document.getElementById('logo');
const burger = document.getElementById('burger');
const close = document.getElementById('close');
const header = document.getElementById('link-1');
const exhibitions = document.getElementById('link-2');
const events = document.getElementById('link-3');
const visit = document.getElementById('link-4');
const news = document.getElementById('link-5');
const dijest = document.getElementById('link-6');
const info = document.getElementById('link-7');

logo.onclick = function changeColor() {
  burger.style.display = 'inline-block';
  logo.style.display = 'none';
};

close.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
  burger.style.transition = '1s';
};

header.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};

exhibitions.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};

events.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};

visit.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};

news.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};

dijest.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};

info.onclick = function changeColor() {
  burger.style.display = 'none';
  logo.style.display = 'flex';
};
