'use strict';

const but = document.getElementById('link');
const cross = document.getElementById('cross');

but.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(0)';
  document.getElementById('page').style.overflowY = 'hidden';
});

cross.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(-100%)';
  document.getElementById('page').style.overflowY = 'visible';
});

const actual = document.getElementById('actual-link');
const coming = document.getElementById('coming-link');
const news = document.getElementById('news-link');
const menu = document.getElementById('menu-link');

actual.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(-100%)';
  document.getElementById('page').style.overflowY = 'visible';
});

coming.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(-100%)';
  document.getElementById('page').style.overflowY = 'visible';
});

news.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(-100%)';
  document.getElementById('page').style.overflowY = 'visible';
});

menu.addEventListener('click', function() {
  document.location.reload();
});
